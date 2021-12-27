
const express = require("express");
const router = express.Router();

// get home page
 module.exports=  router.get("/" , function(req ,res, next) {
    res.render('index');

  });