const filterFunction = require('./mymodule.js');
const dir = process.argv[2];
const filterString = process.argv[3];

filterFunction(dir, filterString, (err, list) => {
    if (err) {
        return console.error(err);
    }

    list.forEach((file) => {
        console.log(file);
    })
})
