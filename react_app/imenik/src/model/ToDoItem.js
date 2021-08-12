
class ToDoItem {

    constructor(content, content2) {
        this.content = content;
        this.content2 = content2;
        
    }


    static fromJSON (json) {
        let toDoItem = new ToDoItem();
        toDoItem.content = json.content;
        toDoItem.content2 = json.content2;
        

        return toDoItem;
    }
}

export default ToDoItem;