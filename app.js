let send = document.getElementById('send-to');
let enter = document.getElementById('enter');
let taskList = document.getElementById('task-list')
let firstColumn = document.querySelector('.first-column');
let inProg = document.getElementById('in-progress');
let done = document.getElementById('done');

send.addEventListener('click', function(){
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
        e.path[1].remove();
        console.log(e)
    })
    return delBtn;
}

function inProgressBtn() {
    let inProgBtn = document.createElement('button');
    inProgBtn.className = "prog-btn";
    inProgBtn.append(document.createTextNode('→'));
    inProgBtn.addEventListener('click', function(e) {
        inProg.append(e.path[1]);
        e.path[0].innerText = '✓';
        if(e.path[2].id == "in-progress") {
            done.append(e.path[1]);
            e.path[0].remove();
        }
        console.log(e)
    })
    return inProgBtn;
}