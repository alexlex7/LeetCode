import './2620Counter';
import './2704ToBeOrNotToBe';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack';

  return element;
}

document.body.appendChild(component());
