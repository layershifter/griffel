import { __resetStyles, __styles } from '@griffel/react';

export const useClasses = __styles(
  {
    root: {
      Bi91k9c: 'faf35ka',
    },
  },
  {
    m: [
      ['@media(min-width: 1px) {.fcnqdeg{background-color:green;}}', { m: '(min-width: 1px)' }],
      ['@media(min-width: 2px) { .fe3e8s9{color:olive;} }', { m: '(min-width: 2px)' }],
    ],
  },
);

export const useClassName = __resetStyles('rjefjbm', 'r7z97ji', [
  '.rjefjbm{color:red;padding-left:4px;}',
  '.r7z97ji{color:red;padding-right:4px;}',
]);

export async function loadStyles() {
  const stylesA = await import(/* webpackChunkName: "chunkA" */ './chunkA');
  const stylesB = await import(/* webpackChunkName: "chunkB" */ './chunkB');

  return [stylesA, stylesB];
}
