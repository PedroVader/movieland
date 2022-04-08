import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// a515dc50

const API_URL = "http://www.omdbapi.com?apikey=a515dc50";


    {/*Forma de extraer de forma estática un objeto de una API para luego plasmarlo en nuestra interfaz*/}

const App = () => {
    
    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTem ] = useState('');
    
    // eslint-disable-next-line no-lone-blocks
    {/*Extraemos data de la API de la biblioteca de películas*/}

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

    //Con este console log podemos comprobar si la data la estamos extrayendo bien y la mostramos en la consola*/}

        setMovies(data.Search);
    }


    // eslint-disable-next-line no-lone-blocks
    {/*Buscamos en la APi de forma estática los títulos de la película que queremos encontrar*/}


    useEffect(() => {   
        searchMovies('Batman');
    }, []);

    return (
    <div className='app'> 
        <h1>MovieLand</h1>
        <div className='search'>
                <input
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTem(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
            ? 
             (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }

    </div>
    );
}

export default App;