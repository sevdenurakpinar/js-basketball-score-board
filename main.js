let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

function addOneHome() {
  homeCount += 1;
  scoreHomeEl.textContent = homeCount;
}
function addTwoHome() {
  homeCount += 2;
  scoreHomeEl.textContent = homeCount;
}
function addThreeHome() {
  homeCount += 3;
  scoreHomeEl.textContent = homeCount;
}

function removeOneHome() {
  homeCount -= 1;
  scoreHomeEl.textContent = homeCount;
}
function removeTwoHome() {
  homeCount -= 2;
  scoreHomeEl.textContent = homeCount;
}
function removeThreeHome() {
  homeCount -= 3;
  scoreHomeEl.textContent = homeCount;
}

function setScoreHome() {
  homeCount = prompt("Yeni basket sayısını girin (HOME):");

  if (isNaN(homeCount)) {
    alert("Lütfen geçerli bir sayı girin.");
    return;
  }

  scoreHomeEl.textContent = homeCount;
}
function changeNameHome() {
  var input = prompt("Takım Home'un yeni ismini giriniz:");
  document.getElementById("takim-home").textContent = input;
  document.getElementById("input-takim-home").style.display = "none";
}

function addOneGuest() {
  guestCount += 1;
  scoreGuestEl.textContent = guestCount;
}
function addTwoGuest() {
  guestCount += 2;
  scoreGuestEl.textContent = guestCount;
}
function addThreeGuest() {
  guestCount += 3;
  scoreGuestEl.textContent = guestCount;
}

function removeOneGuest() {
  guestCount -= 1;
  scoreGuestEl.textContent = guestCount;
}
function removeTwoGuest() {
  guestCount -= 2;
  scoreGuestEl.textContent = guestCount;
}
function removeThreeGuest() {
  guestCount -= 3;
  scoreGuestEl.textContent = guestCount;
}

function setScoreGuest() {
  guestCount = prompt("Yeni basket sayısını girin (GUEST):");

  if (isNaN(guestCount)) {
    alert("Lütfen geçerli bir sayı girin.");
    return;
  }

  let guestScore = document.getElementById("scoreGuest");
  guestScore.textContent = guestCount;
}

function changeNameGuest() {
  var input = prompt("Takım Guest'in yeni ismini giriniz:");
  document.getElementById("takim-guest").textContent = input;
  document.getElementById("input-takim-guest").style.display = "none";
}
