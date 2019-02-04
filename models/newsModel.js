const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsArticleScheme = new Schema({
    title: { type: String, index: true },
    content: String
  });

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

    async getNewsArticles() {
        return await NewsArticleModel.find();
    }

    async getNewsArticle(id) {
        return await NewsArticleModel.findOne({ _id: id });
    }

    async addNewsArticle(newsArticle) {
        let newsArticleModel = new NewsArticleModel();
        newsArticleModel.title = newsArticle.title;
        newsArticleModel.content = newsArticle.content;
        await newsArticleModel.save();
        return newsArticleModel._id;
    }

    async updateNewsArticle(id, newsArticle) {
        let newsArticleModel = await NewsArticleModel.findOne({ _id: id });
        newsArticleModel.title = newsArticle.title;
        newsArticleModel.content = newsArticle.content;
        await newsArticleModel.save();
    }

    async deleteNewsArticle(id) {
        let newsArticleModel = await NewsArticleModel.findOne({ _id: id });
        await newsArticleModel.remove();
    }
}

module.exports = NewsModel;