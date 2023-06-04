const { v4: uuidv4 } = require('uuid');


const users = [
    {
        id: uuidv4(),
        username: "anisul islam",
        email: "lalalal@yahoo.com"
    },
    { 
        id: uuidv4(),
        username: "rakibul hasan",
        email: "rakibul@yahoo.com"
    },
    {
        id: uuidv4(),
        username: "sumon sikder",
        email: "sumon@yahoo.com"
    }
] 


module.exports = users;