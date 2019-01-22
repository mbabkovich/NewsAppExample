let NewsModel = require('../models/newsModel');
let NewsArticleModel = require('../models/newsArticleModel');
let instance;

class NewsController {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        this.newsModel = new NewsModel();
        this.getNewsArticles = this._getNewsArticles.bind(this);
        this.getNewsArticle = this._getNewsArticle.bind(this);
        this.addNewsArticle = this._addNewsArticle.bind(this);
        this.updateNewsArticle = this._updateNewsArticle.bind(this);
        this.deleteNewsArticle = this._deleteNewsArticle.bind(this);
    }

    _getNewsArticles(req, res, next) {
        res.send(this.newsModel.newsArticles);
    }

    _getNewsArticle(req, res, next) {
        res.send(this.newsModel.getNewsArticle(req.params.id));
    }

    _addNewsArticle(req, res, next) {
        let newsArticleData = req.body;
        let newsArticle = new NewsArticleModel(newsArticleData);
        let id = this.newsModel.addNewsArticle(newsArticle);
        if (id >= 0) {
            res.send(`News article was successfully created, id = ${id}`);
        }
        else {
            res.send('News article was not created');
        }
    }

    _updateNewsArticle(req, res, next) {
        let newsArticleData = req.body;
        let newsArticle = new NewsArticleModel(newsArticleData);
        let success = this.newsModel.updateNewsArticle(req.params.id, newsArticle);
        if (success) {
            res.send('News article was successfully updated');
        }
    }

    _deleteNewsArticle(req, res, next) {
        let success = this.newsModel.deleteNewsArticle(req.params.id);
        if (success) {
            res.send('News article was successfully deleted');
        }
    }
}

module.exports = NewsController;