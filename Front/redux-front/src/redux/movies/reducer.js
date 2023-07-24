const initialState = {
    currentUser: null
};

const movieReducer = (state = initialState, action) => {
    
    return {...state, currentUser: action.payload };
};

export default movieReducer;