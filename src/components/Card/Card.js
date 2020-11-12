import React from 'react';
import classNames from 'classnames';
import { ProductShape } from '../../shapes/ProductTypes';

import './Card.scss';

export const Card = ({
  title,
  price,
  description,
  image,
  id,
  onPin,
  pinneed,
}) => (
  <li
    className={classNames(
      'product',
      'content__item',
      { red: pinneed === id },
    )}
  >
    <img
      src={image}
      className="product__image"
      alt="A product"
    />

    <div className="product__body card-body">
      <h5 className="product__title card-title">
        {title}
      </h5>

      <span>{`${price}$`}</span>

      <p className="product__paragraph card-text">
        {description}
      </p>

      <div
        className="product__buttons btn-group"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="product__button btn btn-info"
          onClick={() => {}}
        >
          Details
        </button>

        <button
          type="button"
          className="product__button btn btn-warning"
          onClick={() => onPin(id)}
        >
          Pin
        </button>
      </div>
    </div>
  </li>
);

Card.propTypes = ProductShape;
