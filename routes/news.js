var NewsController = require('../controllers/NewsController');
let newsController = new NewsController();

var express = require('express');
var router = express.Router();

router.get('/', newsController.getNewsArticles);

router.get('/:id', newsController.getNewsArticle);

router.post('/', newsController.addNewsArticle);

router.put('/:id', newsController.updateNewsArticle);

router.delete('/:id', newsController.deleteNewsArticle);

module.exports = router;