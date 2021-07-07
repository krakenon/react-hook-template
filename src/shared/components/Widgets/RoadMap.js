import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import CardBox from '@kongd/components/CardBox';
import React from 'react';
import Slider from 'react-slick';

import { mediaList } from '../../routes/main/Widgets/data';
import RoadMapItem from './RoadMapItem';

const RoadMap = () => {
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
    <CardBox styleName="kd-card-full" heading={''}>
      <Slider className="kd-slick-slider" {...settings}>
        {mediaList.map((media, index) => (
          <RoadMapItem key={index} data={media} />
        ))}
      </Slider>
    </CardBox>
  );
};

export default RoadMap;
