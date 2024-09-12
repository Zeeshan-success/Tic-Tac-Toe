let para = document.querySelector("#heading");
let btn1 = document.querySelector("#start");
let playarea = document.querySelector("#playarea");
let boxes = document.querySelectorAll(".box");
let btn2 = document.querySelector("#reset");
let winnerText = document.querySelector("#showWinner");
let playuser = document.querySelector("#playuser");
let compuser = document.querySelector("#Compplay");


playuser.addEventListener("click", ()=>{
  console.log("btn clicked");

  
  const disbalebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (a) => {
  winnerText.classList.remove("hide");
  winnerText.innerText = `Congraturlations Your Are Winner  ${a}`;
  btn2.classList.add("hide");
  btn1.innerText = "Play Again!";
  btn1.addEventListener("click", () => {
    btn1.innerText = "Lets Play!";
    winnerText.classList.add("hide");
  });
  disbalebox();
};

const withDraw = () => {
  winnerText.classList.remove("hide");
  winnerText.innerText = `This Game Was A Draw Make Another Try`;
  disbalebox();
};

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.classList.add("xColr");
      box.innerText = "X";

      turn = false;
    } else {
      box.classList.add("oColr");
      box.innerText = "O";

      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let arry of arr) {
    console.log(arry[0], arry[1], arry[2]);

    let position1 = boxes[arry[0]].innerText;
    let position2 = boxes[arry[1]].innerText;
    let position3 = boxes[arry[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      console.log(draw);
      draw++;
      if (position1 === position2 && position2 === position3) {
        console.log("congratulations you are Winner", position1);
        return showWinner(position1)
      } else if (
          boxes[0].innerText !== "" &&
          boxes[1].innerText !== "" &&
          boxes[2].innerText !== "" &&
          boxes[3].innerText !== "" &&
          boxes[4].innerText !== "" &&
          boxes[5].innerText !== "" &&
          boxes[6].innerText !== "" &&
          boxes[7].innerText !== "" &&
          boxes[8].innerText !== ""
                ) {
                  console.log("Game was Draw");
                  withDraw();
                }
              
    }
  }
};

btn1.addEventListener("click", () => {
  btn2.classList.remove("hide");

  for (let box of boxes) {
    box.classList.remove("hide");
    box.innerText = "";
    box.disabled = false;
  }
});
btn2.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
});
})

let draw = 0;


