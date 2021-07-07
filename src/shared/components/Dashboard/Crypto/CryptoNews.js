import CircularProgress from '@kongd/components/CircularProgress';
import Widget from '@kongd/components/Widget';
import { Radio } from 'antd';
import React, { useState } from 'react';

import {
  allNews,
  bitCoinNews,
  lightCoinNews,
  rippleNews,
} from '../../../routes/main/dashboard/Crypto/data';
import CryptoNewsItem from './CryptoNewsItem';

const newsData = [allNews, bitCoinNews, lightCoinNews, rippleNews];

const CryptoNews = () => {
  const [news, setNews] = useState(newsData[0]);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setNews(newsData[value]);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  };

  return (
    <Widget>
      <div className="ant-row-flex kd-justify-content-between kd-mb-3 kd-dash-search">
        <h2 className="h4 kd-mb-3 kd-mb-sm-1 kd-mr-2">Crypto News</h2>
        <div className="kd-mx-sm-2">
          <Radio.Group
            className="kd-radio-group-link kd-radio-group-link-news"
            defaultValue={0}
            onChange={handleChange}
          >
            <Radio.Button value={0} className="kd-mb-1">
              All
            </Radio.Button>
            <Radio.Button value={1} className="kd-mb-1">
              Bitcoin
            </Radio.Button>
            <Radio.Button value={2} className="kd-mb-1">
              Ripple
            </Radio.Button>
            <Radio.Button value={3} className="kd-mb-1">
              Litecoin
            </Radio.Button>
          </Radio.Group>
        </div>
        <span className="kd-ml-2 kd-search-icon">
          <i className="icon icon-search-new kd-text-primary kd-fs-xxl kd-pointer" />
        </span>
      </div>

      {loader ? (
        <CircularProgress className="kd-loader-400" />
      ) : (
        news.map((data, index) => <CryptoNewsItem key={index} data={data} />)
      )}
    </Widget>
  );
};

export default CryptoNews;
