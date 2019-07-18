// Selecting filter Element
var filterItem = document.getElementById('filter');

// Selecting list elements
var listItems = document.getElementById('list');

// Seleciting submit button
var submitbtn = document.getElementById('formElements'); 

//adding Event listner to filter Element
filterItem.addEventListener('keyup',listFilter);

//adding Event listener to submit button
submitbtn.addEventListener('submit',addItem);

//adding Event Listener to itemList
listItems.addEventListener('click',removeItem);

// listFilter function
function listFilter(e){
    var text = e.target.value.toLowerCase();
    var itemList = document.getElementsByTagName('li');
    Array.from(itemList).forEach(function(item) {
        itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}

// addItem Function
function addItem(e){
    e.preventDefault();

    //Get input value
    newItem = document.getElementById('newItem').value;

    //Create list item
    var li= document.createElement('li');

    //Create Delete button
    var delBtn = document.createElement('button');

    //Apply appropriate classes
    li.className = "list-group-item";
    delBtn.className = "bg-danger btn-sm float-right button delete";
    delBtn.style.border = "none";
    //Append textual content into the element
    li.appendChild(document.createTextNode(newItem));
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    //Append the new list item into DOM
    listItems.appendChild(li);
    
    document.getElementById('newItem').value = "";
}

// removeItem Function
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
} 
