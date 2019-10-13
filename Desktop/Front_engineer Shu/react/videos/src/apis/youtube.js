import axios from 'axios';
const KEY = 'AIzaSyAPzk44pkpGvAKDiOhj3drx4X_f7FK9xkE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})