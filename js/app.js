let input = document.getElementById("input");
let list = document.getElementById("list");
let minTextLength = 3;
let i = 1;

function textFilter(x) {
    if (x){
        if (x.length >= minTextLength){
            return x;
        }else {
            alert('Minimum text is 3');
        }
    }else {
        alert('Empty text');
    }
}

function showList(text) {
    list.innerHTML += `
        <li class="mt-3 list-item d-flex justify-content-between align-items-center" id="list${i}">
            <div class="ml-3 text-overflow" id="listText${i}">${text}</div>
           <div class="">
           <i class="fa feather-edit editBtn ml-3" id="" onclick="editList(${i})"></i>
           <i class="fa feather-trash-2 delBtn ml-3" id="" onclick="deleteList(${i})"></i>
</div>
           
        </li>
    `;
    i++;
}

function deleteList(listId) {
    let current = document.getElementById(`list${listId}`);
    let currentText = document.getElementById(`listText${listId}`).innerHTML;
    let deleteComfirm = confirm(`Are you sure to delete list '${currentText}' `);

    if (deleteComfirm){
        list.removeChild(current);
    }else {
        console.log(`Delete canceled`);
    }
}

function editList(listId) {
    let current = document.getElementById(`listText${listId}`);
    let newText  = prompt("Input new text",current.innerHTML);

    if (textFilter(newText)){
        current.innerHTML = newText;
    }
}

function addList() {
    //get
    let inputText = textFilter(input.value);

    //set
    if (inputText){
        showList(inputText);
        input.value = '';
    }
}
