class ItemModel {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function saveItem(item) {
    db.items.push(item);
}

function getItems() {
    return db.items;
}

function updateItem(updateItem) {
    const index = db.items.findIndex((i) => i.id === updateItem.id);
    if (index !== -1) {
        db.items[index] = updateItem;
    }
}

function getItemById(id) {
    return db.items.find((i) => i.id === id);
}