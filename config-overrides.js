/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { resolve as _resolve } from 'path';
import { addWebpackAlias, override, useBabelRc } from 'customize-cra';

const resolve = dir => _resolve(__dirname, dir);

export default override(
  addWebpackAlias({ '@app': resolve('src') }),

  useBabelRc()
);
