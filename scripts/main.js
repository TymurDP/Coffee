"use strict";

const fav = document.querySelectorAll(".fav");
const favOk = "https://tymurdp.github.io/Coffee/images/icons/fav.svg";
const favNo = "https://tymurdp.github.io/Coffee/images/icons/fav-ok.svg";

for (let i = 0; i < fav.length; i++) {
  fav[i].onclick = () => {
    if (fav[i].src == favNo) {
      fav[i].src = favOk;
    } else fav[i].src = favNo;
  };
}
