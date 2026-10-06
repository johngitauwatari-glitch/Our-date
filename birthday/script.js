function start() {

  document
    .getElementById("intro")
    .classList
    .add("hidden");

  document
    .getElementById("birthday")
    .classList
    .remove("hidden");

}


function blow() {

  // Put out all candle flames
  document
    .querySelectorAll(".flame")
    .forEach(function(flame) {

      flame.style.display = "none";

    });


  // Change 22 to 23
  document
    .getElementById("age")
    .textContent = "23 YEARS";


  // Change instruction
  document
    .getElementById("instruction")
    .textContent =
      "🎉 The candles are out! Welcome to 23!";


  // Hide blow button
  document
    .getElementById("blowBtn")
    .style
    .display = "none";


  // Show birthday letter
  document
    .getElementById("after")
    .classList
    .remove("hidden");


  // Start celebration
  confetti();

}


function confetti() {

  for (let i = 0; i < 90; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti";

    piece.style.left =
      Math.random() * 100 + "vw";


    piece.style.animationDelay =
      Math.random() * 1.2 + "s";


    const colors = [
      "#ff5b9d",
      "#8e7dff",
      "#ffd166",
      "#58c7d8",
      "#7ed957"
    ];

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    document.body.appendChild(piece);


    setTimeout(function() {

      piece.remove();

    }, 4200);

  }

}

