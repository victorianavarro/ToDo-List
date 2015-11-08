(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!

	document.getElementById('new-todo').onkeypress = function(e){
	    if (!e) e = window.event;
	    if (e.keyCode == '13'){
	    	addTODO();
	    	this.value="";
	      	return false;
	    }
	  }


	function addTODO(item){
		//alert(item);
		var item = document.getElementById('new-todo').value;	
		var newItem = document.createElement("li");
		newItem.innerHTML = ("<div class='view'><input class='toggle' type='checkbox'><label>" + item + "</label><button class='destroy'></button></div><input class='edit' value='" + item + "'>");
		//newItem.appendChild(textItem);

		var list = document.getElementById("todo-list");
		list.insertBefore(newItem, list.childNodes[0]);

		statusTODO();

	}

	function statusTODO(){
		//checkboxes value
		var checkboxes = document.getElementsByClassName("toggle");
		var allCheckboxes = checkboxes.length;

		//Restar si se esta editando un Item ****
		var leftItems = allCheckboxes - (document.querySelectorAll('input[type="checkbox"]:checked').length);
		document.getElementById("todo-count").innerHTML = '<strong>' + leftItems + '</strong>  "items left"';


		//alert(checkboxes.length);
		
		//count leftItems

		//show allItems
		

		//showA activeItems

		//showCompletedItems

	}

	function editTODO(){
		//Edit the text in the Item
	}

	function deleteTODO(e){
		var buttons = document.getElementsByTagName("button");
		var count = buttons.length;
				for (var i = 0; i <= count; i ++) {
			    	buttons[i].onclick = function() {
			        this.closest("li").remove();
			        statusTODO();
			    };
			}
	}

var test = document.getElementById("todo-list");


function whatClicked(e) {
	e = e || window.event;
    var target = e.target || e.srcElement;
	//if a button was clicked
	if(event.target.className == 'destroy'){
		deleteTODO();
	}
    

    //if a checkbox was clicked
    if(event.target.className == 'toggle'){
		//statusTODO();
		statusTODO();
    }
    
}


test.addEventListener("click", whatClicked);
test.addEventListener("dblclick", editTODO);

statusTODO();

})( window );
