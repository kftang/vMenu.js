document.addEventListener('DOMContentLoaded', () => {
  vMenu.init();
  vMenu.addTrigger('body', ['Test1', 'Test 2']);
});
// document.addEventListener('contextmenu', (e) => {
//   console.log(e);
//   e.preventDefault();
//   // vMenu.spawn(e.clientX, e.clientY);
// });
