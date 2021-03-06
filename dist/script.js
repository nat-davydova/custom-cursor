const cursorClassname = "c-cursor";

const cursorChangeElems = document.querySelectorAll("[data-cursor-type]");

const createCursorElem = () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add(cursorClassname);
  document.body.prepend(customCursor);
};

const moveCursorElem = (x, y) => {
  const cursorElem = document.querySelector(`.${cursorClassname}`);

  cursorElem.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(moveCursorElem);
};

const addClasses = (elem, classesArr) => {
  classesArr.forEach((classElem) =>
  elem.classList.add(`${cursorClassname}--${classElem}`));

};

const removeClasses = (elem, classesArr) => {
  classesArr.forEach((classElem) =>
  elem.classList.remove(`${cursorClassname}--${classElem}`));

};

const mouseenterHandler = (elem, cursorElem, classesArr) => {
  elem.addEventListener("mouseenter", () => {
    addClasses(cursorElem, classesArr);
  });
};

const mouseoutHandler = (elem, cursorElem, classesArr) => {
  elem.addEventListener("mouseout", () => {
    removeClasses(cursorElem, classesArr);
  });
};

const setHovers = (cursorElem, changeElemsArr) => {
  changeElemsArr.forEach(elem => {
    const behavioursArr = elem.dataset.cursorType.split(" ");

    mouseenterHandler(elem, cursorElem, behavioursArr);
    mouseoutHandler(elem, cursorElem, behavioursArr);
  });
};

//cursor init function
const initCursor = () => {
  createCursorElem();

  const cursorElem = document.querySelector(`.${cursorClassname}`);

  setHovers(cursorElem, cursorChangeElems);

  document.body.addEventListener("mousemove", e => {
    cursorElem.style.top = 0;
    cursorElem.style.left = 0;
    moveCursorElem(e.clientX, e.clientY);
    requestAnimationFrame(moveCursorElem);
  });
};

initCursor();