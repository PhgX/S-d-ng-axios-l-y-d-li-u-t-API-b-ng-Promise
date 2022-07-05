
let axios = require('axios');

// hàm lấy dữ liệu bằng axios trả về promise:
function getJSONAPI(){
    return new Promise ((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/2')
        .then(json => resolve(json.data))
        .catch(err => reject(err))
    });
}

getJSONAPI().then(result => console.log(result))