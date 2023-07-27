import FavoriteActionTypes from "./action-types";

const initialState = {
    favoriteState: false,
};

const favoriteReducer = (state = initialState, action) => {
    if(action.type == FavoriteActionTypes.FAVORITE){
        return { ...state, favoriteState: true };
    }

    if(action.type == FavoriteActionTypes.DISFAVOR){
        return { ...state, favoriteState: false };
    }

    return state
};

export default favoriteReducer;