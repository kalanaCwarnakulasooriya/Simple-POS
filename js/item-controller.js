$(document).ready(function () {
    loadItems();
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
            <button onclick = "editItem('${item.id}')" type = "button">Edit</button>
            <button onclick = "deleteItem('${item.id}')" type = "button">Delete</button>
            </td>
        </tr>`)
    })
}

function editItem(id){

}

function deleteItem(id){

}

