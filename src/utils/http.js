
export const apiurl = 'http://localhost:1915/api';

const get = async (url, params) => {
    const res = await fetch(apiurl + url);
    return res.json();
};
const post = async (url) => {
    
}

export default {
    get,
    post
}