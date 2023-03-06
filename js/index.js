const USER_API = "https://randomuser.me/api/";
const DOG_API = "https://dog.ceo/api/breeds/image/random";
const CAT_API = "http://aws.random.cat/meow";
const FACT_CAT = "https://catfact.ninja/fact";

const userImage = document.querySelector(".user-image");
const dogImage = document.querySelector(".dog-img");
const catImage = document.querySelector(".cat-img");
const button = document.querySelector(".generete-btn");
const funFact = document.querySelector(".cat-modal-info");
const userModalInfo = document.querySelector(".user-modal-info");

async function fetchRequest(url) {
  try {
    return fetch(url)
      .then(response => response.json())
      .then(data => data);
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", async () => {
  let userResponse = await fetchRequest(USER_API);
  let dogResponse = await fetchRequest(DOG_API);
  let catResponse = await fetchRequest(CAT_API);
  let factResponse = await fetchRequest(FACT_CAT);

  catImage.src = catResponse.file;
  dogImage.src = dogResponse.message;
  userImage.src = userResponse.results[0].picture.large;
  
  funFact.innerHTML = factResponse.fact;
});

//MODAL

!(function(e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function(e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function() {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  /* Перебираем массив кнопок */
  modalButtons.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault();

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeButtons.forEach(function(item) {
    item.addEventListener("click", function(e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  document.body.addEventListener(
    "keyup",
    function(e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
      }
    },
    false
  );

  overlay.addEventListener("click", function() {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
  });
});
