"use strict";

const fav = document.querySelectorAll(".fav");
const favOk = "http://127.0.0.1:5500/images/icons/fav.svg";
const favNo = "http://127.0.0.1:5500/images/icons/fav-ok.svg";

for (let i = 0; i < fav.length; i++) {
  fav[i].onclick = () => {
    if (fav[i].src == favNo) {
      fav[i].src = favOk;
    } else fav[i].src = favNo;
  };
}
