import WebComponent from 'https://thibaultjanbeyer.github.io/tjb-WebComponent/tjb-wc.min.js'
import html from 'https://thibaultjanbeyer.github.io/html-template-string/html.min.js'

class tjbMenu extends WebComponent {
  CSS() {
    return html `<style>
      :host {
        --tjb-menu-sub-bg: white;
        --tjb-menu-sub-b: 1px solid rgba(100, 100, 100, 0.5);
        --tjb-menu-sub-c: black;
        --tjb-menu-toggler-hover: blue;
        --tjb-menu-toggler-color: white;
        --tjb-menu-mobile-bg: lightgrey;
        --tjb-menu-mobile-c: inherit;
      }

      .menu {
        align-items: center;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        position: relative;
      }

      .visuallyhidden {
        border: 0;
        clip: rect(0, 0, 0, 0);
        margin: -1px;
        padding: 0;
        position: absolute;
        height: 1px;
        overflow: hidden;
        width: 1px;
      }

      /* Functionality */
      .menu__checkbox {
        opacity: 0;
      }

      .menu__checkbox:checked ~ .menu__underlay,
      .menu__checkbox:checked ~ .menu__container {
        transform: translateX(0);
      }

      .menu__toggle:hover,
      .menu__toggle:active,
      .menu__checkbox:focus ~ .menu__toggle {
        border-color: var(--tjb-menu-toggler-hover);
      }
      .menu__toggle:hover::before,
      .menu__toggle:hover::after,
      .menu__toggle:active::before,
      .menu__toggle:active::after,
      .menu__checkbox:focus ~ .menu__toggle::before,
      .menu__checkbox:focus ~ .menu__toggle::after {
        background-color: var(--tjb-menu-toggler-hover);
      }

      .menu__checkbox:checked ~ .menu__toggle {
        border-width: 0;
      }
      .menu__checkbox:checked ~ .menu__toggle::before {
        transform: rotate(45deg);
      }
      .menu__checkbox:checked ~ .menu__toggle::after {
        transform: rotate(-45deg);
      }

      .menu__toggle {
        border-bottom: 3px solid var(--tjb-menu-toggler-color);
        border-top: 3px solid var(--tjb-menu-toggler-color);
        box-sizing: border-box;
        cursor: pointer;
        height: 20px;
        position: absolute;
        right: 0;
        top: -2px;
        transition: border-width 250ms ease-in-out;
        width: 25px;
        z-index: 1001;
      }

      .menu__toggle::after,
      .menu__toggle::before {
        background-color: var(--tjb-menu-toggler-color);
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: calc(50% - 1.5px);
        transition: transform 250ms ease-in-out;
        width: 100%;
      }

      .menu__container {
        background-color: var(--tjb-menu-mobile-bg);
        color: var(--tjb-menu-mobile-c);
        height: 100vh;
        position: fixed;
        transform: translateX(111%);
        transition: transform 250ms ease-in-out;
        width: 250px;
        text-align: center;
        z-index: 1000;
        right: -5px;
        top: 0;
      }

      .menu__underlay {
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.7;
        width: 100%;
        height: 100%;
        transform: translateX(100%);
        transition: transform 300ms ease-in-out;
      }

      .menu__ul {
        list-style: none;
        margin: 20px;
        padding: 0;
      }

      @media screen and (min-width: 600px) {
        .menu__checkbox {
          display: none;
        }

        .menu__toggle {
          display: none;
        }

        .menu__container {
          background-color: inherit;
          border: 0;
          height: auto;
          position: inherit;
          transform: translateX(0);
          width: auto;
        }

        .menu__underlay {
          display: none;
        }

        .menu__ul {
          margin: 0;
          text-align: right;
        }
      }
    </style>`;
  }

  HTML() {
    this.checkboxNode = html `
    <input
      type="checkbox"
      id="menu-toggler"
      aria-hidden="true"
      class="menu__checkbox visuallyhidden"
    />
    `;
    return html `
      <div class="menu">
        <slot name="logo">&lt;logo&gt;</slot>

        <nav role="navigation" aria-labelledby="menu-title">
          <h2 id="menu-title" class="visuallyhidden">Main Menu</h2>

          <!-- Mobile-Toggle -->
          ${this.checkboxNode}
          <label
            class="menu__toggle"
            aria-hidden="true"
            for="menu-toggler"
          ></label>

          <div class="menu__underlay" onclick="${e => this.handleUnderlayClick()}"></div>
          <div class="menu__container">
            <ul class="menu__ul" id="menu-items">
              <slot name="menu-item"></slot>
            </ul>
          </div>
        </nav>
      </div>
    `;
  }

