
  function myFunction(x) {
    x.classList.toggle("change");
  }
// wow animation
  new WOW().init();

// title animation
  $(document).ready(function() {
    $("#text-anime").textillate({
      loop: true
    });
  });

// blog new hide
$(document).ready(function(){
$("#blog-new-hide").click(function(){
  $("#blog-new").hide();
});
});



// COMMENT BOX FONT SIZE CHANGE
// When + or - buttons are clicked the font size of the h1 is increased/decreased by 2
// The max is set to 50px for this demo, the min is set by min font in the user's style sheet

function getSize() {
size = $( "#font-change" ).css( "font-size" );
size = parseInt(size, 10);
$( "#font-size" ).text(  size  );
}

//get inital font size
getSize();

$( "#up" ).on( "click", function() {

// parse font size, if less than 50 increase font size
if ((size + 2) <= 30) {
$( "#font-change" ).css( "font-size", "+=2" );
$( "#font-size" ).text(  size += 2 );
}
});

$( "#down" ).on( "click", function() {
if ((size - 2) >= 12) {
$( "#font-change" ).css( "font-size", "-=2" );
$( "#font-size" ).text(  size -= 2  );
}
});

// sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

// Sticky nav menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stickymenu").style.top = "60px";
  } else {
    document.getElementById("stickymenu").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreText.style.display = "inline";
  }
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
