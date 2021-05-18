const els = document.getElementsByTagName("*");
var arr = Array.from(els);

arr.forEach((element) => {
  //const elementsChildren = thing.childNodes
  //const childrenArr = Array.from(elementsChildren)

  element.addEventListener("mouseover", function (event) {
    //event.preventDefault()

    function rand(min, max) {
      return parseInt(Math.random() * (max - min + 1), 10) + min;
    }

    randomParam = rand(20, 100);
    console.log(randomParam);

    function get_random_color() {
      var h = rand(1, 360); // color hue between 1 and 360
      var s = rand(30, 100); // saturation 30-100%
      var l = rand(30, 70); // lightness 30-70%
      return "hsl(" + h + "," + s + "%," + l + "%)";
    }

    let randColor = get_random_color();
    element.animate(
      [
        {
          transform: "translate(  0px)",
          color: randColor,
          width: "auto",
          backgroundColor: randColor,
          fontSize: "16px",
        },
        {
          transform: "translate(0px)",
          color: "black",
          width: randomParam + "vw",
          backgroundColor: randColor,
          fontSize: randomParam + "px",
        },
        {
          transform: "translate(  0px)",
          color: randColor,
          width: "auto",
          backgroundColor: randColor,
          fontSize: "16px",
        },
      ],
      {
        duration: 1000, // Zeit in Ms,
        iterations: Infinity, // Wiederholungen (hier unendlich)
        delay: 300, // Verzögerung
      }
    );
  });

  //element.addEventlistener
});
