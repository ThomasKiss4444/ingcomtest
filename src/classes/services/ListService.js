class ListService {
    getList() {
        return JSON.parse(localStorage.getItem('list'));
    }

    getItem(id) {
        return this.getList().find(item => item.adId === parseInt(id));
    }

    setFavorite(id) {
        let list = this.getList();
        let item = list.find(item => item.adId === parseInt(id));
        item.favorite = !item.favorite;
        localStorage.setItem('list', JSON.stringify(list));
    }
}

export default new ListService();