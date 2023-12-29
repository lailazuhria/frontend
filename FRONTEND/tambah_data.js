document.getElementById('addItemForm').addEventListener('submit', function(e){
    e.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const token = localStorage.getItem('accessToken');

    fetch('http://127.0.0.1:8000/apia/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: itemName,
            description: itemDescription
        })
    })
    .then(Response => {
        if (Response.ok) {
            return Response.json();
        }else{
            throw new Error('Something Went Wrong');
        }
    })
    .then(data => {
        console.log('Success: ', data);
        // Tutup Modal
        $('#addItemModal').modal('hide');
        // Refresh daftar Item
        fetchItems();
    })
    .catch(error => {
        console.error('Error: ', error);
    });
});

