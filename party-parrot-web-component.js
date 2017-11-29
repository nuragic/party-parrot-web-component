let tmpl = document.createElement('template');

class PartyParrot extends HTMLElement {

  get hd() {
    return this.hasAttribute('hd');
  }

  set hd(val) {
    if (val) {
      this.setAttribute('hd', '');
    } else {
      this.removeAttribute('hd');
    }
  }

  constructor() {
    super();
    const alt = `${this.getAttribute('parrot') || ''} parrot`;
    const parrot = alt.replace(/\s/g, '');
    const src = `./parrots/${this.hd ? 'hd/' : ''}${parrot}.gif`;
    let shadowRoot = this.attachShadow({mode: 'open'});
    tmpl.innerHTML = `
      <style>
      :host {
        display: inline-block;
        width: 35px;
      }
      :host img {
        display: inline;
        width: 100%;
      }
      </style>
      <img src="${src}" alt="${alt}" />
      <slot></slot>
    `;
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

}

customElements.define('party-parrot', PartyParrot);
