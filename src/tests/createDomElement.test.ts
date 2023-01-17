import DomElement from '../components/view/domElement';

const domElement = new DomElement();

describe('Take from 2 to 4 parameters, return DOM element', () => {
  const mocWrapper = document.createElement('div');
  mocWrapper.innerHTML = `
    <div class="main"></div>
    <input class="checkbox-filter form" type="checkbox" id="2"></input>
    <h2 class="header">Hello</h2>
  `;

  const res1 = mocWrapper.children[0];
  const res2 = mocWrapper.children[1];
  const res3 = mocWrapper.children[2];

  it('create simple div with class "main"', () => {
    expect(domElement.createElement('div', 'main')).toEqual(res1);
  });
  it('create elemnt with several classes and attributes', () => {
    expect(domElement.createElement('input', 'checkbox-filter form', { type: 'checkbox', id: 2 })).toEqual(res2);
  });
  it('work with empty attributes array', () => {
    expect(domElement.createElement('h2', 'header', {}, 'Hello')).toEqual(res3);
  });
});
