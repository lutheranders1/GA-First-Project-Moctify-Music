function compute() {
  var principal = document.getElementById("principal").value;

  if (principal == "" || principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;

  var dateNow = new Date();
  var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

  var rateval = document.getElementById("result");
  document.getElementById("result").innerHTML =
    "If you deposit  " +
    "<span class='highlight'>" +
    principal +
    "</span>." +
    ", <br> at an interest rate of " +
    "<span class='highlight'>" +
    rate +
    "</span>%." +
    "<br> You will receive an amount of " +
    "<span class='highlight'>" +
    interest +
    "</span>" +
    ", <br> in the year " +
    "<span class='highlight'>" +
    yearNow +
    "</span>";
}

function SliderValue() {
  var slider = document.getElementById("rate");
  var output = document.getElementById("rate_val");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.onchange = function () {
    output.innerHTML = this.value;
  };
}