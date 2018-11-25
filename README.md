# tjb-menu

Webcomponents Main Menu.  
Creating accessible and feature rich menus is a tedious task. So here is a re-useable webcomponent menu to make your development fun again.  
It is accessible and mobile friendly by default and features sub-menus.

## Example

https://tjb-webcomponents.github.io/tjb-menu/

## Useage

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

Include the module:

```html
<script
  type="module"
  src="https://tjb-webcomponents.github.io/tjb-menu/tjb-menu.js"
></script>
```

- Use it:

Simplified:

```html
<tjb-menu data-title="Main Menu">
  <span slot="logo">[YOUR LOGO]</span>

  <tjb-menu-item slot="menu-item">
    <a slot="menu-item-link">[YOUR LINK]</a>
  </tjb-menu-item>

  <tjb-menu-item-sub slot="menu-item">
    <div slot="menu-item-sub-toggle">[YOUR SUB-MENU TRIGGER]</div>

    <tjb-menu-item slot="menu-item">
      <a slot="menu-item-link">[YOUR SUB-MENU LINK]</a>
    </tjb-menu-item>
  </tjb-menu-item-sub>
</tjb-menu>
```

- `tjb-menu` the parent
- `tjb-menu-item-sub` a submenu
- `tjb-menu-item` an item in the menu

Full example:

```html
<tjb-menu data-title="Main Menu" class="tjb-menu">
  <span slot="logo"> My Company </span>

  <tjb-menu-item slot="menu-item">
    <a href="#/shop" class="tjb-menu-link" slot="menu-item-link"> shop </a>
  </tjb-menu-item>

  <tjb-menu-item slot="menu-item">
    <a href="#/contact" class="tjb-menu-link" slot="menu-item-link">
      contact
    </a>
  </tjb-menu-item>

  <tjb-menu-item-sub slot="menu-item">
    <svg role="img" aria-labelledby="title" slot="menu-item-sub-toggle">
      <title>select language</title>
      <use role="presentation" xlink:href="#icon-world" />
    </svg>

    <tjb-menu-item slot="menu-item">
      <a href="#/english" class="tjb-menu-link" slot="menu-item-link">
        English
      </a>
    </tjb-menu-item>

    <tjb-menu-item slot="menu-item">
      <a href="#/german" class="tjb-menu-link" slot="menu-item-link">
        German (Deutsch)
      </a>
    </tjb-menu-item>
  </tjb-menu-item-sub>

  <tjb-menu-item slot="menu-item">
    <a href="#/auth" class="tjb-menu-link" slot="menu-item-link"> login </a>
  </tjb-menu-item>

  <tjb-menu-item slot="menu-item">
    <a href="#/buy" class="tjb-menu-link" slot="menu-item-link"> buy now </a>
  </tjb-menu-item>
</tjb-menu>
```

## Suggested global styling

```css
:root {
  --c-primary: #3555f5;
}

.tjb-menu {
  --tjb-menu-sub-bg: white;
  --tjb-menu-sub-b: 1px solid rgba(100, 100, 100, 0.1);
  --tjb-menu-sub-c: black;
  --tjb-menu-toggler-color: black;
  --tjb-menu-toggler-hover: var(--c-primary);
  --tjb-menu-mobile-bg: white;
  --tjb-menu-mobile-c: black;
  background: white;
  color: black;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  white-space: nowrap;
}

.tjb-menu-link {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px;
  display: inline-block;
}

.tjb-menu-link:focus,
.tjb-menu-link:hover,
.tjb-menu-link:active {
  fill: var(--primary);
  color: var(--primary);
}
```

.
