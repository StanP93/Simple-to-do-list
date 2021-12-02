let send = document.getElementById('send-to');
let enter = document.getElementById('enter');
let taskList = document.getElementById('task-list')

enter.addEventListener('click',function(e) {
    console.log(enter.value);
})

send.addEventListener('click', function(){
    if(enter.value !== '') {
        createElem();
        taskList.deleteElem();
        enter.value = '';
    }
})

function createElem() {
    let p = document.createElement('p');
    p.className = "list-elem";
    p.append(document.createTextNode(enter.value));
    taskList.appendChild(p);
}

function deleteElem() {
    let delBtn = document.createElement('button');
    delBtn.className = "del-btn";
    delBtn.append(document.createTextNode('Delete'));
}