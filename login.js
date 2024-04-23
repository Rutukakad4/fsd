const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencoder = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.use(urlencoder);

app.post('/form_data',  (req, res) => {
    new Promise((resolve, reject) => {
        const data = {
            username: req.body.username,
            password: req.body.password
        };
        if (data.username === "ABC" && data.password === "123") {
            resolve("login successfully!..");
        } else {
            reject("login failed!..");
        }
    })
    .then((message) => {
        res.send(message);
    })
    .catch((err) => {
        res.send(err);
    });
});

app.listen(2000, () => {
    console.log("server is connected");
});
