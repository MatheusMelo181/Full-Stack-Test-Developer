import { useEffect, useState } from "react";
import axios from "axios";
import { BusyIndicator } from '@ui5/webcomponents-react';

function Search() {

    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        try {

            const response = await axios.get("localhost:3000/omdb/");
            
            const data = response.data;

            setMovies(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies
    }, [])

    return (
        <div>
            {movies.length === 0 ? <p><BusyIndicator active /></p> : (
                movies.map((movie) => (
                    <div className="search" key={movie.name}>
                        <h2>{movie.title}</h2>
                        <h2>{movie.actors}</h2>
                        <h2>{movie.plot}</h2>
                        <h2>{movie.poster}</h2>
                    </div>
                ))
            )}
            <div id="divBusca">
                <input type="text" id="txtBusca" />
                <button id="btnSearch">Search</button>
                <input type="reset"  name="b2" value="Reset" id="btnReset"/>
            </div>
        </div>
    );
}

export default Search;