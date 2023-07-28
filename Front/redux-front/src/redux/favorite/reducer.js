import FavoriteActionTypes from "./action-types";

const initialState = {
    favoriteState: false,
};

const favoriteReducer = (state = initialState, action) => {
    if(action.type == FavoriteActionTypes.FAVORITE){
        const newState = {...state}
        newState.favoriteState = !newState.favoriteState;
        return newState;
    }

    if(action.type == FavoriteActionTypes.DISFAVOR){
        const newState = {...state}
        newState.favoriteState = !newState.favoriteState;
        return newState;
    }

    return state
};

export default favoriteReducer;