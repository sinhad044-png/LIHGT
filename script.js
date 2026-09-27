const bulb = document.getElementById("bulb");
const switchBtn = document.getElementById("switchBtn");

let isOn = false;

function toggleLight() {
  isOn = !isOn;

  if (isOn) {
    document.body.classList.add("on");
    switchBtn.textContent = "Turn Light Off";
  } else {
    document.body.classList.remove("on");
    switchBtn.textContent = "Turn Light On";
  }
}

// Click the bulb
bulb.addEventListener("click", toggleLight);

// Click the button
switchBtn.addEventListener("click", toggleLight);