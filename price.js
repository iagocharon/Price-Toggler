const monthly = document.getElementsByClassName("monthly");
const annually = document.getElementsByClassName("annually");
const toggle = document.getElementsByTagName("input")[0];

toggle.addEventListener("click", () => {
  for (let i = 0; i < monthly.length; i++) {
    console.log(monthly[i].classList);
    monthly[i].classList.toggle("hidden");
    annually[i].classList.toggle("hidden");
  }
});
