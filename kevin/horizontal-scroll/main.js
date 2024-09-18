const scrollerList = document.querySelectorAll(".scroller");

/**
 * Accessbility Test용으로 prefers-reduced-motion 사용중이라 주석처리
 */
// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

addAnimation();

function addAnimation() {
  scrollerList.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = [...scrollerInner.children];

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
