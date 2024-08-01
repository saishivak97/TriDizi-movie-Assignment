const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get('/movies', async (req, res) => {
  const { page = 1 } = req.query;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`;

  try {
    const response = await axios.get(url);
    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    }));
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies data' });
  }
});


app.get('/movie/:id',async (req,res)=>{
  
  const {id} = req.params
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`;

  try {
    const response = await axios.get(movieDetailsUrl);
    const movieDetail = response.data
    res.json(movieDetail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies data' });
  }

})
