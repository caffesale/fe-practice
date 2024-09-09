const input = document.querySelector(".input");
const submitButton = document.querySelector(".form-submit");
const closeButton = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

console.log(modal, closeButton);
submitButton.addEventListener("click", () => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regEx.test(input.value)) {
    alert("email is invalid");
    return;
  }
  modal.showModal();
  return;
});

closeButton.addEventListener("click", () => {
  console.log("modal-close");
  modal.close("this");
});
