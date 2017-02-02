console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;

    //define process function
    function processForm() {

        //store verb1 in a variable
        var verb1 = document.f.verb1.value;

        //store verb2 in a variable
        var verb2 = document.f.verb2.value;

        //store verb3 in a variable
        var verb3 = document.f.verb3.value;

        //store verb4 in a variable
        var verb4 = document.f.verb4.value;

        //store adjective1 in a variable
        var adjective1 = document.f.adjective1.value;

        //store adjective2 in a variable
        var adjective2 = document.f.adjective2.value;

        //store adjective3 in a variable
        var adjective3 = document.f.adjective3.value;

        //store noun1 in a variable
        var noun1 = document.f.noun1.value;

        //store noun2 in a variable
        var noun2 = document.f.noun2.value;

        //store noun3 in a variable
        var noun3 = document.f.noun3.value;

        //store noun4 in a variable
        var noun4 = document.f.noun4.value;

        //store noun5 in a variable
        var noun5 = document.f.noun5.value;

        //store noun6 in a variable
        var noun6 = document.f.noun6.value;

        //store noun7 in a variable
        var noun7 = document.f.noun7.value;

        //store noun8 in a variable
        var noun8 = document.f.noun8.value;

        //store noun9 in a variable
        var noun9 = document.f.noun9.value;

        //store noun10 in a variable
        var noun10 = document.f.noun10.value;

        //store noun11 in a variable
        var noun11 = document.f.noun11.value;

        //link audio and get it to play on click
        function play() {
            var audio = document.getElementById("audio");
            audio.play();
        }


        //store myMsg in a variable called my Msg
        var myMsg = document.getElementById('myMsg');

        //use innerHTML to concatenate a message and put in on the screen
        myMsg.innerHTML = 'I don\'t ' + verb1 + ' with you. <br> You little ' + adjective1 + ' ' + noun1 + ' ' + noun2 + ', I ain\'t ' + verb2 + ' with you. <br> You little, you little ' + adjective2 + ' ' + noun3 + ' ' + noun4 + ', I ain\'t ' + verb3 + ' with you <br> I got a million trillion things I\'d rather have to do.<br> Than to be ' + verb4 + ' with you. <br> Little ' + adjective3 + ' ' + noun5 + ', I don\'t give a ' + noun6 + ' I don\'t give a ' + noun7 + '<br> I don\'t, I don\'t, I don\'t give a ' + noun8 + '<br>' + noun9 + ', I don\'t give a ' + noun10 + ' about you or anything that you do. <br> Don\'t give a ' + noun11 + ' about you or anything that you do.';

        //prevent page from reloading
        return false;

    }


});
