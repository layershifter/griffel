import { __styles as vanillaStyles } from '@griffel/core';
import type { CSSClassesMapBySlot, CSSRulesByBucket } from '@griffel/core';

import { useRenderer } from './RendererContext';
import { useTextDirection } from './TextDirectionContext';

/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
export function __styles<Slots extends string>(
  classesMapBySlot: CSSClassesMapBySlot<Slots>,
  cssRules: CSSRulesByBucket,
) {
  const getStyles = vanillaStyles(classesMapBySlot, cssRules);

  return function useClasses(): Record<Slots, string> {
    const dir = useTextDirection();
    const renderer = useRenderer();

    return getStyles({ dir, renderer });
  };
}
