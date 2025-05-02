$(document).ready(function () {
    loadCustomers();

    $(`#customer-form`).on(`submit`,function (e){
        e.preventDefault();
        const id = $(`#customerId`).val();
        const name = $(`#name`).val();
        const email = $(`#email`).val();

        const newCustomer = new CustomerModel(Date.now().toString(), name, email);
        saveCustomer(newCustomer);
        this.reset();
        loadCustomers();
    })
});

function loadCustomers() {
    const customers = getCustomers();
    const tbody = $('#customer-table tbody');
    tbody.empty();
    customers.forEach((customer) => {
        tbody.append(`
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </td>
        </tr>
        `)
    })
}