import ToDoItem from "./ToDoItem";

class ToDo {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

        return this.items;
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();

        return this.items;
    }

    

    saveToLocalStorage() {
        localStorage.setItem('data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json);

        if (jsonParsed.length === 0)
            return [];

        let toDoItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            toDoItems.push(ToDoItem.fromJSON(jsonParsed[i]));
        }

        return toDoItems;

    }

}


export default ToDo;