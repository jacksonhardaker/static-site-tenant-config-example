import config from './vite.config.base';

config.build = {
  ...config.build,
  lib: {
    ...(config.build?.lib ?? {}),
    name: 'config-apple',
    entry: 'src/apple.ts',
  },
};
export default config;
