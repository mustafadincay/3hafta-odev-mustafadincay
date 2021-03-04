const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      color: "red",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      color: "blue",
      soundText: "Meow - type m",
    },
    {
      image: "kus.jpg",
      name: "Cici kuş",
      type: "Muhabbet Kuşu",
      sound: "cik",
      color: "purple",
      soundText: "Cik - type c",
    },
  ];
  let $mainImageEl = document.querySelector(".main-image").src;
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const createPetElement = function (pet) {
    return (
      "<tr class='" +
      pet.color +
      "'><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };
  /**  
  her satır için tr color class ismi(red, blue, purple) değişkene kaydedildi.
  daha sonra style.backgroundColor ile renk atama işlemi yapıldı.

  her objenin resimleri alındı ve default resmin classı seçilip atama yapıldı.
  daha sonra genişlik ve yükseklik ayarlandı.
 **/
  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < _data.length; i++) {
      $temp = $tbodyEl.children[i];
      let $setColor = $temp.getAttribute("class");
      $temp.addEventListener("click", function (event) {
        if (i === 0) {
          $tbodyEl.children[i].style.backgroundColor = $setColor;
          $tbodyEl.children[1].style.backgroundColor = "#cbedb5";
          $tbodyEl.children[2].style.backgroundColor = "#cbedb5";
        }
        if (i === 1) {
          $tbodyEl.children[i].style.backgroundColor = $setColor;
          $tbodyEl.children[0].style.backgroundColor = "#cbedb5";
          $tbodyEl.children[2].style.backgroundColor = "#cbedb5";
        }
        if (i === 2) {
          $tbodyEl.children[i].style.backgroundColor = $setColor;
          $tbodyEl.children[0].style.backgroundColor = "#cbedb5";
          $tbodyEl.children[1].style.backgroundColor = "#cbedb5";
        }

        $mainImageEl = _data[i].image;
        let $tempImage = document.querySelector(".main-image");
        $tempImage.src = $mainImageEl;
        $tempImage.style.width = "160px";
        $tempImage.style.height = "120px";
      });
    }
    /*
    event.key ile basılan tuşun b, m, c harflerine eşitliği kontrol edildi
    ve ona göre play() metodu çalıştırıldı.
    */
    document.addEventListener("keydown", function (event) {
      if (event.key === "b") {
        const playSound = document.getElementById("bark");
        playSound.play();
      } else if (event.key === "m") {
        const playSound = document.getElementById("meow");
        playSound.play();
      } else if (event.key === "c") {
        const playSound = document.getElementById("cik");
        playSound.play();
      }
    });

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation();
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
  };

  return {
    init: init,
  };
})();
