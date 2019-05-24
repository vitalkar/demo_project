import { pictureConstants } from '../constants/constants';

export const getPics= () => {
    return {
        type: pictureConstants.GET_PICS
    };
}

export const getSinglePic= (data) => {
    return {
        type: pictureConstants.GET_SINGLE_PIC,
        data
    };
}
