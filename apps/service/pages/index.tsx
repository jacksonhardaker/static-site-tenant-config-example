import styles from './index.module.css';
import { useConfig } from '../src/useConfig';

const EMOJI = {
  orange: '🍊',
  apple: '🍎',
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
              {config?.tenant ? EMOJI[config.tenant] : null} 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
