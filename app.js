

let element=document.getElementById('addtodo')
element.addEventListener('click',todolist)

function todolist(){

	let list= document.getElementById('addTodoItem').value;
	let textNode=document.createTextNode(list);


	let span=document.createElement('button');
	span.textContent="Delete";
	span.className="close";

	let newElement=document.createElement("li");
			
	newElement.appendChild(textNode);
	newElement.appendChild(span);

	let order=document.getElementById('todoList');
	order.appendChild(newElement);
	
span.addEventListener('click',clear)



}

var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




function reset() {   
 document.getElementById('addTodoItem').value = "";
}

function clear(){
let line=this.parentNode;
let parent=line.parentNode;
parent.removeChild(line);
}

