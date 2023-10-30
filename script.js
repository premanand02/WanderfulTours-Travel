
// loder

var loader = document.querySelector('#loader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});

// Onclick
 
var click =  document.querySelector('#show1');
var click =  document.querySelector('#show2');
var click =  document.querySelector('#show3');
var click =  document.querySelector('#show4');
var click =  document.querySelector('#show5');

var Flight = document.querySelector('.plan1')
var Train = document.querySelector('.train1')
var Hotels= document.querySelector('.hotels')
var Home= document.querySelector('.Homestays_Villas')
var Holiday= document.querySelector('.Holiday_Packages')
document.querySelector('#show1').style.display="initial"


Flight.addEventListener('click' , function(){
  
  document.querySelector('#show1').style.display="initial"
  document.querySelector('#show2').style.display="none"
  document.querySelector('#show3').style.display="none"
  document.querySelector('#show4').style.display="none"
  document.querySelector('#show5').style.display="none"
})


var Flight = document.querySelector('#Flight')
Train.addEventListener('click' , function(){
  
  document.querySelector('#show2').style.display="initial"
  document.querySelector('#show1').style.display="none"
  document.querySelector('#show3').style.display="none"
  document.querySelector('#show4').style.display="none"
  document.querySelector('#show5').style.display="none"
}
)

var Flight = document.querySelector('#Flight')
Hotels.addEventListener('click' , function(){
  
  document.querySelector('#show3').style.display="initial"
  document.querySelector('#show1').style.display="none"
  document.querySelector('#show2').style.display="none"
  document.querySelector('#show4').style.display="none"
  document.querySelector('#show5').style.display="none"
}
)

var Flight = document.querySelector('#Flight')
Home.addEventListener('click' , function(){
  
  document.querySelector('#show4').style.display="initial"
  document.querySelector('#show1').style.display="none"
  document.querySelector('#show3').style.display="none"
  document.querySelector('#show2').style.display="none"
  document.querySelector('#show5').style.display="none"
}
)

var Flight = document.querySelector('#Flight')
Holiday.addEventListener('click' , function(){
  
  document.querySelector('#show5').style.display="initial"
  document.querySelector('#show1').style.display="none"
  document.querySelector('#show3').style.display="none"
  document.querySelector('#show4').style.display="none"
  document.querySelector('#show2').style.display="none"
}
)


function slider(){
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}

slider();


function authantication(){
  var login = document.querySelector(".login");
  var user = document.querySelector(".user");
  login.addEventListener('click', function(){
    user.style.display="initial";
  })
}
authantication();


function login_Animation(){
    // cut icon
  var icon = document.getElementById("icon");

  icon.onclick = function() {
    if (this.className === "Icon") {
      this.className = "Icon open"; 
    } else {
      this.className = "Icon";
    }
  };

  /**
   * Variables
   */
  const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

  /**
   * Add event listener to the "Sign Up" button
   */
  signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
  }, false)

  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
  }, false)
}
login_Animation();

// navbar

