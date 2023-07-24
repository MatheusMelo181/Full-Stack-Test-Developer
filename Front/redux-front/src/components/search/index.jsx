import { useDispatch } from "react-redux";

import { searchMovieJson } from "../../redux/movies/actions";

function Search() {
    const dispatch = useDispatch();

    const searchMovie = () => {
        dispatch(searchMovieJson({ name: "Batman"}));
    };

    return (
        <div onClick={searchMovie}>Search</div>
    );
}

export default Search;