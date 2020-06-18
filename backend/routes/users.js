var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


/* Sign In */
/* x-www-form-urlencoded */
router.post('/', function (req, res, next) {

    let userId = req.body.userId;
    console.log("userId", userId);

    if (userId === null) {
        console.log("Input required");
        var data = {
            "result": false,
            "message": "Fields are required.!",
            "errors": null,
            "data": null
        };
        res.send(data);
    }

    const db = req.app.locals.db;
    const usersCollection = db.collection('users');
    usersCollection.insertOne({
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
    }, function (error, result) {
        if (error) {
            var data = {
                "result": false,
                "message": null,
                "errors": error,
                "data": null
            };
            res.send(data);
        } else {
            var data = {
                "result": true,
                "message": null,
                "errors": null,
                "data": result
            };
            res.send(data);
        }
    });
});

module.exports = router;
