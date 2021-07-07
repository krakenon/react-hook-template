import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Widget from '@kongd/components/Widget';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Slider from 'react-slick';

import { greenStepList } from '../../routes/main/Widgets/data';
import GreenStepItem from './GreenStepItem';

const GreenStepCard = () => {
  const [image, setImage] = useState(greenStepList[0].image);
  const [loading, setLoading] = useState(false);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Widget styleName="kd-card-full">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
          <div className="kd-slick-slider-lt-thumb">
            <img
              className={
                loading ? 'fadeout kd-img-fluid' : 'fadein kd-img-fluid'
              }
              src={image}
              alt="..."
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
          <Slider
            className="kd-slick-slider kd-slick-slider-dot-top"
            {...settings}
            afterChange={(index) => {
              setLoading(false);
              setImage(greenStepList[index].image);
            }}
            beforeChange={(oldIndex, newIndex) => {
              setLoading(true);
            }}
          >
            {greenStepList.map((data, index) => (
              <GreenStepItem key={index} data={data} />
            ))}
          </Slider>
        </Col>
      </Row>
    </Widget>
  );
};

export default GreenStepCard;
