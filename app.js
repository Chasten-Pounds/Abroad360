//create a class
//object literal
//remove elements in html
//add elements in html
//capture and show data

/*Build a CRUD program utilizing Objects and/or Arrays
	
Requirements:	
		
Be able to CREATE data.
		
		
		
Be able to READ the data and render on the html page.
		
		
		
Be able to UPDATE the data.
		
		
		
Be able to DELETE data.
		
		
		
When an item is created, I’d like to see a transition / animation / transformation effect when any of the actions happen.
		
		
		
Make this look presentable when it comes to design. (responsive, colorful, user friendly…use bootstrap if you want */



 //add user input values into the table  
        
 function Add() {

var a = document.getElementById(1).value;
var b = document.getElementById(4).value;

//Checks to see if there is input in the name and email fields
//if there is no input a message prompts the user to enter it before submission
// if there is input a message thanks the user

  if( a.length && b.length != 0)

  {

  
    var table = document.getElementById("Table");
    var row = table.insertRow();
    
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    
    //Gets each user input and displays input in corresponding column

    cell1.innerHTML = document.getElementById(1).value;
    cell2.innerHTML = document.getElementById(2).value;
    cell3.innerHTML = document.getElementById(3).value;
    cell4.innerHTML = document.getElementById(4).value;
    cell5.innerHTML = document.getElementById(5).value;
    cell6.innerHTML = document.getElementById(6).value;
    cell7.innerHTML = document.getElementById(7).value;
    cell8.innerHTML = document.getElementById(8).value;
    cell9.innerHTML = document.getElementById(9).value;
    cell10.innerHTML = "<button onclick = 'Delete(this)' id ='dltb'>X</button>"
    
   alert("Thanks for submitting, " + document.getElementById(1).value + "! Look out for an email from us!")
  } else{
    alert("Please fill out both your name and email. Thanks!")
  }

  }
  
  // Deletes the corresponding row 

  function Delete(r) {
      var i = r.parentNode.parentNode.rowIndex;
      document.getElementById("Table").deleteRow(i);
      Snackbar();
  }

  function Snackbar(){
    var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }

  function Scroll(){
    var elmnt = document.getElementById("form1");
elmnt.scrollIntoView();

  }
