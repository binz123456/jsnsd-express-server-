const { router } = require("../app");

var express = require("express");
var router = express.Router();
var hnLatestStream = require("hn-latest-stream")
var finished = require('stream').finished

module.exports = router.get("/" , (req, res, next) => {

    //defaulted to 10 and html
    const { amount = 10 , type = 'html'} = req.query
//setting the content -type of http header
    if( type === 'html') res.type('text/html')
    if(type === 'json') res.type('application/json')


    const stream = hnLatestStream(amount , type)

    //tells stream object to write all data to tresponse object
    stream.pipe(res , { end: false})

    finished(stream , (err) => {
        if(err) {
            next(err)
            return
        }

        res.end()
    })
});