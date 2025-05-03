$(document).ready(function () {
    loadItems();
    genarateItemId();

    $(`#item-form`).on(`submit`,function (e){
        e.preventDefault();
        const id = $(`#itemId`).val();
        const name = $(`#item-name`).val();
        const quantity = $(`#quantity`).val();
        const price = $(`#price`).val();

        if (id) {
            updateItem(new ItemModel(id, name, quantity, price));
        }else {
            const newItem = new ItemModel(Date.now().toString(), name, quantity, price);
            saveItem(newItem);
        }
        this.reset();
        $(`#itemId`).val('');
        loadItems()
    })
});

function loadItems() {
    const items =  getItems();
    const  tbody = $('#item-table tbody');
    tbody.empty();
    items.forEach((item)=>{
        tbody.append(`
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>
            <button class="action-buttons" onclick = "editItem('${item.id}')" type = "button">Edit</button>
            </td>
        </tr>`)
    })
}

function editItem(id){
    const item = getItemById(id);
    if (item) {
        $('#itemId').val(item.id);
        $('#item-name').val(item.name);
        $('#quantity').val(item.quantity);
        $('#price').val(item.price);
    }
}

function genarateItemId() {
    const prefixItem = 'C0';
    let nextNumber = 1;

    if (db.customers.length > 0) {
        const lastCustomer = db.customers[db.customers.length - 1].id;
        const lastNumber = parseInt(lastCustomer.substring(1));
        nextNumber = lastNumber + 1;
    }

    const newId = prefixItem + nextNumber.toString().padStart(2, '0');
    $('#itemId').val(newId);
}

