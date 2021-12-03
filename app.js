let send = document.getElementById('send-to');
let enter = document.getElementById('enter');
let taskList = document.getElementById('task-list')
let firstColumn = document.querySelector('.first-column');
let inProg = document.getElementById('in-progress');
let done = document.getElementById('done');

send.addEventListener('click', function(e){
    if(enter.value !== '') {
        taskList.appendChild(createElem());
        enter.value = '';
    }
})



function createElem() {
    let div = document.createElement('div');
    div.className = "list-elem";
    div.append(document.createTextNode(enter.value));
    div.appendChild(inProgressBtn());
    div.appendChild(deleteElemBtn());
    return div;
}

function deleteElemBtn() {
    let delBtn = document.createElement('button');
    delBtn.className = "del-btn";
    delBtn.append(document.createTextNode('X'));
    delBtn.addEventListener('click', function(e) {
        e.srcElement.parentNode.remove();
    })
    return delBtn;
}

function inProgressBtn() {
    let inProgBtn = document.createElement('button');
    inProgBtn.className = "prog-btn";
    inProgBtn.append(document.createTextNode('→'));
    inProgBtn.addEventListener('click', function(e) {
        if(e.srcElement.parentNode.parentNode.id == "in-progress") {
            done.append(e.srcElement.parentNode);
            e.srcElement.remove();
        } else {
            inProg.append(e.srcElement.parentNode);
            e.srcElement.innerText = '✓';
        }
    })
    return inProgBtn;
}