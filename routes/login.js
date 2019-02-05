var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

const jwtsecret = "mysecretkey";

router.post('/', function(req, res, next) {
        try {
            let user = req.user;
            const payload = {
                id: user._id,
                login: user.login
            };
            const token = jwt.sign(payload, jwtsecret);
            res.send({user, token});
        }
        catch (err) {
            next(new Error('Error ' + err));
        }
    }
);

module.exports = router;