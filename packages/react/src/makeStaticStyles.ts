import { makeStaticStyles as vanillaMakeStaticStyles } from '@griffel/core';

import { useRenderer } from './RendererContext';
import type { GriffelStaticStyles, MakeStaticStylesOptions } from '@griffel/core';

export function makeStaticStyles(styles: GriffelStaticStyles | GriffelStaticStyles[]) {
  const getStyles = vanillaMakeStaticStyles(styles);

  if (process.env.NODE_ENV === 'test') {
    return () => {};
  }

  return function useStaticStyles(): void {
    const renderer = useRenderer();
    const options: MakeStaticStylesOptions = { renderer };

    return getStyles(options);
  };
}
