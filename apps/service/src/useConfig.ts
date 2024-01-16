import { useEffect, useState } from 'react';

type Config = {
  tenant: 'apple' | 'orange';
  environment: 'production' | 'staging';
};

interface WindowWithConfig extends Window {
  _bitdrift: {
    config: Config;
  };
}

const isWindowWithConfig = (window: Window): window is WindowWithConfig => {
  if (Object.hasOwnProperty.call(window, '_bitdrift')) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (Object.hasOwnProperty.call((window as any)._bitdrift, 'config')) {
      return true;
    }
  }
  return false;
};

export const useConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    if (isWindowWithConfig(window)) {
      setConfig(window._bitdrift.config);
      window._bitdrift.config = new Proxy(window._bitdrift.config, {
        set: (obj, key, value) => {
          Reflect.set(obj, key, value);
          setConfig({ ...obj });
          return true;
        },
      });
    }
  }, []);

  return config;
};
