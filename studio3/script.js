// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable

    //images of jackets
    var northface = document.getElementById('northface');
    var redCoat = document.getElementById('redCoat');
    var rainCoat = document.getElementById('rainCoat');
    var reebok = document.getElementById('reebok');
    var purple = document.getElementById('purple');

    //avatar img
    var about = document.getElementById('about');
    //empty img box - i hope this works
    var empty = document.getElementById('empty');
    //textbox
    var msg = document.getElementById('msg');
    //put the jacket back & reset
    var close = document.getElementById('close');

    //jacket 1
    northface.addEventListener('click', function(){
      empty.src="images/s3_01_northface.png";
      empty.style.display="block";

      about.src="images/s3_aInfo.png";
      msg.innerHTML="This is my northface jacket! It's actually not mine, it's my older sister's! I nicked it off of her when she left it at home so now I have it.";
    })

    //jacket 2
    redCoat.addEventListener('mouseover',function(){
      redCoat.style.zIndex="5";
    })

    redCoat.addEventListener('mouseout',function(){
      redCoat.style.zIndex="4";
    })

    redCoat.addEventListener('click', function(){
      empty.src="images/s3_02_redCoat.png";
      empty.style.display="block";

      about.src="images/s3_aInfo.png";
      msg.innerHTML="I think this jacket was my first time thrift shopping! It was only 12 bucks!";
    })

    //jacket 3
    rainCoat.addEventListener('mouseover',function(){
      rainCoat.style.zIndex="5";
    })

    rainCoat.addEventListener('mouseout',function(){
      rainCoat.style.zIndex="3";
    })

    rainCoat.addEventListener('click', function(){
      empty.src="images/s3_03_rainCoat.png";
      empty.style.display="block";

      about.src="images/s3_aInfo.png";
      msg.innerHTML="This was another thrift shop buy! I don't remember how much it was but it was definitely under $20. I distinctly remember my dad approving, but my mom sideyed me so hard.";
    })

    //jacket 4
    reebok.addEventListener('mouseover',function(){
      reebok.style.zIndex="5";
    })

    reebok.addEventListener('mouseout',function(){
      reebok.style.zIndex="2";
    })

    reebok.addEventListener('click', function(){
      empty.src="images/s3_04_reebok.png";
      empty.style.display="block";

      about.src="images/s3_aInfo.png";
      msg.innerHTML="Ahhh, I feel bad about this one. I can't seem to find a good time to wear it!";
    })

    //jacket 5
    purple.addEventListener('mouseover',function(){
      purple.style.zIndex="5";
    })

    purple.addEventListener('mouseout',function(){
      purple.style.zIndex="1";
    })

    purple.addEventListener('click', function(){
      empty.src="images/s3_05_purple.png";
      empty.style.display="block";

      about.src="images/s3_aHappy.png";
      msg.innerHTML="This is my favorite! It's a hand me down, like most of my clothes, but I don't remember whose it was. I still love it! It matches my glasses!";
    })

    //in case anyone hovers over the avatar
    about.addEventListener('mouseover', function(){
      about.src="images/s3_aInfo.png";
      msg.innerHTML="sorry nothing is going to happen if you hover over the avatar.";
    })

    about.addEventListener('mouseout', function(){
      about.src="images/s3_aSmile.png";
      msg.innerHTML="pick a jacket instead!";
    })

    //TO RESET & PUT BACK JACKET
    close.addEventListener('click', function(){
      empty.src="";
      empty.style.display="none";

      about.src="images/s3_aSmile.png";
      msg.innerHTML="pick another!";
    })
});
