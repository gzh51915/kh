const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'khly';

function connect() {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, function (err, client) {
            console.log("Connected successfully to server");

            db = client.db(dbName);

            resolve({ db, client })
            //   client.close();
        });

    })

}


// 增
async function create(colName,data) {
    // 连接数据库
    const {db,client} = await connect();

    const collection = db.collection(colName);

    if(!Array.isArray(data)){
        data = [data];
    }

    await collection.insertMany(data);

    client.close()
}


// 删
function remove() {

}

// 改
function update() {

}


// 查
async function find(colName,query) {
    const {db,client} = await connect();

    const collection = db.collection(colName);

    const result = collection.find(query);

    return result.toArray();
}


module.exports = {
    create,
    remove,
    update,
    find
}