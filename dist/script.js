//create a cursor div
const createCursor = () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("c-cursor");
  document.body.prepend(customCursor);
};

//cursor function
const initCursor = () => {
  createCursor();

  document.body.addEventListener("mousemove", e => {
    console.log(e.clientX, e.clientY);
  });
};

initCursor();