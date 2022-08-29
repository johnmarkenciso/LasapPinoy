const checkbox = document.getElementById('show');
const recipe = document.getElementById('recipe_steps');
const textrecipe =document.getElementById('show-recipe');

checkbox.addEventListener('click', function handleClick() {
    if (checkbox.checked) {
        recipe.style.display = 'block';
        textrecipe.innerHTML = "Hide Recipe";
    } else {
        recipe.style.display = 'none';
        textrecipe.innerHTML = "Show Recipe";
    }
  });


window.addEventListener("DOMContentLoaded", function(){
// global elements inside html form
var form = document.getElementById("test-form");
var button = document.getElementById("test-form-submit");
var status = document.getElementById("status");
//function na maghahandle ng success saka error
// function success(){
//     form.reset();
//     status.classList.add("success");
//     status.innerHTML = "Thanks for contacting Us😉. We will Reply to you ASAP";
// }
// function error(){
//     status.classList.add("error");
//     status.innerHTML = "Something went wrong, Error Sending Message";
// }
// function na maghahandle for submit with form
form.addEventListener("submit", function(event){
    event.preventDefault();
    var data = new FormData(form);
    var values = [...data.entries()];
    console.log(data);
    console.log(values);
    getFormValue(form.method, form.action, data, success, error);
    if(values.length===2){
        function success(){
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks for contacting Us😉. We will Reply to you ASAP";
        }
        success();
    }else{
        function error(){
        status.classList.add("error");
        status.innerHTML = "Something went wrong, Error Sending Message";
        }
        error();
    }
});

});

//helper function for send https request using AJAX

// function getFormValue(method, url, data, success, error){
//     var request = new XMLHttpRequest();
//     request.open(method, url);
//     request.setRequestHeader("Accept", "application/json");
//     request.onreadystatechange = function(){
//         if(request.status === 200){
//             console.log(request.status);
//             success(request.response, request.responseType);
//         }else{
//             error(request.response, request.responseType);
//         }

//     };
//     request.send(data);
// }

