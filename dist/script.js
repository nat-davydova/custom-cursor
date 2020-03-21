//create a cursor element
const createCursorElem = () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("c-cursor");
  document.body.prepend(customCursor);
};

const moveCursorElem = (x, y) => {
  const customCursor = document.querySelector(".c-cursor");

  customCursor.style.top = y + "px";
  customCursor.style.left = x + "px";
};

//cursor function
const initCursor = () => {
  createCursorElem();

  document.body.addEventListener("mousemove", e => {
    moveCursorElem(e.clientX, e.clientY);
  });
};

initCursor();