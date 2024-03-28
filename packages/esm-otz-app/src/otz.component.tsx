import React from 'react';
import OTZHomePatientTabs from './views/dashboard/patient-list-tabs/otz-patient-list-tabs.component';
import OTZSummaryTiles from './views/dashboard/summary-tiles/otz-summary-tiles.component';
import { OTZHeader } from './header/otz-header.component';
import styles from './otz-component.scss';

const OtzDashboard: React.FC = () => {
  return (
    <>
      <div className={`omrs-main-content`}>
        <OTZHeader />
      </div>
      <div className={styles.pageContent}>
        <OTZSummaryTiles />
        <OTZHomePatientTabs />
      </div>
    </>
  );
};

export default OtzDashboard;
