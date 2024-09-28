const rateButtons = document.querySelectorAll("[data-rate]");
console.log(rateButtons);

rateButtons.forEach((node) => {
  node.addEventListener("click", updateRating);
});

function updateRating(event) {
  const currentRating = event.target.getAttribute("data-rate");
  const url = new URL(location.href);
  const searchParams = url.searchParams;
  searchParams.set("rate", currentRating);

  const newURL = url.origin + url.pathname + "?" + searchParams.toString();

  history.pushState({}, "", newURL);
}

const form = document.querySelector(".form");

form.addEventListener("submit", submitEvent);

function submitEvent(event) {
  event.preventDefault();
  const url = new URL(location.href);
  const rate = url.searchParams.get("rate");

  if (!rate || !["1", "2", "3", "4", "5"].includes(rate)) {
    alert("제출 전에 1~5사이의 값을 선택해주세요");
    return;
  }

  location.href = "thanks.html" + url.search;
}
