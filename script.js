// your code here
var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var nameElement = document.querySelector("#year");
var btn = document.querySelector("#button");


function handleSubmit(event){
    event.preventDefault();
    var h3Value = 'https://localhost:8080/';
    var name = nameElement.value;
    var year = yearElement.value;

     if(name && year) {
        h3Value += '?name=' + name + '&year=' +year;
    }
    else if(name && !year){
        h3Value += '?name=' + name;
    }
    else if(!name && year){
        h3Value += '?year=' + year;
    }
    h3.textContent = h3Value;
  }
form.addEventListener('submit',handleSubmit)