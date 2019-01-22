let instance;

class NewsModel {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        this._nextId = 0;
        this._newsArticles = [
            {
                id: this._nextId++,
                title: 'title 1',
                content: 'Very interesting article'
            },
            {
                id: this._nextId++,
                title: 'title 2',
                content: 'Very interesting article 2'
            }
        ];
    }

    get newsArticles() {
        return this._newsArticles;
    }

    getNewsArticle(id) {
        let article = this._newsArticles.find(value => value.id == id);
        return article;
    }

    addNewsArticle(newsArticle) {
        newsArticle.id = this._nextId++;
        this._newsArticles.push(newsArticle);
        return newsArticle.id;
    }

    updateNewsArticle(id, newsArticle) {
        let articleIndex = this._newsArticles.findIndex(value => value.id == id);
        newsArticle.id = id;
        this._newsArticles[articleIndex] = newsArticle;
        return true;
    }

    deleteNewsArticle(id) {
        let articleIndex = this._newsArticles.findIndex(value => value.id == id);
        this._newsArticles.splice(articleIndex, 1);
        return true;
    }
}

module.exports = NewsModel;