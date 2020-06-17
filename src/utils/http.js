
export const apiurl = 'http://localhost:1915/api';

const get = async (url,data,params={})=>{
    let query = ''
    for(let key in data){// {} => key=val&key=val
        query += `${key}=${data[key]}}&`
    }
    query = query.slice(0,-1);
    if(query.length>0){
        url += '?' + query;
    }
    const res = await fetch(apiurl + url,{
        ...params
    });
    return res.json();
}


export default {
    get
}