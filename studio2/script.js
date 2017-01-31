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
      alert("I have to finish this letter before I can send it!");
    } //end of if statement

    //if all entries are filled, display myMsg
    else {

    //target the html element
    var bgimg = document.getElementById("bgimg"); //HIDING AND REVEALING THE IMG
    var myMsg = document.getElementById("myMsg"); //msg inside aside

    myMsg.innerHTML="<div>My Dearest, <em>" + name1 + "</em></div> Please excuse the state of my handwriting for I am still in a state of <em>" + noun1 + "</em> and <em>" + noun2 + "</em> from being in your presence. It is with great pleasure to finally express my <em>" + noun3 + "</em> to you. I hope this does not come as a surprise from our daily walks that I find you utterly <em>" + adj1 + "</em>. So please, do forgive me for resorting to such quieter means of confession. Forgive me for my <em>" + noun4 + "</em>, as I cannot face you in my current condition. I am but a <em>" + adj2 + "</em> fool! A fool for your love and <em>" + adj3 + "</em> disposition and <em>" + adj4 + "</em> smile, oh, I sound like a <em>" + adj5 + "</em> fool. Please, would you kindly keep me in your thoughts as well? I hope my boldness does not deter you and I look forward to our next meeting. <div>Forever yours, <em>" + name2 + "</em></div>";

    bgimg.className="show"; //select p class name and change so you can see the message
    }

    //prevent page from reloading
    return false;
  } // end of processForm

    //clear the form on reset
    function clearForm() {
      myMsg.innerHTML="";
      bgimg.className="hide"; //change name to hide
    }
});
