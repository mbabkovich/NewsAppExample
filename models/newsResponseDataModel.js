const Status = { "Ok": 0 }
Object.freeze(Status)

class NewsResponseDataModel {
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
}

module.exports = { Status, NewsResponseDataModel };