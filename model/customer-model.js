class CustomerModel {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

function saveCustomer(customer) {
    db.customers.push(customer);
}

function getCustomers() {
    return db.customers;
}

function removeCustomer(id) {
    db.customers = db.customers.filter((c) => c.id !== id);
}

function updateCustomer(updateCustomer) {
    const index = db.customers.findIndex((c) => c.id === updateCustomer.id);
    if (index !== -1){
        db.customers[index] = updateCustomer;
    }
}

function getCustomerById(id) {
    return db.customers.find((c) => c.id === id);
}