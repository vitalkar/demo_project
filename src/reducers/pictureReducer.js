import {getPics, getSinglePic} from '../actions/pictureActions';
import { pictureConstants } from '../constants/constants';
//
const initialState = {
    items: ['one', 'two']
}

const pictureReducer = (state = initialState, action) => {
    //

    switch (action.type) {

        case pictureConstants.FOO: 
            console.log('FOO');
            
            return  { ...state, items: [ ...state.items, action.payload ] } ;
        case pictureConstants.GET_SINGLE_PIC :
            console.log('get single picture');
            
            break;
        case pictureConstants.GET_PICS :
            console.log('get pictures');
            
            break;
    
        default:
            return state;
            
    }

} 
export default pictureReducer;

