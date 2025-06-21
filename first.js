let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnText = e.target.innerText;

    if (btnText === "=") {
      try {
        string = eval(string).toString();
      } catch {
        string = "Error";
      }
      inputBox.value = string;
    } else if (btnText === "AC") {
      string = "";
      inputBox.value = string;
    } else if (btnText === "DEL") {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else {
      string += btnText;
      inputBox.value = string;
    }
  });
});
