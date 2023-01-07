import type { TransformOptions } from '@babel/core';
import type { EvalRule } from '@linaria/utils';

export type BabelPluginOptions = {
  /**
   * Returns the evaluated CSS rules in the file result metadata
   * @default false
   */
  generateMetadata?: boolean;
  /** Defines set of modules and imports handled by a transformPlugin. */
  modules?: {
    moduleSource: string;
    importName: string;
    resetImportName?: string;
  }[];

  /**
   * If you need to specify custom Babel configuration, you can pass them here. These options will be used by the
   * transformPlugin when parsing and evaluating modules.
   */
  babelOptions?: Pick<TransformOptions, 'plugins' | 'presets'>;

  /** The set of rules that defines how the matched files will be transformed during the evaluation. */
  evaluationRules?: EvalRule[];
};

export type BabelPluginMetadata = {
  cssEntries: Record<string, Record<string, string[]>>;
  cssResetEntries: Record<string, string[]>;
};
