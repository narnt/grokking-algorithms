const graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["thom"] = []
graph["jonny"] = []

class Deque {
    constructor() {
        this._oldestIndex = 0;
        this._newestIndex = 0;
        this._storage = [];
    }
    size() {
        return this._storage.length;
    }
    enqueue(data) {
        this._storage.push(...data);
    }
    dequeue() {
        let deletedData = this._storage.shift();
        return deletedData;
    }
}

function search(name) { //search person with 'y' in person's name
    let search_queue = new Deque();
    search_queue.enqueue(graph[name]);
    let searched = [];
    let person;
    while (search_queue._storage != []) {
        person = search_queue.dequeue();
        if (searched.indexOf(person) == -1) {
            if (/y/.test(person)) {
                console.log(`it is ${person}`);
                return true;
            } else {
                search_queue.enqueue(graph[person]);
                searched.push(person);
            }
        } else {
            return;
        }
    }
}
search("you");