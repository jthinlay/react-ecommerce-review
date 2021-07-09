import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import CollectionsOverview from './collections-overview-components';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;