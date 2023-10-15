const clockSpan = document.querySelector(".clock");
const clockOriginalSpan = document.querySelector(".original");
const heading = document.querySelector(".heading");

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session;
  let originalTime;
  let textHeading;
  if (hh < 12) {
    session = "a.m";
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    originalTime = hh + ":" + mm + ":" + ss;

    // let bal = 12 - hh;
    // textHeading = `You have ${bal} before Noon`;
  } else {
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    originalTime = hh + ":" + mm + ":" + ss;
    session = "p.m";
  }
  if (hh !== null) {
    let changeHH = 24 - hh;
    let changeMM = 60 - mm;
    let changeSS = 60 - ss;
    hh = changeHH;
    mm = changeMM;
    ss = changeSS;
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;

  //   document.getElementById("heading").innerText = textHeading;
  document.getElementById("original").innerText = originalTime + " " + session;
  document.getElementById("clock").innerText = time;

  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}
// currentTime();
document.addEventListener("DOMContentLoaded", currentTime);
