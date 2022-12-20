class DomElement {
  tag: string;
  classlist?: string;
  attributes?: object;
  content?: string;

  constructor(tag: string, classlist?: string, attributes?: object, content?: string) {
    this.tag = tag;
    this.classlist = classlist;
    this.attributes = attributes;
    this.content = content;
  }

  public create(): HTMLElement {
    const element: HTMLElement = document.createElement(this.tag);
    if (this.classlist) {
      element.className = this.classlist;
    }
    if (this.attributes) {
      for (const [key, value] of Object.entries(this.attributes)) {
        element.setAttribute(key, value);
      }
    }
    if (this.content) {
      element.textContent = this.content;
    }
    return element;
  }
}

export default DomElement;
