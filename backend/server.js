const express = require('express')
const app = express()
const cors = require('cors')

const fetch = require('node-fetch');

app.use(cors());
app.use(express.json())
const changedUrls = 'https://api.themoviedb.org/3/movie/changes?page=1';
const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?page=2'
const TMDB_API_KEY = '12672946d62829e629243c72e717a0a2'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`;

const BaseImagePath = 'https://image.tmdb.org/t/p/original/'
const tmdbApiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY3Mjk0NmQ2MjgyOWU2MjkyNDNjNzJlNzE3YTBhMiIsIm5iZiI6MTcyMjQxNjYyNC42NzIzMzMsInN1YiI6IjY2YTlmYTQzZTg2YmZlYjdhMjQ2NTM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gc_ua5atW7oEt5bk-_gppm3Y2xL0auOqx2Gw1WD4WG8'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY3Mjk0NmQ2MjgyOWU2MjkyNDNjNzJlNzE3YTBhMiIsIm5iZiI6MTcyMjQxNjYyNC42NzIzMzMsInN1YiI6IjY2YTlmYTQzZTg2YmZlYjdhMjQ2NTM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gc_ua5atW7oEt5bk-_gppm3Y2xL0auOqx2Gw1WD4WG8'
  }
};


app.get('/movies-list',(req,res)=>{
    fetch(discoverUrl, options)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));
})



app.listen(3000,()=>console.log("sever started....."))