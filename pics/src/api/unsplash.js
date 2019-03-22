import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 20f405a164174adb46c4ba0ee739deb546996b5eacb1c2503211e12260449bed'
    }
});
