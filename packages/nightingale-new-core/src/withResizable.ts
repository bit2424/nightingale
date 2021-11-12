import { state, property } from "lit/decorators.js";
import NightingaleBaseElement, {
  Constructor,
} from "./nightingale-base-element";
import withDimensions from "./withDimensions";

const withResizable = <T extends Constructor<NightingaleBaseElement>>(
  superClass: T,
  options: {
    selector: string | null;
  } = {
    selector: null,
  }
) => {
  class WithResizable extends withDimensions(superClass) {
    #observer: any;
    #observedElement?: Element | null;

    @property({ type: Boolean })
    selector: string | null;

    @state()
    resizeWidth: boolean = true;
    @state()
    resizeHeight: boolean = true;

    constructor(...rest: any[]) {
      super(...rest);
      this.onResize = this.onResize.bind(this);
      this.listenForResize = this.listenForResize.bind(this);
      this.selector = options.selector;
    }
    attributeChangedCallback(
      name: string,
      oldValue: string | null,
      newValue: string | null
    ): void {
      if (name === "width") {
        this.resizeWidth = newValue === undefined || newValue === null;
      }
      if (name === "height") {
        this.resizeHeight = newValue === undefined || newValue === null;
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }

    updated() {
      this.#observedElement = this.selector
        ? this.querySelector(this.selector)
        : this?.children?.[0];
      this.listenForResize();
      super.connectedCallback();
    }
    disconnectedCallback() {
      if (this.#observer) {
        this.#observer.unobserve(this.#observedElement);
      }
      super.disconnectedCallback();
    }

    private onResize() {
      if (this.#observedElement) {
        const bounds = this.#observedElement.getBoundingClientRect();
        if (this.resizeWidth) this.width = bounds.width;
        if (this.resizeHeight) this.height = bounds.height;
      }
    }

    private listenForResize() {
      if (this.#observedElement) {
        this.#observer = new ResizeObserver(this.onResize);
        this.#observer.observe(this.#observedElement);
      }
    }
  }
  return WithResizable as T;
};

export default withResizable;