  handleUnderlayClick() {
    this.checkboxNode.checked = false
  }
}

class tjbMenuItemSub extends WebComponent {
  CSS() {
    return html `
    <style>
        .visuallyhidden {
          border: 0;
          clip: rect(0, 0, 0, 0);
          margin: -1px;
          padding: 0;
          position: absolute;
          height: 1px;
          overflow: hidden;
          width: 1px;
        }

        .menu__sub-checkbox:checked ~ .menu__sub {
          display: block;
        }
        .menu__sub-checkbox.checked ~ .menu__sub {
          opacity: 1;
        }

        .menu__sub-checkbox:focus ~ .menu__sub-toggle svg,
        .menu__sub-checkbox:focus ~ .menu__sub-toggle {
          color: var(--tjb-menu-toggler-hover);
          fill: var(--tjb-menu-toggler-hover);
        }

        .menu__sub {
          display: none;
          list-style: none;
          margin: 0;
          opacity: 0;
          padding-left: 0;
          transition: opacity 200ms ease-in-out;
        }

        .menu__sub {
          background: var(--tjb-menu-sub-bg);
          color: var(--tjb-menu-sub-c);
          border: var(--tjb-menu-sub-b);
        }

        @media screen and (min-width: 600px) {
          .menu__li {
            position: relative;
            display: inline-block;
          }

          .menu__sub {
            background: var(--tjb-menu-sub-bg);
            position: absolute;
            right: 0;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
          }

          .menu__sub-toggle {
            position: relative;
          }
        }

        .menu__sub-li {
          --modifier-display: block;
          --modifier-padding: 5px 20px 10px;
        }
      </style>
      `;
  }

  HTML() {
    this.checkboxNode = html `
      <input
        type="checkbox"
        id="menu__sub-toggle"
        class="menu__sub-checkbox visuallyhidden"
        onchange="${e => setTimeout(() => this.handleChange(), 100)}"
      />
    `;

    this.selectorNode = html `
      <slot
        name="menu-item"
        class="menu__sub-li"
      ></slot>
    `;

    return html `
      <li class="menu__li">

        ${this.checkboxNode}

        <label for="menu__sub-toggle" class="menu__sub-toggle">
          <slot name="menu-item-sub-toggle"></slot>
        </label>

        <ul class="menu__sub">
          ${this.selectorNode}
        </ul>
      </li>
    `;
  }

  handleCheck() {
    this.checkboxNode.classList.add("checked");
    setTimeout(() => this.selectorNode.focus());
    document.addEventListener("click", this.handleUnCheck);
  }

  handleUnCheck() {
    this.checkboxNode.classList.remove("checked");
    setTimeout(() => this.checkboxNode.checked = false);
    document.removeEventListener("click", this.handleUnCheck);
  }

  handleChange() {
    if (this.checkboxNode.checked) this.handleCheck();
    else this.handleUnCheck();
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleUnCheck = this.handleUnCheck.bind(this);
  }
}

class tjbMenuItem extends WebComponent {
  CSS() {
    return html `
      <style>
        @media screen and (min-width: 600px) {
          .menu__li {
            display: inline-block;
            padding: 0 10px;
          }

          .menu__li:first-child {
            padding-left: 0;
          }

          .menu__li:last-child {
            padding-right: 0;
          }

          .menu__li {
            display: var(--modifier-display) !important;
            padding: var(--modifier-padding) !important;
          }
        }
      </style>
    `;
  }

  HTML() {
    return html `
      <li class="menu__li">
        <slot name="menu-item-link"></slot>
      </li>
    `;
  }
}

customElements.define("tjb-menu-item", tjbMenuItem);
customElements.define("tjb-menu-item-sub", tjbMenuItemSub);
customElements.define("tjb-menu", tjbMenu);
