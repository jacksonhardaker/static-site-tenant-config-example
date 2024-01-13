import { useEffect, useState } from 'react';
import styles from './index.module.css';

const useConfig = () => {
  const [config, setConfig] = useState(
    typeof window !== 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)?._bitdrift?.config
      : {
          tenant: 'none',
        }
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setConfig((window as any)?._bitdrift?.config);
  }, []);

  return config;
};

export function Index() {
  const config = useConfig();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              {config?.tenant ?? 'stuff'} 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
