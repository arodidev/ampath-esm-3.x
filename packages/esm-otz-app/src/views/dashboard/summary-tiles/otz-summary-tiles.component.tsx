import React, { useEffect, useMemo, useState } from 'react';
import SummaryTile from './summary-tile.component';
import styles from './otz-summary-tiles.scss';

function OTZSummaryTiles() {
  return (
    <div className={styles.tilesContainer}>
      <SummaryTile />
      <SummaryTile />
      <SummaryTile />
    </div>
  );
}

export default OTZSummaryTiles;
