$(document).ready(function () {
    loadCustomers();
    genarateCustomerId();

    $(`.save`).on(`click`,function (e){
        e.preventDefault();
        const id = $(`#customerId`).val();
        const name = $(`#name`).val();
        const email = $(`#email`).val();

        if (!name || !email) {
            alert('Please fill name and email.');
            return;
        }

        if (getCustomerById()) {
            alert('Customer ID already exists. Please click "Update" to modify.');
            return;
        }

        const newCustomer = new CustomerModel(id, name, email);
        saveCustomer(newCustomer);

        resetForm();
        loadCustomers();
        genarateCustomerId();
    });

    $(`.update`).on(`click`,function (e){
        e.preventDefault();
        const id = $('#customerId').val();
        const name = $('#name').val();
        const email = $('#email').val();

        updateCustomer(new CustomerModel(id, name, email));

        resetForm();
        loadCustomers();
        genarateCustomerId();
    });

    $(`.remove`).on(`click`,function (e){
        e.preventDefault();
        const id = $('#customerId').val();

        removeCustomer(id);
        resetForm();
        loadCustomers();
        genarateCustomerId();
    });

    $(`.clear`).on(`click`,function (e){
        e.preventDefault();
        resetForm();
        genarateCustomerId();
    });
});

function loadCustomers() {
    const customers = getCustomers();
    const  tbody = $('#customer-table tbody');
    tbody.empty();
    customers.forEach((customer)=>{
        tbody.append(`
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>
            <button class="action-buttons" onclick = "editCustomer('${customer.id}')" type = "button">Edit</button>
            </td>
        </tr>`);
    });
}

function editCustomer(id){
    const customer = getCustomerById(id);
    if (customer) {
        $('#customerId').val(customer.id);
        $('#name').val(customer.name);
        $('#email').val(customer.email);
    }
}

function genarateCustomerId() {
    const prefix = 'C0';
    let nextNumber = 1;

    if (db.customers.length > 0) {
        const lastCustomer = db.customers[db.customers.length - 1].id;
        const lastNumber = parseInt(lastCustomer.substring(1));
        nextNumber = lastNumber + 1;
    }

    const newId = prefix + nextNumber.toString().padStart(2, '0');
    $('#customerId').val(newId);
}

function resetForm() {
    $('#customer-form')[0].reset();
    $('#customerId').val('');
}
