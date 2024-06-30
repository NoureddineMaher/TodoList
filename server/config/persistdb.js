const connection = require('./connectdb')


async function persistdb() {
    await connection();
}


module.exports = persistdb;