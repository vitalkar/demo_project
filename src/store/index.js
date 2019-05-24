import { createStore } from 'redux'
import pictureReducer from './pictureReducer'

const store = createStore({
    pictureReducer,
})

export default store;
