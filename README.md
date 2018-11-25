# ui-menu

Webcomponents Main Menu.  
Creating accessible and feature rich menus is a tedious task. So here is a re-useable webcomponent menu to make your development fun again.  
It is accessible and mobile friendly by default and features sub-menus.

## Useage

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

Include the module:

```html
<script type="module" src="tjb-menu.js"></script>
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
<tjb-menu data-title="Main Menu">
  <span slot="logo"> My Company </span>

  <tjb-menu-item slot="menu-item">
    <a href="#/shop" slot="menu-item-link"> shop </a>
  </tjb-menu-item>

  <tjb-menu-item slot="menu-item">
    <a href="#/contact" slot="menu-item-link"> contact </a>
  </tjb-menu-item>

  <tjb-menu-item-sub slot="menu-item">
    <svg role="img" aria-labelledby="title" slot="menu-item-sub-toggle">
      <title>select language</title>
      <use role="presentation" xlink:href="#icon-world" />
    </svg>

    <tjb-menu-item slot="menu-item">
      <a href="#/english" slot="menu-item-link"> English </a>
    </tjb-menu-item>

    <tjb-menu-item slot="menu-item">
      <a href="#/german" slot="menu-item-link"> German (Deutsch) </a>
    </tjb-menu-item>
  </tjb-menu-item-sub>

  <tjb-menu-item slot="menu-item">
    <a href="#/auth" slot="menu-item-link"> login </a>
  </tjb-menu-item>

  <tjb-menu-item slot="menu-item">
    <a href="#/buy" slot="menu-item-link"> buy now </a>
  </tjb-menu-item>
</tjb-menu>
```

## Example

https://thibaultjanbeyer.github.io/ui-menu/

## Version

0.0.1
