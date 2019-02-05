var NewsController = require('../controllers/NewsController');
let newsController = new NewsController();

var passport = require('passport');

var express = require('express');
var router = express.Router();

router.get('/', newsController.getNewsArticles);

router.get('/:id', newsController.getNewsArticle);

router.post('/', passport.authenticate('jwt', {session: false}), newsController.addNewsArticle);

router.put('/:id', passport.authenticate('jwt', {session: false}), newsController.updateNewsArticle);

router.delete('/:id', passport.authenticate('jwt', {session: false}), newsController.deleteNewsArticle);

module.exports = router;