import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from '../../shapes/ProductTypes';
import { Search } from '../Search/Search';
import { Card } from '../Card';

import './ProductsList.scss';

export const ProductsList = React.memo(
  ({ products }) => {
    const [pinnedItemId, setPinnedItem] = useState(null);
    const [orderedProducts, setOrderedProducts] = useState(products);
    const [query, setQuery] = useState('');

    useMemo(() => setOrderedProducts(
      filterByQuery(products, query),
    ), [products, query]);

    const handlePinned = (itemId) => {
      const targetProduct = orderedProducts.find(({ id }) => id === itemId);
      const isPinned = orderedProducts.indexOf(targetProduct) === 0;

      if (isPinned) {
        setPinnedItem(itemId);

        return;
      }

      const preparedProducts = orderedProducts
        .filter(({ id }) => id !== itemId);

      preparedProducts.unshift(targetProduct);
      setOrderedProducts(preparedProducts);
    };

    const handleQuery = (event) => {
      setQuery(event.target.value);
    };

    return (
      <>
        <Search query={query} onQuery={handleQuery} />

        <ul className="content">

          {products && orderedProducts.map(product => (
            <Card
              key={product.id}
              pinned={pinnedItemId}
              onPin={handlePinned}
              {...product}
            />
          ))}
        </ul>
      </>
    );
  },
);

function filterByQuery(items, query) {
  return items.filter((product) => {
    const { title, description } = product;
    const cardText = `${title} ${description}`;

    return cardText.toLowerCase().includes(query.toLowerCase());
  });
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(ProductShape).isRequired,
};
