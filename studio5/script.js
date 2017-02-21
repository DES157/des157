// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //this allows the li items to go in between the containers
    //note: CLASS = CONTAINER & IDS = LEFT/RIGHT HAS TO BE THE PARENT OF THE ITEMS
    //YOU WANT TO DRAG LEFT AND RIGHT
    //THE HEIGHT OF THE CONTAINER MATTERS - esp with ul so set it
    //if you want to put multiple statements, put them like this [after getting the elements by id stuff], {copy:true}, {removeOnSpill: true}

    // some terminology:
      //el = element came from the container source
      //target = target container (recieving)
      //source = container
      //sibling = similar element? /can be null - this means that it would be placed as the last element in the container

      //why does this need a space??
      dragula([document.getElementById('left'), document.getElementById('right')], {copy: true})
      .on('drag', function (el) {
        el.className = el.className.replace(' moved', '');
      }).on('drop', function (el) {
        el.className += ' moved';
      }).on('over', function (el, container) {
        container.className += ' over';
      }).on('out', function (el, container) {
        container.className = container.className.replace(' over', '');
      });


///////////
      var charaTraits = document.getElementsByTagName('li');
      var info = document.getElementById('info')

      var infoTimer;

      charaTraits[0].addEventListener('mouseover', function(){
        infoTimer = setTimeout(showInfo, 600);
        info.innerHTML= "+1 happiness";
      })
      charaTraits[0].addEventListener('mouseout', function(){
        clearTimeout(infoTimer);
        info.style.opacity = 0;
      })

      charaTraits[1].addEventListener('mouseover', function(){
        infoTimer = setTimeout(showInfo, 600);
        info.innerHTML= "-1 awareness";
      })
      charaTraits[1].addEventListener('mouseout', function(){
        clearTimeout(infoTimer);
        info.style.opacity = 0;
      })

      charaTraits[2].addEventListener('mouseover', function(){
        infoTimer = setTimeout(showInfo, 600);
        info.innerHTML= "-1 privacy" + "<br>" + "+1 awareness";
      })
      charaTraits[2].addEventListener('mouseout', function(){
        clearTimeout(infoTimer);
        info.style.opacity = 0;
      })

      function showInfo(){
        info.style.opacity = 1;
      }

      var finish = document.getElementById('finish');
      var congrats = document.getElementById('congrats');
      var close = document.getElementById('close');

      finish.addEventListener('click',function(){
        congrats.style.display = "block";
      });
      close.addEventListener('click', function(){
        congrats.style.display = "none";
      })
});
