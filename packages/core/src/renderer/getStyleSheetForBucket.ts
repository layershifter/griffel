import { GriffelRenderer, StyleBucketName } from '../types';

/**
 * Ordered style buckets using their short pseudo name.
 *
 * @private
 */
export const styleBucketOrdering: StyleBucketName[] = [
  // catch-all
  'd',
  // link
  'l',
  // visited
  'v',
  // focus-within
  'w',
  // focus
  'f',
  // focus-visible
  'i',
  // hover
  'h',
  // active
  'a',
  // keyframes
  'k',
  // at-rules
  't',
  // media queries
  'm',
  // media queries with support rules
  's',
];

type StyleSheetParams = {
  bucketName: StyleBucketName;
  media?: string;
};

//
// d .foo { color: red }
// t @supports () .foo { color: red } // bucketName: t
// m @media (1px) .foo { color: red } // bucketName: m.1px
// m @media (2px) .foo { color: red } // bucketName: m.2px
// s @supports && @media (1px) .foo { color: red } // bucketName: s.1px
// s @supports && @media (2px) .foo { color: red } // bucketName: s.2px
//
//

export function getStyleElementSibling(
  styleElements: HTMLStyleElement[],
  compareMediaQuery: (a: string, b: string) => number,
  referenceParams: StyleSheetParams,
) {
  const { bucketName: targetBucketName, media } = referenceParams;
  const targetBucketIndex = styleBucketOrdering.indexOf(targetBucketName);

  let nextBucket = null;
  let currentIndex = 0;

  for (; currentIndex < styleElements.length; currentIndex++) {
    const styleElement = styleElements[currentIndex];

    const currentBucketName = styleElement.dataset['makeStylesBucket'] as StyleBucketName;
    const currentBucketIndex = styleBucketOrdering.indexOf(currentBucketName);

    if (currentBucketIndex >= targetBucketIndex) {
      nextBucket = styleElement;
      break;
    }
  }

  if (targetBucketName === 'm') {
    for (; currentIndex < styleElements.length; currentIndex++) {
      const styleElement = styleElements[currentIndex];

      const currentBucketName = styleElement.dataset['makeStylesBucket'] as StyleBucketName;
      const currentBucketMedia = styleElement.dataset['makeStylesMedia'] as string;

      if (currentBucketName !== 'm' || compareMediaQuery(currentBucketMedia, media!) > 1) {
        nextBucket = styleElement;
        break;
      }
    }
  }

  return nextBucket;
}

export function getStylesheetFromCache(
  target: Document | undefined,
  renderer: GriffelRenderer,
  elementAttributes: Record<string, string> = {},
  referenceParams: StyleSheetParams,
  compareMediaQuery: (a: string, b: string) => number,
): CSSStyleSheet | undefined {
  const { bucketName, media } = referenceParams;
  const reference = bucketName + (media || '');

  if (!target) {
    return undefined;
  }

  if (!renderer.styleElements[reference]) {
    const tag = target.createElement('style');
    tag.dataset['makeStylesBucket'] = bucketName;

    for (const attribute in elementAttributes) {
      tag.setAttribute(attribute, elementAttributes[attribute]);
    }

    const tags = target.head.querySelectorAll<HTMLStyleElement>('[data-make-styles-bucket]');
    const sibling = getStyleElementSibling(Array.from(tags), compareMediaQuery, referenceParams);

    if (sibling) {
      target.head.insertBefore(tag, sibling);
    } else {
      target.head.appendChild(tag);
    }

    renderer.styleElements[reference] = tag;
  }

  return renderer.styleElements[reference].sheet;
}
