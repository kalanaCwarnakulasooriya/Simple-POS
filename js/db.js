const db = {
    customers: []
};

function saveCustomer(customer) {
    db.customers.push(customer);
}

function getCustomers() {
    return db.customers;
}

function removeCustomer(id) {
}

function updateCustomer(customer) {
    const index = db.customers.findIndex((c) => c.id === customer.id);
    if (index !== -1){
        db.customers[index] = customer;
    }
}

function getCustomerById(c) {
    return db.customers.find((c) => c.id === c.id);
}