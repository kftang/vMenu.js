var vMenu = {
  menus: new Map(),
};
vMenu.init = function() {
  this.menu = document.createElement('span');
  this.menu.className = 'vm-menu vm-h'
  this.menu.appendChild(document.createElement('ul'));
  // Add menu to body
  document.querySelector('html > body').appendChild(this.menu);
  console.log('initialized');
  document.addEventListener('click', (e) => {
    this.menu.className = 'vm-menu vm-h';
  });
};
vMenu.spawn = function(e) {
  e.preventDefault();
  const menu = this.menus.get(e.target);
  const menuItems = menu.items;
  const ul = this.menu.querySelector('ul');
  while (ul.firstChild) ul.removeChild(ul.firstChild);
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    const li = document.createElement('li');
    const itemElement = document.createElement('a');
    itemElement.innerHTML = item;
    li.appendChild(itemElement);
    ul.appendChild(li);
  }
  this.menu.className = 'vm-menu';
  this.menu.style.top = e.clientY + 'px';
  this.menu.style.left = e.clientX + 'px';
  console.log(menu);
};
vMenu.addTrigger = function(trigger, menuItems) {
  console.log('Adding trigger');
  if (trigger instanceof HTMLElement) {
    trigger.addEventListener('contextmenu', e => this.spawn(e));
  } else {
    trigger = document.querySelector(trigger);
    trigger.addEventListener('contextmenu', e => this.spawn(e));
  }
  this.menus.set(trigger, {});
  const menu = this.menus.get(trigger);
  menu.items = menuItems;
}
