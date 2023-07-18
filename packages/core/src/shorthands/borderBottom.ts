import type { GriffelStyle } from '@griffel/style-types';

import type { BorderColorInput, BorderStyleInput, BorderWidthInput } from './types';
import { validateArguments } from './utils';

type BorderBottomStyle = Pick<GriffelStyle, 'borderBottomWidth' | 'borderBottomStyle' | 'borderBottomColor'>;

export function borderBottom(width: BorderWidthInput): BorderBottomStyle;
export function borderBottom(width: BorderWidthInput, style: BorderStyleInput): BorderBottomStyle;
export function borderBottom(
  width: BorderWidthInput,
  style: BorderStyleInput,
  color: BorderColorInput,
): BorderBottomStyle;

/**
 * A function that implements expansion for "border-bottom", it's simplified - check usage examples.
 *
 * @example
 *  borderBottom('2px')
 *  borderBottom('2px', 'solid')
 *  borderBottom('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
 */
export function borderBottom(...values: [BorderWidthInput, BorderStyleInput?, BorderColorInput?]): BorderBottomStyle {
  validateArguments('borderBottom', arguments);

  return {
    borderBottomWidth: values[0],
    ...(values[1] && ({ borderBottomStyle: values[1] } as BorderBottomStyle)),
    ...(values[2] && { borderBottomColor: values[2] }),
  };
}
