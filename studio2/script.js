// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //f = form name

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = clearForm;


    //define process function
    function processForm() {

    //call the values of each entry
    //then place the value into the variable of the same name

    //names - 2
    var name1 = document.f.name1.value;
    var name2 = document.f.name2.value;
    //nouns - 4
    var noun1 = document.f.noun1.value;
    var noun2 = document.f.noun2.value;
    var noun3 = document.f.noun3.value;
    var noun4 = document.f.noun4.value;
    //adj - 5
    var adj1 = document.f.adj1.value;
    var adj2 = document.f.adj2.value;
    var adj3 = document.f.adj3.value;
    var adj4 = document.f.adj4.value;
    var adj5 = document.f.adj5.value;

    //if all entries ARE NOT FILLED, display alert
    if (name1=="" || name2=="" || noun1=="" || noun2=="" || noun3=="" || noun4=="" || adj1=="" || adj2=="" || adj3=="" || adj4=="" || adj5=="") {
      alert("BLEH!");
    }

    //if all entries are filled, display myMsg
    else {
    //target the html element
    var myMsg = document.getElementById("myMsg");

    myMsg.innerHTML="My Dearest, " + name1 + ". Please excuse the state of my handwriting for I am still in a state of " + noun1 + " and " + noun2 + " from being in your presence. It is with great pleasure to finally express my " + noun3 + " to you. I hope this does not come as a surprise from our daily walks that I find you utterly " + adj1 + " So please, do forgive me for resorting to such quieter means of confession. Forgive me for my " + noun4 + ", as I cannot face you in my current condition. I am but a " + adj2 + "  fool! A fool for your love and " + adj3 + " disposition and" + adj4 + " smile, oh, I sound like a " + adj5 + " fool. Please, would you kindly keep me in your thoughts as well? I hope my boldness does not deter you and I look forward to our next meeting. Forever yours, " + name2;

    myMsg.className="show"
    }

    //prevent page from reloading
    return false;
  } // end of processForm

    //clear the form on reset
    function clearForm() {
      myMsg.innerHTML="";
      myMsg.className="hide";
    }
});
