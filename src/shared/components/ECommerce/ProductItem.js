import IntlMessages from '@kongd/components/IntlMessages';
import { Button } from 'antd';
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ProductItem = ({ product, grid }) => {
  const { thumb, name, price, mrp, offer, variant, rating, description } =
    product;
  return (
    <div
      className={`kd-product-item  ${
        grid ? 'kd-product-vertical' : 'kd-product-horizontal'
      }`}
    >
      <div className="kd-product-image">
        <div className="kd-grid-thumb-equal">
          <span className="kd-link kd-grid-thumb-cover">
            <img alt="Remy Sharp" src={thumb} />
          </span>
        </div>
      </div>

      <div className="kd-product-body">
        <h3 className="kd-product-title">
          {name}
          <small className="kd-text-grey">{', ' + variant}</small>
        </h3>
        <div className="ant-row-flex">
          <h4>{price} </h4>
          <h5 className="kd-text-muted kd-px-2">
            <del>{mrp}</del>
          </h5>
          <h5 className="kd-text-success">{offer} off</h5>
        </div>
        <div className="ant-row-flex kd-mb-1">
          <StarRatingComponent
            name=""
            value={rating}
            starCount={5}
            editing={false}
          />
          <strong className="kd-d-inline-block kd-ml-2">{rating}</strong>
        </div>
        <p>{description}</p>
      </div>

      <div className="kd-product-footer">
        <Button variant="raised">
          <IntlMessages id="eCommerce.addToCart" />
        </Button>

        <Button type="primary">
          <IntlMessages id="eCommerce.readMore" />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
