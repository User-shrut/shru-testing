// var sheetName = 'Sheet1'
// var scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   var lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     var sheet = doc.getSheetByName(sheetName)

//     var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     var nextRow = sheet.getLastRow() + 1

//     var newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }
// //https://script.google.com/macros/s/AKfycbzkbDI_1606fVi9-nbrHCpNrnDYM2jTDi0jVKPqlIVPWWdpe0ipr2W5tMa0bTfwio1O/exec

const scriptURL='https://script.google.com/macros/s/AKfycbw4SGzOYnezHnCj6HpwwkdUVqG431LP8Q6v63QRJprgjYt7C0OH5BQ16ds1BY6SriMG/exec'

const form=document.forms['google-sheet']

form.addEventListener('submit',e=>{
    e.preventDefault()

    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response=>alert("Thanks for contacting us..! We Will Contact You Soon..."))
    .catch(error=>console.error('Error!',error.message))
})







document.querySelector(".hamburger").addEventListener("click", () => {
    let a=document.querySelector(".navlist");
    if(a.style.display == "none"){
        a.style.display = "block";
      
    }
    else{
        a.style.display = "none";
        a.style.right="3%"
    }
  })

  function openFullScreen() {
    var imgSrc = event.target.src;
    var fullscreenImg = document.getElementsByClassName("fullscreen-image")[0];
    fullscreenImg.src = imgSrc;
   fullscreenImg.style.width="70vw";

    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "flex";
  
}

function closeFullScreen() {
    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('overlay').style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('overlay').style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var name = document.getElementById('name').value;
    console.log('Email:', email);
    console.log('Mobile Number:', mobile);
    console.log('Name:', name);
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});




  
//   document.querySelector(".hamburger").addEventListener("click", () => {
//     let a=document.querySelector(".navlist");
//     if(a.style.display == "block"){
//         a.style.display = "none";
   
//         // let a=document.querySelector(".close");
//         // a.style.display = "block";
//     }
    
//   })
// const scriptURL='https://script.google.com/macros/s/AKfycbwwHiZmDFNnuNzSKvOLYRaRbn_VFiMRMNSo54sfYWkv3iAJdBxC_d_V-ATPYZEdrLjZ/exec'

