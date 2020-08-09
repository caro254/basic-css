

    var imgObj ;
    var animate ;
    function init(){
     imgObj = document.getElementById('myImage');
     imgObj.style.position= 'relative'; 
     imgObj.style.left = '0px'; 
    }
    function moveRight(){
     imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px'; // move from the left 5 pixels
     animate = setTimeout(moveRight,20); // call moveRight in 20 milliseconds
    }
