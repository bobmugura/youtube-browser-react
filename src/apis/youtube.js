import axios from 'axios';

const KEY = 'AIzaSyCT1QDRTubrguPyHuGSQDGssZIGhLKtw2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
