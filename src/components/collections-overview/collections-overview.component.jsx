import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionsPreview  from '../collections-preview/collections-preview.component'
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionsPreview key ={id} {...otherCollectionProps} />
            ))
        }        
    </div>
)
const mapStateTopProps =createStructuredSelector(
    {collections: selectCollectionsPreview})
export default connect(mapStateTopProps)(CollectionsOverview);