import Product from '.';

export default {
  title: 'Product',
  component: Product
};

export const Restaurant = () => (
  <Product title="Monster Meal Pvt Ltd." image="/products/1.png" />
);

export const RestaurantWithBadge = () => (
  <Product
    title="Biryani Adda"
    image="/products/2.png"
    badge
    badgeColor="primary"
    badgeTitle="Open"
  />
);
