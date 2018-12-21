import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6b79ac7746043208252776dfa70259f5a9072ce9251eee1e1ab37f79fc6cd45c'
    }
}) 