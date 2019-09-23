var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connection")();

var routes = function () {
    router.route('/update')
        .post(function (req, res) {

            var Request = req.body.Request;
   

        console.log(Request);
        
        // console.log(requestid);
            conn.connect().then(function () {
                console.log("testtest");
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
        }).catch(function (err) {
            conn.close();
            res.status(500).send("Error while inserting data");
        });
    });

    return router;
};
module.exports = routes;
