const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsArticleScheme = new Schema({
    title: { type: String, index: true },
    author: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: { type: Date, default: Date.now },
    content: String,
  }, { versionKey: false });

const NewsArticleModel = mongoose.model('NewsArticle', NewsArticleScheme);
   

let instance;

class NewsModel {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        
        mongoose.connect('mongodb://localhost/newsDb');
    }

    async getNewsArticles(page, pageSize) {
        return await NewsArticleModel.find().skip(page * pageSize).limit(pageSize);
    }

    async getNewsArticle(id) {
        return await NewsArticleModel.findOne({ _id: id });
    }

    async addNewsArticle(newsArticle) {
        let newsArticleModel = new NewsArticleModel();
        Object.assign(newsArticleModel, newsArticle);
        await newsArticleModel.save();
        return newsArticleModel._id;
    }

    async updateNewsArticle(id, newsArticle) {
        let newsArticleModel = await NewsArticleModel.findOne({ _id: id });
        Object.assign(newsArticleModel, newsArticle);
        await newsArticleModel.save();
    }

    async deleteNewsArticle(id) {
        let newsArticleModel = await NewsArticleModel.findOne({ _id: id });
        await newsArticleModel.remove();
    }
}

module.exports = NewsModel;