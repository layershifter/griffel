import { createDOMRenderer } from './createDOMRenderer';
import { getStyleElementSibling, getStylesheetFromCache } from './getStyleSheetForBucket';
import { StyleBucketName } from '../types';

const mediaQueryOrder = [
  'screen and (max-width: 1px)',
  'screen and (max-width: 2px)',
  'screen and (max-width: 3px)',
  'screen and (max-width: 4px)',
];
const compareMediaQuery = (a: string, b: string) => {
  return mediaQueryOrder.indexOf(a) - mediaQueryOrder.indexOf(b);
};

function createBucketElement(bucketName: StyleBucketName) {
  const styleElement = document.createElement('style');
  styleElement.dataset['makeStylesBucket'] = bucketName;

  return styleElement;
}

function createMediaBucketElement(media: string) {
  const styleElement = document.createElement('style');
  styleElement.dataset['makeStylesBucket'] = 'm';
  styleElement.dataset['makeStylesMedia'] = media;

  return styleElement;
}

function createFakeDocument(): Document {
  const doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
  doc.documentElement.appendChild(document.createElementNS('http://www.w3.org/1999/xhtml', 'head'));

  return doc;
}

describe('getStyleSheetForBucket', () => {
  it('sets "data-make-styles-bucket" attribute', () => {
    const target = createFakeDocument();
    const renderer = createDOMRenderer();

    getStylesheetFromCache(target, renderer, {}, { bucketName: 'd' }, compareMediaQuery);
    getStylesheetFromCache(target, renderer, {}, { bucketName: 'h' }, compareMediaQuery);

    expect(target.head.innerHTML).toMatchInlineSnapshot(
      `"<style xmlns=\\"http://www.w3.org/1999/xhtml\\" data-make-styles-bucket=\\"d\\"></style><style xmlns=\\"http://www.w3.org/1999/xhtml\\" data-make-styles-bucket=\\"h\\"></style>"`,
    );
  });
});

describe('getStyleElementSibling', () => {
  it('foo', () => {
    const d = createBucketElement('d');
    const w = createBucketElement('w');
    const f = createBucketElement('f');

    expect(getStyleElementSibling([d, w, f], compareMediaQuery, { bucketName: 'v' })).toBe(w);
  });

  it('m', () => {
    const d = createBucketElement('d');
    const w = createBucketElement('w');
    const f = createBucketElement('f');

    expect(getStyleElementSibling([d, w, f], compareMediaQuery, { bucketName: 'm' })).toBe(null);
  });

  it('m1', () => {
    const d = createBucketElement('d');
    const m2 = createMediaBucketElement('screen and (max-width: 2px)');
    const m4 = createMediaBucketElement('screen and (max-width: 4px)');

    expect(
      getStyleElementSibling([d, m2, m4], compareMediaQuery, { bucketName: 'm', media: 'screen and (max-width: 3px)' }),
    ).toBe(m4);
  });

  it('m1', () => {
    const d = createBucketElement('d');
    const m2 = createMediaBucketElement('screen and (max-width: 2px)');

    expect(
      getStyleElementSibling([d, m2], compareMediaQuery, { bucketName: 'm', media: 'screen and (max-width: 1px)' }),
    ).toBe(m2);
  });

  it('m1', () => {
    const d = createBucketElement('d');
    const m2 = createMediaBucketElement('screen and (max-width: 2px)');
    const t = createBucketElement('t');

    expect(
      getStyleElementSibling([d, m2, t], compareMediaQuery, { bucketName: 'm', media: 'screen and (max-width: 3px)' }),
    ).toBe(t);
  });
});
