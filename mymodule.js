const fs = require('fs')
const path = require('path')

const filterFunction = (dir, filterString, callback) =>{
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }

        list = list.filter((file) => {
            return path.extname(file) === '.' + filterString;
        })

        callback(null, list);
    })
};
module.exports = filterFunction;