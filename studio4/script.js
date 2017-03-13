// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var listStuff = document.getElementsByTagName('li');
    //classes [0 - 3] = 4 classes
      //uwp, des, cts, art

    //days [4 - 8] = 5 days
      //mon, vDay, wed, thu, free

    //songList1 [9 - 14] = 5 songs + close

    //songList2 [15 - 20] = 5 songs + close


    var vDay = document.getElementById('vDay');
      var vDayTip = document.getElementById('vDayTip');
    var free = document.getElementById('free');
      var freeTip = document.getElementById('freeTip');

    var tipTimer;

    // ASIDE, SONG PLAYLIST 2
    var slowwidth; //friday
    var slowvwidth; //valentine's day
    var songList1 = document.getElementById('songList1');
    var songList2 = document.getElementById('songList2');
    var songAudio = document.getElementsByTagName('audio');


//////////////////////////////////////
    // h1
    var fade = document.getElementById('fade');

    fade.addEventListener('mouseover', phrases);

    function phrases() {
      setTimeout(phrase1, 8000)
      setTimeout(phrase2, 16000)
      setTimeout(phrase3, 24000)
      setTimeout(phrase4, 32000)
      setTimeout(phrase5, 40000)
    }

      function phrase1 () {
        fade.innerHTML = "what day is it?";
      }

      function phrase2 () {
        fade.innerHTML = "i need more time";
      }

      function phrase3 () {
        fade.innerHTML = "help";
      }

      function phrase4 () {
        fade.innerHTML = "is it friday yet?";
      }

      function phrase5 () {
        fade.innerHTML = "i'm so tired";
      }


//////////////////////////////////////
    //class
    listStuff[0].addEventListener('mouseover', function(){ //MON & WED
      listStuff[4].style.backgroundColor = '#FFFF00';
      listStuff[4].style.color = '#430799';
      listStuff[6].style.backgroundColor = '#FFFF00';
      listStuff[6].style.color = '#430799';
    });

    listStuff[0].addEventListener('mouseout', function(){
      listStuff[4].style.backgroundColor = ' #5C02C4';
      listStuff[4].style.color = ' #FF02C4';
      listStuff[6].style.backgroundColor = ' #5C02C4';
      listStuff[6].style.color = ' #FF02C4';
    });

    listStuff[1].addEventListener('mouseover', tuesThurs);

    listStuff[1].addEventListener('mouseout', tuesThursHover);

    listStuff[2].addEventListener('mouseover', tuesThurs);

    listStuff[2].addEventListener('mouseout', tuesThursHover);

    listStuff[3].addEventListener('mouseover', tuesThurs);

    listStuff[3].addEventListener('mouseout', tuesThursHover);

    function tuesThurs () {
      vDay.style.backgroundColor = '#FFFF00';
      vDay.style.color = '#430799';
      listStuff[7].style.backgroundColor = '#FFFF00';
      listStuff[7].style.color = '#430799';
    }

    function tuesThursHover () {
      vDay.style.backgroundColor = '#5C02C4';
      vDay.style.color = '#FF02C4';
      listStuff[7].style.backgroundColor = ' #5C02C4';
      listStuff[7].style.color = '#FF02C4';
    }


//////////////////////////////////////
    // valentine's day special tip
    vDay.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showVDayTip, 600);
      vDay.style.color = '#FFFF00';
    });

    vDay.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      vDayTip.style.opacity = 0;
      vDay.style.color = '#FF02C4';
    });

    function showVDayTip(){
      vDayTip.style.opacity = 1;
    }

          //VALENTINE'S DAY PLAYLIST
    vDay.addEventListener('click', function(){
      slowvwidth = setTimeout(showVWidth, 600);
      songList1.style.height = '100%';
    });

    function showVWidth () {
      songList1.style.width = '100%';
      songList1.style.opacity = '1';
    }

    // songList1 //
    var linkSong = document.getElementById('linkSong');
    var linkSong2 = document.getElementById('linkSong2');
    var linkSong3 = document.getElementById('linkSong3');
    var linkSong4 = document.getElementById('linkSong4');
    var linkSong5 = document.getElementById('linkSong5');

    linkSong.addEventListener('click',function(){
      if(linkSong = !linkSong){
        songAudio[0].pause();
      }
      else{
        songAudio[0].play();
      }
    });

    linkSong2.addEventListener('click',function(){
      if(linkSong2 = !linkSong2){
        songAudio[1].pause();
      }
      else{
        songAudio[1].play();
      }
    });

    linkSong3.addEventListener('click',function(){
      if(linkSong3 = !linkSong3){
        songAudio[2].pause();
      }
      else{
        songAudio[2].play();
      }
    });

    linkSong4.addEventListener('click',function(){
      if(linkSong4 = !linkSong4){
        songAudio[3].pause();
      }
      else{
        songAudio[3].play();
      }
    });

    linkSong5.addEventListener('click',function(){
      if(linkSong5 = !linkSong5){
        songAudio[4].pause();
      }
      else{
        songAudio[4].play();
      }
    });



//////////////////////////////////////
    // friday tip
    free.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showFreeTip, 600);
      free.style.color = '#FFFF00';
    });

    free.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      freeTip.style.opacity = '0';
      free.style.color = '#FF02C4';
    });

    function showFreeTip(){
      freeTip.style.opacity = '1';
    }

          /* FRIDAY PLAYLIST */
    free.addEventListener('click', function(){
      slowwidth = setTimeout(showWidth, 600);
      songList2.style.height = '100%';
    });

    function showWidth () {
      songList2.style.width = '100%';
      songList2.style.opacity = '1';
    }

    // songList2 //
    var linkSong6 = document.getElementById('linkSong6');
    var linkSong7 = document.getElementById('linkSong7');
    var linkSong8 = document.getElementById('linkSong8');
    var linkSong9 = document.getElementById('linkSong9');
    var linkSong10 = document.getElementById('linkSong10');

    linkSong6.addEventListener('click',function(){
      if(linkSong6 = !linkSong6){
        songAudio[5].pause();
      }
      else{
        songAudio[5].play();
      }
    });

    linkSong7.addEventListener('click',function(){
      if(linkSong7 = !linkSong7){
        songAudio[6].pause();
      }
      else{
        songAudio[6].play();
      }
    });

    linkSong8.addEventListener('click',function(){
      if(linkSong8 = !linkSong8){
        songAudio[7].pause();
      }
      else{
        songAudio[7].play();
      }
    });

    linkSong9.addEventListener('click',function(){
      if(linkSong9 = !linkSong9){
        songAudio[8].pause();
      }
      else{
        songAudio[8].play();
      }
    });

    linkSong10.addEventListener('click',function(){
      if(linkSong10 = !linkSong10){
        songAudio[9].pause();
      }
      else{
        songAudio[9].play();
      }
    });

    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');

    close1.addEventListener('click', function() {
      songList1.style.width="0%";
      songList1.style.opacity='0';
    });

    close2.addEventListener('click', function() {
      songList2.style.width="0%";
      songList2.style.opacity='0';
    });
});
