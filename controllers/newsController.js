let NewsModel = require('../models/newsModel');
let NewsArticleDataModel = require('../models/newsArticleDataModel');
let { Status, NewsResponseDataModel } = require('../models/newsResponseDataModel');
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

    async _getNewsArticles(req, res, next) {
        try {
            let newsArticles = await this.newsModel.getNewsArticles(+(req.params.page), +(req.params.pageSize));
            newsArticles = newsArticles.map(article => new NewsArticleDataModel(article));
            res.send(new NewsResponseDataModel(Status.Ok, newsArticles));
        }
        catch (err) {
            next(err)
        }
    }

    async _getNewsArticle(req, res, next) {
        try {
            let newsArticle = await this.newsModel.getNewsArticle(req.params.id);
            res.send(new NewsResponseDataModel(Status.Ok, newsArticle));
        }
        catch (err) {
            next(err)
        }
    }

    async _addNewsArticle(req, res, next) {
        try {
            let newsArticleData = req.body;
            let newsArticle = new NewsArticleDataModel(newsArticleData);
            let id = await this.newsModel.addNewsArticle(newsArticle);
            if (id) {
                res.send(new NewsResponseDataModel(Status.Ok, id));
            }
            else {
                next(new Error('News article was not created'));
            }
        }
        catch (err) {
            next(err)
        }
    }

    async _updateNewsArticle(req, res, next) {
        try {
            let newsArticleData = req.body;
            let newsArticle = new NewsArticleDataModel(newsArticleData);
            await this.newsModel.updateNewsArticle(req.params.id, newsArticle);
            res.send(new NewsResponseDataModel(Status.Ok));
        }
        catch (err) {
            next(err)
        }
    }

    async _deleteNewsArticle(req, res, next) {
        try {
            await this.newsModel.deleteNewsArticle(req.params.id);
            res.send(new NewsResponseDataModel(Status.Ok));
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = NewsController;