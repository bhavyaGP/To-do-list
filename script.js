let listContainer = document.getElementById('list-container')
let head = document.querySelector('head')
let inputBox = document.getElementById('input-box')


function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter the Text')
    }
    else{
        const task = document.createElement('li')
        task.textContent = inputBox.value;
        listContainer.appendChild(task)
        // inputBox.value = ''
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        task.appendChild(span)
        span.style.right = '0px';
    }
    inputBox.value = '';
    savedata()
}


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){  
        e.target.classList.toggle('checked')
        savedata()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.style.display = 'none'
        savedata()
    }
}); 

function savedata(){
    localStorage.setItem('listContainer', listContainer.innerHTML)
}

function getdata(){
    if(localStorage.getItem('listContainer')){
        listContainer.innerHTML = localStorage.getItem('listContainer')
    }
}

getdata()