$(document).ready(function () {
  $("#button").click(function(){
    let inputNumber = document.getElementById("input").value;
    let array = [];
    if (isNaN(inputNumber) || inputNumber < 0) {
      alert("Input a number greater than or equal to zero.")
    }
    for (let i = 0; i <= inputNumber; i++) {
      if (/3+/.test(i)) {
        array.push("'Won't you be my neighbor?'");
      } else if (/2+/.test(i)) {
        array.push("'Boop!'");
      } else if (/1+/.test(i)) {
        array.push("'Beep!");
      }
      else {
        array.push(` '${i}'`);
      }

    }
    $("#input").hide();
    $("#button").hide();
    document.getElementById("output").innerHTML =  array.join(", ");
    event.preventDefault();
  });
})


