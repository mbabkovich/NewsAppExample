class NewsArticleModel {
    constructor(newsArticleModel) {
        if (newsArticleModel) {
            this._id = newsArticleModel.id;
            this._title = newsArticleModel.title;
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

    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
}

module.exports = NewsArticleModel;