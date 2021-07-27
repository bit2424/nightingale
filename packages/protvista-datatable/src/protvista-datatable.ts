import {
  LitElement,
  html,
  TemplateResult,
  CSSResult,
  PropertyDeclarations,
  css,
} from "lit-element";
import { ScrollFilter } from "protvista-utils";

import { isOutside, isWithinRange } from "./utils";

import { ProtvistaManager } from "./types/manager";

import lightDOMstyles from "./styles";

class ProtvistaDatatable extends LitElement {
  private height: number;

  private columns: NodeListOf<HTMLTableHeaderCellElement>;

  private rows: NodeListOf<HTMLTableRowElement>;

  // TODO implement filters
  // private filterMap: Map<string, Set<string>>;

  private mutationObserver: MutationObserver;

  // This will eventually be an array of tuples
  private highlight: [start: number, end: number];

  private displayStart?: number;

  private displayEnd?: number;

  private selectedid?: string;

  private visibleChildren: string[];

  private noScrollToRow: boolean;

  private noDeselect: boolean;

  private scrollFilter: any; // to replace with type definition from utils when exists

  private wheelListener: (e: WheelEvent) => any;

  private manager: ProtvistaManager;

  static get is(): string {
    return "protvista-datatable";
  }

  constructor() {
    super();
    this.height = 25;
    this.visibleChildren = [];
    this.noScrollToRow = false;
    this.noDeselect = false;
    this.scrollFilter = new ScrollFilter(this);
    this.wheelListener = (event) => this.scrollFilter.wheel(event);
    this.eventHandler = this.eventHandler.bind(this);
  }

  connectedCallback(): void {
    super.connectedCallback();

    // The content of the table is dynamically set by the consumer
    // so we need to lookout for changes
    this.mutationObserver = new MutationObserver(() => {
      this.init();
    });

    // Observe the element itself as the slot can't be
    this.mutationObserver.observe(this, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    // Add style to light DOM to style slot content
    const styleTag = document.createElement("style");
    styleTag.innerHTML = lightDOMstyles.toString();
    document.querySelector("head").appendChild(styleTag);

    if (this.closest("protvista-manager")) {
      this.manager = this.closest("protvista-manager");
      this.manager.register(this);
    }
    if (!this.noDeselect) {
      document.addEventListener("click", this.eventHandler);
    }
    // this makes sure the protvista-zoomable event listener doesn't reset
    this.classList.add("feature");

    if (this.hasAttribute("filter-scroll")) {
      document.addEventListener("wheel", this.wheelListener, { capture: true });
    }
    this.init();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.manager) {
      this.manager.unregister(this);
    }
    document.removeEventListener("click", this.eventHandler);
    document.removeEventListener("wheel", this.wheelListener);
    this.mutationObserver.disconnect();
  }

  init(): void {
    this.columns =
      this.querySelectorAll<HTMLTableHeaderCellElement>("table thead th");
    // Add blank column to header for (+/-) if not there alread
    if (!this.querySelector(".pd-group-column-header")) {
      // Can't use insertCell as "th"
      const additionalTH = document.createElement("th");
      additionalTH.classList.add("pd-group-column-header");
      const headerTR =
        this.querySelector<HTMLTableRowElement>("table thead tr");
      headerTR.insertBefore(additionalTH, headerTR.firstChild);
    }
    this.rows = this.querySelectorAll<HTMLTableRowElement>("table tbody tr");
    this.rows.forEach((row) => {
      // Add extra (+/-) cell - only if it hasn't got it already!!!
      if (!row.dataset.groupFor && !row.querySelector(".pd-group-trigger")) {
        const plusMinusCell = row.insertCell(0);
        plusMinusCell.classList.add("pd-group-trigger");
        if (this.querySelector("[data-group-for]")) {
          const plusMinusButton = document.createElement("button");
          plusMinusButton.dataset.triggerId = row.dataset.id;
          plusMinusCell.appendChild(plusMinusButton);
          // Add row click handler
          plusMinusButton.addEventListener("click", (e) =>
            this.handleGroupToggle(e)
          );
        }
      }
      // Add row click handler
      row.addEventListener("click", (e) => this.handleClick(e, row));
    });
    this.updateRowStyling();

    // this.parseDataForFilters();
  }

  // TODO implement filters
  // parseDataForFilters(): void {
  //   // Initialise map by looking at Column headers
  //   const filterMap = parseColumnFilters(this.columns);

  //   // Populate map with values
  //   this.rows.forEach((row) => {
  //     const tableCells = row.childNodes as NodeListOf<HTMLTableDataCellElement>;
  //     tableCells.forEach((cell) => {
  //       if (cell.dataset.filter) {
  //         const filterSet = filterMap.get(cell.dataset.filter);
  //         filterSet.add(cell.innerHTML);
  //       }
  //     });
  //   });
  //   this.filterMap = filterMap;
  // }

