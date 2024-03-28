import React from 'react';
import { Tile } from '@carbon/react';
import styles from './summary-tile.scss';
import { useTranslation } from 'react-i18next';

const SummaryTile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Tile className={styles.tileContainer}>
        <div>
          <div className={styles.tileContent}>
            <div className={styles.tileHeader}>
              <header>placeholder text</header>
            </div>
            <div className={styles.displayDetails}>
              <div>Patients</div>
              <div className={styles.displayData}>{0}</div>
            </div>
          </div>
        </div>
      </Tile>
    </React.Fragment>
  );
};

export default SummaryTile;
