const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route")


const app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


//route
app.use("/users", usersRouter);


//route


app.use((req, res, next) => {
    res.status(404).json({massege: 'route not found'});
})

app.use((err, req, res, next) => {
    res.status(500).json({massege: 'something broke'});
})




module.exports = app;
