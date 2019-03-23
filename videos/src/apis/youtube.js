import axios from 'axios';



const KEY = 'AIzaSyCJEl3ZjcRVI_5kpynIpC_-mGBMRyyAa3Y'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})