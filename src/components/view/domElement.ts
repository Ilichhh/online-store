import type { Attributes } from '../../types/types';

class DomElement {
  public createElement(tag: string, classlist: string, attributes?: Attributes, content?: string): HTMLElement {
    const element: HTMLElement = document.createElement(tag);
    element.className = classlist;

    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value.toString());
      }
    }
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}

export default DomElement;
