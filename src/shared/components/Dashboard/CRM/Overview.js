import React from 'react';

import BubbleMap from './BubbleMap';
import LineIndicator from './LineIndicator';

const Overview = () => {
  return (
    <div className="kd-card-overview">
      <div className="kd-overview-row">
        <div className="kd-line-indicator-col">
          <h2 className="h4 kd-card-title">Revenu Overview</h2>
          <ul className="kd-line-indicator">
            <li>
              <LineIndicator
                width="25%"
                title="Europe"
                color="purple"
                value="25%"
              />
            </li>
            <li>
              <LineIndicator
                width="40%"
                title="North America"
                color="green"
                value="40%"
              />
            </li>
            <li>
              <LineIndicator
                width="28%"
                title="Japan, South Koria"
                color="yellow"
                value="28%"
              />
            </li>
            <li>
              <LineIndicator
                width="18%"
                title="Others"
                color="grey"
                value="18%"
              />
            </li>
          </ul>
        </div>
        <div className="kd-overview-description">
          <div className="kd-revenu kd-revenu-total">
            <h1>$2,650</h1>
            <span className="kd-fs-md">Total Revenu</span>
          </div>

          <div className="kd-revenu">
            <div className="kd-revenu-row">
              <div className="kd-revenu-col">
                <h3>23</h3>
                <span className="kd-fs-sm">Clients</span>
              </div>

              <div className="kd-revenu-col">
                <h3>07</h3>
                <span className="kd-fs-sm">Countries</span>
              </div>
            </div>
          </div>
        </div>
        <div className="kd-map-col">
          <BubbleMap />
        </div>
      </div>
    </div>
  );
};

export default Overview;
