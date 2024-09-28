document.addEventListener("DOMContentLoaded", buildParagraph);

function buildParagraph(params) {
  const url = new URL(location.href);
  const currentRating = url.searchParams.get("rate");

  if (!currentRating || !["1", "2", "3", "4", "5"].includes(currentRating)) {
    alert("현재 평가된 rating없이 페이지에 진입했습니다.");
    redirectIndex();
    return;
  }

  const newParagraph = `you selected ${currentRating} out of 5`;
  const selectedParagraph = document.querySelector(".selected");
  selectedParagraph.textContent = newParagraph;
  return;
}

function redirectIndex() {
  location.href = "index.html";
}
