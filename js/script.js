"use strict";
// Remove the transition class
const squares = document.querySelectorAll(".whenscrolling");
squares.forEach((square) => {
  square.classList.remove("slide-in-animation");
  square.classList.remove("slide-in-reverse-animation");

  // Create the observer, same as before:
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (square.classList.contains("slide-in")) {
          square.classList.add("slide-in-animation");
        }
        if (square.classList.contains("slide-in-reverse")) {
          square.classList.add("slide-in-reverse-animation");
        }
        return;
      }
      square.classList.remove("slide-in-animation");
      square.classList.remove("slide-in-reverse-animation");
    });
  });

  observer.observe(square);
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let show_letters = async (tag, i) => {
  let curr_show_len = 1;
  tag.style.color = "red";

  do {
    await delay(200);

    tag.innerText = contact_infos[i].substring(0, curr_show_len++);
    curr_show_len = curr_show_len > contact_infos[i].length ? 0 : curr_show_len;
  } while (true);
};
const i_tags = document.querySelectorAll("footer .contact-items .contact-item");
const contact_infos = [
  "(+1)639 560-****",
  "online2jerry@gmail.com",
  "https://jerryportfolio.netlify.app/",
  "Halifax, Nova Scotia, CA",
];
for (let i = 0; i < i_tags.length; i++) {
  show_letters(i_tags[i], i);
}

const about_btn = document.getElementById("about-btn");
const about_section = document.getElementById("about-line");
about_btn.addEventListener("click", () => {
  about_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const full_skill_tag = document.getElementById("full-skill-tag");
full_skill_tag.addEventListener("click", () => {
  full_skill_tag.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const work_btn = document.getElementById("work-btn");
const work_section = document.getElementById("work-line");
console.log(work_btn);
console.log(work_section);
work_btn.addEventListener("click", () => {
  work_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const contact_btn = document.getElementById("contact-btn");
const contact_section = document.getElementById("contact-section");
contact_btn.addEventListener("click", () => {
  contact_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const shake_icon = document.getElementById("shake-icon");
shake_icon.addEventListener("click", () => {
  contact_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const home_btn = document.getElementById("home-btn");
const banner_section = document.getElementById("banner");
home_btn.addEventListener("click", () => {
  banner_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const observer_contact = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      contact_btn.classList.add("active");
    } else {
      contact_btn.classList.remove("active");
    }
  });
});
observer_contact.observe(contact_section);

const observer_home = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      home_btn.classList.add("active");
    } else {
      home_btn.classList.remove("active");
    }
  });
});
observer_home.observe(banner_section);

const observer_about = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      about_btn.classList.add("active");
    } else {
      about_btn.classList.remove("active");
    }
  });
});
observer_about.observe(document.getElementById("about-section"));

const observer_work = new IntersectionObserver((entries) => {
  console.log('work-sec')
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      work_btn.classList.add("active");
    } else {
      work_btn.classList.remove("active");
    }
  });
});
observer_work.observe(document.getElementById("work-section")); 

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});