// Made by TheVoidNexus on 29.01.2024

let database = {};

function setDatabase(Info1, Info2) {
  database[Info1] = Info2;
	localStorage.setItem(Info1, Info2);
  return;
}

function DataDeletion() {
	let index = prompt("Enter the Index.","");
  if(index != "") {
  
  let confirmation = confirm("Do you really want to delete this Index?","");
  if(confirmation == true) {
  localStorage.removeItem(index);
	delete database[index];
  alert("You successfully deleted the Index:" + `\n"${index}"`) ;
  } else {
  alert("You cancelled the deletion.");
  }
  } else {
  alert("The Index cannot be empty.");
  }
}

function DataInput() {
  let VarInfo1 = prompt("Enter the Index (Example: Age)", ""); 
  if( VarInfo1 != "") {
  
  let VarInfo2 = prompt("Enter the Value (Example: 15)", "");
  if( VarInfo2 != "") {
  
  setDatabase(VarInfo1, VarInfo2);
 localStorage.setItem(VarInfo1, VarInfo2);
  alert("The Value has been added to the System:\n" + `\nIndex: ${VarInfo1}` + `\nValue: ${VarInfo2}`);
  } else {
  alert("The Value cannot be empty.");
  }
  } else {
  alert("The Index cannot be empty.")
  } 
}

function DataOutput() {
  let key = prompt("Enter the Index.", "");
  let Value = localStorage.getItem(key);
  if (Value !== null) {
  if (Value !== "") {
  let popupContent = document.getElementById('popupContent');
  let popupContent2 = document.getElementById('popupContent2');
  let popupContent3 = document.getElementById('popupContent3');
  let popupContent4 = document.getElementById('popupContent4');
    popupContent.innerHTML = `Index: `;
    popupContent2.innerHTML = `${key}<br><br>`; 
    popupContent3.innerHTML = `Value: `; 
    popupContent4.innerHTML = `${Value}<br>`;
    document.getElementById('InformationPopup').style.display = 'flex';

  } else {
    alert("The Index cannot be empty.");
  }
  } else {
    alert("This Index does not exist.");
  }
}


function DataModification() {
let VarInfo1 = prompt("Enter the Index that should be modified.", "");
  let confirmation = localStorage.getItem(VarInfo1);
  if( VarInfo1 != "") {
  if(confirmation !== undefined) {
  let VarInfo2 = prompt("Enter the new Value.", "");
  if( VarInfo2 != "") {
  
  alert("The Value has been modified.\n" + `"${confirmation}" -> "${VarInfo2}"`);
    setDatabase(VarInfo1, VarInfo2);
    localStorage.setItem(VarInfo1, VarInfo2);
  } else {
  alert("The Value cannot be empty.");
  }
  }
  } else {
  alert("The Index cannot be empty.")
  } 
}

function DataDuplication() {
let VarInfo1 = prompt("Enter the Index that should be duplicated.", ""); 
if(VarInfo1 != "") {
let VarInfo2 = prompt("Enter the Index to which the Value should be duplicated.", "");
if(VarInfo2 != "") {
let confirmation = localStorage.getItem(VarInfo1);
alert("The Value has been duplicated into the other Index.\n" + `Index: "${VarInfo1}" -> "${VarInfo2}"\n` + `Copied Value: ${confirmation}`)
localStorage.setItem(`${VarInfo2}`, `${confirmation}`)
} else {
alert("The Index cannot be empty.");
}
} else {
alert("The Index cannot be empty.");
}
}


function closeInformation() {
    document.getElementById('InformationPopup').style.display = 'none';
  }
