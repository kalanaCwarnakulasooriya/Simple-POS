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
}

function getCustomerById(id) {
}