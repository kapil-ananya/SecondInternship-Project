document.addEventListener("DOMContentLoaded", function(){

  // Typed
  const typedEl = document.querySelector("#typed");
  if(typedEl){
    new Typed("#typed", {
      strings:[
        "Frontend Developer",
        "MERN Stack Developer",
        "Full Stack Developer"
      ],
      typeSpeed:60,
      backSpeed:40,
      loop:true
    });
  }

  const form = document.getElementById("form");

  if(form){

    const message = document.getElementById("formMessage");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("msg");

    const name_error = document.getElementById("name_error");
    const email_error = document.getElementById("email_error");
    const msg_error = document.getElementById("msg_error");

    form.addEventListener("submit", function(e){
      e.preventDefault();

      let valid=true;

      if(name.value.trim()===""){
        name_error.textContent="Name required";
        valid=false;
      } else name_error.textContent="";

      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!regex.test(email.value)){
        email_error.textContent="Valid email required";
        valid=false;
      } else email_error.textContent="";

      if(msg.value.trim()===""){
        msg_error.textContent="Message required";
        valid=false;
      } else msg_error.textContent="";

      if(valid){
        message.style.display="block";
        message.textContent="Thanks "+name.value+"! Message sent successfully.";
        form.reset();
      }
    });
  }

  // ScrollReveal
  if (typeof ScrollReveal !== "undefined") {

    const sr = ScrollReveal({
      reset:false,
      distance:"60px",
      duration:1200,
      delay:200
    });

    const reveal = (selector, options) => {
      if(document.querySelector(selector)){
        sr.reveal(selector, options);
      }
    };

    reveal(".about-section",{origin:"top"});
    reveal(".card1",{origin:"left"});
    reveal(".card2",{origin:"right"});
    reveal(".skills",{origin:"top"});
    reveal(".skill-box",{origin:"top", interval:200});
    reveal(".progress-part",{origin:"bottom", interval:200});
    reveal(".head",{origin:"top"});
    reveal(".card-rounded",{origin:"top", interval:200});
  }

});

// cards effect
const skillBox = document.querySelectorAll(".skill-box");

skillBox.forEach(skillbox => {
  skillbox.addEventListener("click", () => {
   box.style.background = "#ffffff";
    skillbox.style.color = "#000";
  });
});


// project card effect
const cards = document.querySelectorAll(".card-rounded");

const projectTexts = ["Frontend Project", "Frontend Project", "MERN Project"];

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const textEl = card.querySelector(".card-text");
    textEl.textContent = projectTexts[index];
    textEl.style.opacity = 1;           // show text
    textEl.style.transform = "translateY(0)"; // slide up animation
  });
});

