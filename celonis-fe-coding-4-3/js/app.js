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

	document.getElementById('clear-completed').onclick = function(){
		var checked = document.querySelectorAll('input[type="checkbox"]');
		for(var i=0;i<checked.length;i++){
			if(checked[i].checked){
				checked[i].closest("li").remove();
			}
		}
	}


	function filtersTODO(){

		//which anchor was clicked
		var anchors = document.getElementsByTagName("a");
		for(var i=0;i<anchors.length;i++) {
			anchors[i].onclick = function() {
			var checkboxes = document.querySelectorAll('input[type="checkbox"]');
			var all = document.getElementsByClassName("toggle");


				//alert(this.text);
				
				switch(this.text){
					case 'All':
        				//alert("Show all"); toggle
        				for(var i=0;i<all.length;i++){
        					all[i].closest("li").style.display = 'block';
        				}
        				
        				break;
					case 'Active':
        				for(var i=0;i<checkboxes.length;i++){
        					if(checkboxes[i].checked){
        						checkboxes[i].closest("li").style.display = 'none';
        					}
        					
        				}
        				break;
					case 'Completed':
        				for(var i=0;i<all.length;i++){
        					all[i].closest("li").style.display = 'none';
        				}

        				for(var i=0;i<checkboxes.length;i++){
        					if(checkboxes[i].checked){
        						checkboxes[i].closest("li").style.display = 'block';
        					}
        					
        				}
        				
        				break;

        			default:
        				var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        				for(var i=0;i<checkboxes.length;i++){
        					checkboxes[i].closest("li").style.display = 'block';
        				}	
        			break;
				}

				return false;
			};

		}

	}

	function addTODO(item){
		var item = document.getElementById('new-todo').value;	
		var newItem = document.createElement("li");
		newItem.innerHTML = ("<div class='view'><input class='toggle' type='checkbox'><label>" + item + "</label><button class='destroy'></button></div><input class='edit' value='" + item + "'>");

		var list = document.getElementById("todo-list");
		list.insertBefore(newItem, list.childNodes[0]);

		statusTODO();

	}

	function statusTODO(){
		//checkboxes value
		var checkboxes = document.getElementsByClassName("toggle");
		var allCheckboxes = checkboxes.length;
		var checked = document.querySelectorAll('input[type="checkbox"]:checked').length;

		var completed = document.querySelectorAll('input[type="checkbox"]:checked');

		//Restar si se esta editando un Item ****
		var leftItems = allCheckboxes - (document.querySelectorAll('input[type="checkbox"]:checked').length);
		document.getElementById("todo-count").innerHTML = '<strong>' + leftItems + '</strong>  "items left"';
		document.getElementById("clear-completed").innerHTML = 'Clear completed (' + checked + ')';

        				for(var i=0;i<checkboxes.length;i++){
        						checkboxes[i].closest("li").className = "";
        				}   

        				for(var i=0;i<completed.length;i++){
        					if(completed[i].checked){
        						completed[i].closest("li").className = "completed";
        					}
        				}			
	}

function editTODO(){
		//Edit the text in the Item
		//change class to editing
		var listItem = document.getElementsByTagName("label");
		var countListItem = listItem.length;
				for (var i = 0; i <= countListItem; i ++) {
			    	listItem[i].ondblclick = function() {
			    		this.closest("li").className = "editing";

			    		this.closest("li").onkeypress = function(e){
						    if (!e) e = window.event;
						    if (e.keyCode == '13'){
						    	var text = this.closest("li").getElementsByClassName("edit")[0].value;
						    	this.closest("li").className = "";
								this.innerHTML = ("<div class='view'><input class='toggle' type='checkbox'><label>" + text + "</label><button class='destroy'></button></div><input class='edit' value='" + text + "'>");
						    }
						  }

						  return false;
			    	};
				}

		statusTODO();
	}


	function deleteTODO(e){
		var buttons = document.getElementsByTagName("button");
		var countButtons = buttons.length;
				for (var i = 0; i <= countButtons; i ++) {
			    	buttons[i].onclick = function() {
			        this.closest("li").remove();
			        statusTODO();
			    };
			}
	}

var test = document.getElementById("todo-list");
var filters = document.getElementById("filters");

function whatClicked(e) {
 			e = e || window.event;
    		var target = e.target || e.srcElement;

			//if a button was clicked
			if(e.target.className == 'destroy'){
				deleteTODO();
			}else if(e.target.className == 'toggle'){
				////if a checkbox was clicked
				statusTODO();
		    }


}


test.addEventListener("click", whatClicked, false);
test.addEventListener("dblclick", editTODO, false);
filters.addEventListener("click", filtersTODO, false);

statusTODO();

})( window );
