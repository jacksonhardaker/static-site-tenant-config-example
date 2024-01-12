import styles from './index.module.css';
import { tenant } from '@incremental-test/config';

export function Index() {
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
              {tenant} 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
