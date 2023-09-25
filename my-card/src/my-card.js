import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .card {
      max-width: 400px;
      margin: 0 auto;
      border: 1px solid #0c0b0b;
      background-color: #0c0b0b;
      padding: 16px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .card img {
      max-width: 100%;
      height: auto;
    }

    .card-content {
      flex: 1;
    }

    /* Style for the Title label */
    h2 {
      font-size: 24px;
      margin: -10px 0;
      /*background color and border */
      background-color: #f8471b; /* background color */
      color: #fff; /* Text color on the background */
      padding: 8px 16px;
      border-radius: 4px;
    }

    p {
      font-size: 16px;
      margin: 8px 0;
      color: #fff;
    }
    a.details-button {
      background-color: #ea5f0a;
      color: #fff;
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 4px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/MyCard.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('my-card', MyCard);
