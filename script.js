const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value===''){
        alert("You must write something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
       

        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = " ";
    saveData();
}

// now add some feature by javascript for check mark work or delet work
// we can use addEventListener
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// now we can make a function to save the data
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();