import { Title, ThemeProvider, DynamicSideContent, Text, RatingIndicator } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets';
import { useState } from 'react';
import axios from '../../axios/config';
import { useSelector, useDispatch } from 'react-redux';
import rootReducer from '../../redux/root-reducer';
import FavoriteActionTypes from "../../redux/favorite/action-types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

function Card() {
    const [search, setSearch] = useState('')
    const [movie, setMovie] = useState({})
    const { favoriteState } = useSelector(rootReducer => rootReducer.favoriteReducer)
    const dispatch = useDispatch()

    function reset() {
        setSearch('')
        setMovie({})
    }

    async function searchMovie() {
        const { data } = await axios.get(`/'${search}`);
        setMovie(data);
    }

    const handleFavoriteClick = () => {
        dispatch({
            type: FavoriteActionTypes.FAVORITE,
        })
    }

    const handleDisfavorClick = () => {
        dispatch({
            type: FavoriteActionTypes.DISFAVOR,
        })
    }

    return (
        <ThemeProvider>
            <div className='container'>
                <Title level="H1" className="tituloFilmePrincipal">
                    Omdb Site
                </Title>

                <Text className='descriptionApp'>
                    Escreva um filme na barra de pesquisar e aperte o botão Search para ele aparecer na tela, e caso precise limpar a tela aperte o botão de Reset. Você pode favoritar o filme apertando no botão de favorito.
                </Text>

                <div>
                    <div id="divBusca">
                        <input type="text" id="txtBusca" value={search} onChange={e => setSearch(e.target.value)} />
                        <button id="btnSearch" onClick={searchMovie}>Search</button>
                        <input type="reset" name="b2" value="Reset" id="btnReset" onClick={reset} />
                    </div>

                </div>

                <div className='groupDescription'>
                    <DynamicSideContent onLayoutChange={function ka() { }}>
                        <div className='descriptionMovie'>
                            <div className='conteudoDescription'>
                                <Title className='tituloFilmeSecundario'>
                                    {movie.title}
                                </Title>
                                <div className='description'>
                                    <Text className='descriptionPlot'>
                                        {movie.plot}
                                    </Text>
                                </div>
                                <div className='actors'>
                                    <Text className='descriptionActors'>
                                        {movie.title &&
                                            <>
                                                <span className='actorStyle'>Actor</span> {movie.actors}
                                            </>
                                        }
                                    </Text>
                                </div>
                                <div className='review'>
                                    {movie.title &&
                                        <>
                                            <span className='reviewStyle'>Review</span> <RatingIndicator onChange={function ka() { }} />
                                        </>
                                    }
                                </div>
                                {movie.title &&
                                    <div className='favoriteButton'>
                                        {favoriteState ?
                                            (<button id="disfavorite" onClick={handleDisfavorClick}>Favorite<AiOutlineHeart size={20} /></button>) :
                                            (<button id="favorite" onClick={handleFavoriteClick}>Favorite<AiFillHeart size={20}/></button>)}
                                    </div>
                                }
                            </div>
                            <div>
                                <img src={movie.poster} />
                            </div>
                        </div>
                    </DynamicSideContent>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Card;