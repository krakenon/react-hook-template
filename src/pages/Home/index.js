import IntlMessages from '@kongd/components/IntlMessages';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2 className="title kd-mb-4">
        <IntlMessages id="sidebar.samplePage" />
      </h2>

      <div className="kd-d-flex justify-content-center">
        <h4>Start building your app. Happy Coding!</h4>
      </div>
    </div>
  );
};

export default HomePage;
