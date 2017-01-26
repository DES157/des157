console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {

    //store verb in a variable
    var verb = document.f.verb.value;
    alert('Hi ' + verb);

    //store noun in a variable 
    var noun=document.f.noun.value;
    alert('Hi ' + noun);
    //comment out the alert message above

    //call a new alert() to concatenate a message with userName and userColor

     //prevent page from reloading
    return false;

  }


});
