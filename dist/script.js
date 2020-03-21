const cursorChangeElems = document.querySelectorAll("[data-cursor-type]");

const createCursorElem = () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("c-cursor");
  document.body.prepend(customCursor);
};

const moveCursorElem = (x, y) => {
  const customCursor = document.querySelector(".c-cursor");

  customCursor.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(moveCursorElem);
};

const setHovers = changeElemsArr => {
  changeElemsArr.forEach(elem => {
    const behavioursArr = elem.dataset.cursorType.split(" ");

    elem.addEventListener("mouseenter", hoverHandler.bind(behavioursArr));

    elem.addEventListener("mouseout", outHandler);
  });
};

//cursor init function
const initCursor = () => {
  createCursorElem();

  setHovers(cursorChangeElems);

  document.body.addEventListener("mousemove", e => {
    moveCursorElem(e.clientX, e.clientY);
    requestAnimationFrame(moveCursorElem);
  });
};

initCursor();