import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';

const mapStateTopProps = createStructuredSelector ({
    isLoading:(state) => !selectIsCollectionLoaded(state) 
});

const CollectionPageContainer = compose(connect(mapStateTopProps),WithSpinner)(CollectionPage);

export default CollectionPageContainer;