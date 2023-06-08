// on page load
let minTitle = document.querySelector(".min-logo");
let mainTitle = document.querySelector(".main-logo");

window.addEventListener("load", () => {
  setTimeout(() => {
    minTitle.style.transform = "translateX(0)";
  }, 400);
  setTimeout(() => {
    mainTitle.style.opacity = "1";
  }, 1000);
});

// on Box
let aboutBox = document.querySelector(".main-about");
let boxes = document.querySelectorAll(".cards div");

window.addEventListener("scroll", () => {
  let windowHeightIn = window.innerHeight;

  boxes.forEach((box) => {
    let eachTopBox = box.getBoundingClientRect().top;
    if (eachTopBox < windowHeightIn + 40) {
      setTimeout(() => {
        box.style.opacity = "1";
        box.style.transform = "translateX(0)";
      }, 500);
    } else {
      box.style.opacity = "0";
      box.style.transform = box.classList.contains("second")
        ? "translateX(150%)"
        : "translateX(-150%)";
    }
  });

  let topBox = aboutBox.getBoundingClientRect().top;
  if (topBox < windowHeightIn - 100) {
    setTimeout(() => {
      aboutBox.style.transform = "translateX(0)";
      aboutBox.style.opacity = "1";
    }, 700);
  } else {
    aboutBox.style.transform = "translateX(100%)";
    aboutBox.style.opacity = "0";
  }
});

//  connectSection transition
let connectSection = document.querySelector(
  ".connect-container *:nth-child(1)"
);

window.addEventListener("scroll", handleConnectTrans);

function handleConnectTrans() {
  let windowHeight = window.innerHeight;
  let topOfConnect = connectSection.getBoundingClientRect().top;

  if (topOfConnect < windowHeight) {
    setTimeout(() => {
      connectSection.style.transform = "translateY(-17%)";
      connectSection.style.opacity = "1";
    }, 200);
  } else {
    connectSection.style.transform = "translateY(80%)";
    connectSection.style.opacity = "0";
  }
}

// intersection observer
let observedItem = document.querySelector(".pre-connect div");
let divItems = document.querySelectorAll(
  ".pre-connect img,.pre-connect .details"
);

let options = {
  threshold: "1",
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        divItems.forEach((item) => {
          item.style.transform = "translateX(0)";
        });
      }, 300);
    }
    if (!entry.isIntersecting) {
      divItems.forEach((item) => {
        item.style.transform = item.classList.contains("details")
          ? "translateX(110%)"
          : "translateX(-110%)";
      });
    }
  }, options);
});

observer.observe(observedItem);
