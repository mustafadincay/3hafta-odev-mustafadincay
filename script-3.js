class Animal {
  constructor() {
    this.$mainImageEl = document.querySelector(".main-image");
    this.$tbodyEl = document.querySelector("tbody");
    this.$buttons = document.querySelectorAll("button");
    this._data = [
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
  }

  selectDiv() {
    this.$mainImageEl.src;
  }

  getButtons() {
    document.querySelectorAll("button");
  }

  createPetElement(pet) {
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
      "</button></td></tr>";
  }

  addToTable(content) {
    this.$tbodyEl.innerHTML += content;
  }
  /*
  fillPetsInHtm() {
    this._data.forEach((element) => {
      this.addToTable(this.createPetElement(this._data[element]));
    });
  }
*/
  fillPetsInHtm() {
    for (let i = 0; i < this._data.length; i++) {
      this.addToTable(this.createPetElement(this._data[i]));
    }
  }

  setColor(element) {
    this.$tbodyEl.children[element].style.backgroundColor = this;
    this.$mainImageEl = this._data.image;
  }

  fillColor(element) {
    let $temp = "";
    let $setColor = "";
    this.$temp = this.$tbodyEl.children[element];
    this.$setColor = $temp.getAttribute("class");
    $temp.addEventListener("click", setColor(element).bind(this));
  }

  bindEvents() {
    this.buttons = this.getButtons();
    this._data.forEach((element) => {
      this.$temp.addEventListener("click", this.fillColor.call(this, element));
      this.$tempImage = document.querySelector(".main-image");
      this.$tempImage.src = $mainImageEl;
      this.$tempImage.style.width = "160px";
      this.$tempImage.style.height = "120px";
    });
  }

  playSound() {
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
    getButtons.forEach((element) => {
      element.addEventListener("click", function (event) {
        event.stopPropagation();
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    });
  }

  init() {
    this.fillPetsInHtm();
    this.bindEvents();
    this.playSound();
  }
}

let animal = new Animal();
animal.init();