  eventHandler(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest("protvista-datatable") && !target.closest(".feature")) {
      this.selectedid = null;
      this.highlight = null;
    }
  }

  static get properties(): PropertyDeclarations {
    return {
      highlight: {
        converter: (value: string) => {
          if (value && value !== "null") {
            try {
              const splitArray = value.split(":").map((d) => Number(d));
              if (splitArray.length !== 2) {
                throw new Error(
                  "Highlight should be only 2 values separated by ':'."
                );
              }
              return [splitArray[0], splitArray[1]];
            } catch (e) {
              console.error("Invalid highlight coordinates:", e);
            }
          }
          return null;
        },
      },
      height: { type: Number },
      displayStart: { type: Number },
      displayEnd: { type: Number },
      visibleChildren: { type: Array },
      selectedid: { type: String },
      noScrollToRow: { type: Boolean },
      noDeselect: { type: Boolean },
    };
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }
      .protvista-datatable-container {
        overflow-y: auto;
        // Note: overflow-x was set to 'hidden' but changing
        // to 'auto' doesn't seem to be an issue.
        overflow-x: auto;
      }

      :host([scrollable="true"]) .protvista-datatable-container {
        overflow-y: auto;
        will-change: scroll;
      }

      :host([scrollable="false"]) .protvista-datatable-container {
        overflow-y: hidden;
      }
    `;
  }

  handleGroupToggle(e: MouseEvent): void {
    const { triggerId } = (e.target as HTMLButtonElement).dataset;
    if (this.visibleChildren.includes(triggerId)) {
      this.visibleChildren = this.visibleChildren.filter(
        (childId) => childId !== triggerId
      );
      (e.target as HTMLButtonElement).classList.remove(
        "pd-group-trigger__expanded"
      );
    } else {
      this.visibleChildren = [...this.visibleChildren, triggerId];
      (e.target as HTMLButtonElement).classList.add(
        "pd-group-trigger__expanded"
      );
    }
  }

  handleClick(e: MouseEvent, row: HTMLTableRowElement): void {
    // Don't select transparent row
    if (row.classList.contains("transparent")) {
      return;
    }
    const { id, start, end } = row.dataset;
    this.selectedid = id;
    const detail: { [key: string]: string } = {};
    if (start && end) detail.highlight = `${start}:${end}`;
    if (this.selectedid) detail.selectedid = this.selectedid;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail,
        bubbles: true,
        cancelable: true,
      })
    );
  }

  updateRowStyling(): void {
    let oddOrEvenCount = 0;
    this.rows?.forEach((row) => {
      // Only increment if non grouped row
      if (!row.dataset.groupFor) {
        oddOrEvenCount++;
      }
      const { start, end } = row.dataset;
      row.classList.add(oddOrEvenCount % 2 === 0 ? "even" : "odd");
      // Is the row selected?
      if (
        this.selectedid &&
        (this.selectedid === row.dataset.id ||
          row.dataset.groupFor === this.selectedid)
      ) {
        row.classList.add("active");
      } else {
        // Note: if too expensive, check before
        row.classList.remove("active");
      }
      // Is the row not within ProtVista track range?
      if (
        isOutside(
          this.displayStart,
          this.displayEnd,
          Number(start),
          Number(end)
        )
      ) {
        row.classList.add("transparent");
      } else {
        // Note: if too expensive, check before
        row.classList.remove("transparent");
      }
      // Is the row part of the selected range?
      if (
        this.highlight &&
        isWithinRange(
          this.highlight[0],
          this.highlight[1],
          Number(start),
          Number(end)
        )
      ) {
        row.classList.add("overlapped");
      } else {
        row.classList.remove("overlapped");
      }

      // Handle show/hide groups
      if (row.dataset.groupFor) {
        const collSpan = this.columns.length + 1; // Add 1 for the  +/- button
        // eslint-disable-next-line no-param-reassign
        row.cells[0].colSpan = collSpan - row.cells.length + 1; // Add 1 for column
        if (this.visibleChildren.includes(row.dataset.groupFor)) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      }
    });
  }

  scrollIntoView(): void {
    if (!this.selectedid) {
      return;
    }
    const element = this.querySelector(`[data-id="${this.selectedid}"]`);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  render(): TemplateResult {
    return html`
      <div
        class="protvista-datatable-container"
        style="height:${this.height}rem"
      >
        <slot></slot>
      </div>
    `;
  }

  updated(): void {
    this.updateRowStyling();
    if (!this.noScrollToRow) {
      this.scrollIntoView();
    }
  }
}

export default ProtvistaDatatable;
