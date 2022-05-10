const $buttons = document.getElementById("buttons");
const $boxData = document.getElementById("data");

$buttons.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "INPUT") {
    $boxData.value += e.target.value;
  }

  if (e.target && e.target.classList.contains("button--clear")) {
    $boxData.value = "";
  }

  if (e.target && e.target.classList.contains("button--equaly")) {
    $boxData.value = eval($boxData.value);
  }

  if (e.target && e.target.classList.contains("button--del")) {
    $boxData.value = $boxData.value.slice(0, -1);
  }
});
