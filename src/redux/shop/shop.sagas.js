import { call, put, takeLatest } from 'redux-saga/effects';

import ShopActionTypes from './shop.type';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action';

export function* fetchCollectionsAsync() {
    yield console.log('SHOT FIRED');
    
    try{
        const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    
    


    // collectionRef.get().then(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
        
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

}

export  function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FECTH_COLLECTIONS_START, fetchCollectionsAsync )
}