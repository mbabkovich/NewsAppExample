class NewsArticleDataModel {
    constructor(newsArticleModel) {
        if (newsArticleModel) {
            this._id = newsArticleModel.id;
            this._title = newsArticleModel.title;
            this._author = newsArticleModel.author;
            this._description = newsArticleModel.description;
            this._url = newsArticleModel.url;
            this._urlToImage = newsArticleModel.urlToImage;
            this._publishedAt = newsArticleModel.publishedAt;
            this._content = newsArticleModel.content;
        }
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }

    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }

    get urlToImage() {
        return this._urlToImage;
    }
    set urlToImage(value) {
        this._urlToImage = value;
    }

    get publishedAt() {
        return this._publishedAt;
    }
    set publishedAt(value) {
        this._publishedAt = value;
    }

    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }


    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
}

module.exports = NewsArticleDataModel;