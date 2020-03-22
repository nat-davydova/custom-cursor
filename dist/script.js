const cursorChangeElems = document.querySelectorAll("[data-cursor-type]");

const createCursorElem = () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("c-cursor");
  document.body.prepend(customCursor);
};

const moveCursorElem = (x, y) => {
  const cursorElem = document.querySelector(".c-cursor");

  cursorElem.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(moveCursorElem);
};

const addClasses = (elem, classesArr) => {
  classesArr.forEach(classElem => elem.classList.add(classElem));
};

const hoverHandler = (elem, cursorElem, classesArr) => {
  elem.addEventListener("mouseenter", () => {
    addClasses(cursorElem, classesArr);
  });
};

const setHovers = (cursorElem, changeElemsArr) => {
  changeElemsArr.forEach(elem => {
    const behavioursArr = elem.dataset.cursorType.split(" ");

    hoverHandler(elem, cursorElem, behavioursArr);

    //elem.addEventListener("mouseout", outHandler);
  });
};

//cursor init function
const initCursor = () => {
  createCursorElem();

  const cursorElem = document.querySelector(".c-cursor");

  setHovers(cursorElem, cursorChangeElems);

  document.body.addEventListener("mousemove", e => {
    moveCursorElem(e.clientX, e.clientY);
    requestAnimationFrame(moveCursorElem);
  });
};

initCursor();