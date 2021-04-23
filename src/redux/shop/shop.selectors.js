import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShopItems = state => state.shop;

export const selectCollections = createSelector(
    [selectShopItems],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize( (collectionUrlParam) => createSelector(
            [selectCollections],
            collections => collections[collectionUrlParam]
 ));
