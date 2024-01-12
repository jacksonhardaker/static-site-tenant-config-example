import config from './vite.config.base';

config.build = {
  ...config.build,
  lib: {
    ...(config.build?.lib ?? {}),
    name: 'config-orange',
    entry: 'src/orange.ts',
  },
};

export default config;
