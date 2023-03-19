import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { DefinePlugin, type RuleSetRule } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration; }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  // @ts-expect-error will fix
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (rule.test!.toString().includes('svg')) {
      return {
        ...rule,
        exclude: /\.svg$/i
      };
    }

    return rule;
  });

  config.module!.rules.push(buildSvgLoader());
  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }));

  return config;
};
