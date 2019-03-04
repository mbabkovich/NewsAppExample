class NewsArticleDataModel {
    constructor(newsArticleModel) {
        if (newsArticleModel) {
            this.id = newsArticleModel.id;
            this.title = newsArticleModel.title;
            this.author = newsArticleModel.author;
            this.description = newsArticleModel.description;
            this.url = newsArticleModel.url;
            this.urlToImage = newsArticleModel.urlToImage;
            this.publishedAt = newsArticleModel.publishedAt;
            this.content = newsArticleModel.content;
        }
    }
}

module.exports = NewsArticleDataModel;