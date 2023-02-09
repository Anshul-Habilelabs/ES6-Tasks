class localStorage {
    constructor() {
        this.map = new Map();
    }
    setItem(key, value) {
        if (typeof value == 'string') {
            this.map.set(key, value);
        }
        else {
            console.error("Not in string");
        }
    }
    getItem(key) {
        return this.map.get(key);
    }
    removeItem(key) {
        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
    get length() {
        return this.map.size;
    }
}

localstorage = new localStorage();
localstorage.setItem('Name', 'Anshul');
localstorage.setItem('Age', '22');
localstorage.setItem('Arr', JSON.stringify({ arr: [12, 21, 2, 3, 232] }));
console.log(JSON.parse(localstorage.getItem('Arr')));