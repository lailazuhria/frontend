document.addEventListener('DOMContentLoaded', function(){
    fetchItems();

});

function fetchItems(){
// const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNDMxODAyLCJpYXQiOjE3MDI0MzE1MDIsImp0aSI6IjgxNTI3NmI5OGU4YjQ3ZWJhZWUzMDYzMTNlMTU1YmM2IiwidXNlcl9pZCI6MX0.ziI9t5KRxGEVqbwLvLpw7gsjVcv9YjfN7Af-kiy2j2I"
    const token = localStorage.getItem('AccessToken');
    // fetch('http://127.0.0.1:8000/apia/item/')
    fetch('http://127.0.0.1:8000/apia/item/', {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }) // Ganti dengan URL API
    .then(Response=>Response.json())
    .then(data => displayItems(data))
    .catch(error => console.error('Error: ', error));
}

function displayItems(items) {
    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML=`
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title"> ${item.name} </h5>
                    <p class="card-text"> ${item.description} </p>
                </div>
            </div>
        `;

        itemsContainer.appendChild(itemElement);
    })
}