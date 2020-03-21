//create a cursor element
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

//cursor function
const initCursor = () => {
  createCursorElem();

  document.body.addEventListener("mousemove", e => {
    moveCursorElem(e.clientX, e.clientY);
    requestAnimationFrame(moveCursorElem);
  });
};

initCursor();