/**
 * @providesModule AppRouter
 */

import {
  createRouter,
} from '@exponent/ex-navigation';

import ProductList from '@/screens/shopee/v2/ProductList';
import ProductDetails from '@/screens/shopee/v2/ProductDetails';

const ShopeeV2Routes = createRouter(() => ({
  productList: () => ProductList,
  productDetails: () => ProductDetails,
}));

export default ShopeeV2Routes;