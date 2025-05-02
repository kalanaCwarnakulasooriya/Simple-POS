$(document).ready(function () {
    loadCustomers();
});

function loadCustomers() {
    const customers = getCustomers();
    const tbody = $('#customer-table tbody');
    tbody.empty();
    customers.forEach((customer) => {
        tbody.append(`
        <tr>
            <td>1</td>
            <td>kalana</td>
            <td>kalana@gmail.com</td>
            <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </td>
        </tr>
        `)
    })
}