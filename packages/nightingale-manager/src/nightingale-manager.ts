import { customElement, property, state } from "lit/decorators.js";
import NightingaleElement from "@nightingale-elements/nightingale-new-core";

@customElement("nightingale-manager")
class NightingaleManager extends NightingaleElement {
  @property({
    converter: {
      fromAttribute: (value): Map<string, null> | null => {
        if (!value) {
          return null;
        }
        const attributes = value.split(",");
        if (attributes.indexOf("type") !== -1)
          throw new Error("'type' can't be used as a protvista attribute");
        if (attributes.indexOf("value") !== -1)
          throw new Error("'value' can't be used as a protvista attribute");
        const mapToReturn = new Map(
          attributes
            .filter(
              (attr: string) =>
                !NightingaleManager.observedAttributes.includes(attr)
            )
            .map((attr: string) => [attr, null])
        );
        return mapToReturn;
      },
      toAttribute: (value: []) => {
        return value.join(",");
      },
    },
  })
  "reflected-attributes"?: Map<string, null>;

  @property({ type: Number })
  length?: number;

  @property({ type: Number })
  "display-start"?: number;

  @property({ type: Number })
  "display-end"?: number;

  @property()
  "highlight"?: [start: number, end: number][];

  @state()
  protvistaElements = new Set<HTMLElement>();

  @state()
  propertyValues = new Map<string, string>();

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this._changeListener as EventListener);
  }

  override willUpdate() {
    this.applyAttributes();
  }

  applyAttributes() {
    this.protvistaElements.forEach((element: HTMLElement) => {
      this["reflected-attributes"]?.forEach((value, type) => {
        if (value === false || value === null || value === undefined) {
          element.removeAttribute(type);
        } else {
          element.setAttribute(type, typeof value === "boolean" ? "" : value);
        }
      });
    });
  }

  register(element: NightingaleElement) {
    this.protvistaElements.add(element);
    this.applyAttributes();
  }

  unregister(element: NightingaleElement) {
    this.protvistaElements.delete(element);
  }

  applyProperties(forElementId: string) {
    if (forElementId) {
      const element = this.querySelector(`#${forElementId}`) as any;
      if (!element) {
        return;
      }
      this.propertyValues.forEach((value, type) => {
        element[type] = value;
      });
    } else {
      this.protvistaElements.forEach((element: any) => {
        if (!element) {
          return;
        }
        this.propertyValues.forEach((value, type) => {
          /* eslint-disable no-param-reassign */
          element[type] = value;
        });
      });
    }
  }

  isRegisteredAttribute(attributeName: string) {
    if (!this["reflected-attributes"]) {
      return false;
    }
    return (
      [...this["reflected-attributes"].keys()].includes(attributeName) ||
      NightingaleManager.observedAttributes.includes(attributeName)
    );
  }

  _changeListener(e: CustomEvent) {
    if (!e.detail) {
      return;
    }
    switch (e.detail.handler) {
      case "property":
        this.propertyValues.set(e.detail.type, e.detail.value);
        this.applyProperties(e.detail.for);
        break;
      default:
        if (this.isRegisteredAttribute(e.detail.type)) {
          this["reflected-attributes"]?.set(e.detail.type, e.detail.value);
        }
        Object.keys(e.detail).forEach((key) => {
          if (this.isRegisteredAttribute(key)) {
            this["reflected-attributes"]?.set(key, e.detail[key]);
          }
        });
        this.applyAttributes();
    }
  }
}

export default NightingaleManager;