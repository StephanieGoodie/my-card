import { LitElement, html, css } from 'lit';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
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

  // eslint-disable-next-line class-methods-use-this
  randomColor() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let color = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * (numbers.length + letters.length));
      color += index < numbers.length ? numbers[index] : letters[index - numbers.length];
    }
    return color;
  }

  handleClick() {
    const card = this.shadowRoot.querySelector('.card');
    // Check the current background color
    // const currentColor = card.style.backgroundColor;
    // Change background color
    card.style.backgroundColor = `#${  this.randomColor()}`;
  }

  handleHeadingChange() {
    const title = this.shadowRoot.querySelector('h2');
    title.innerText = 'Super Pod 2 Realty';
  }

  handleDeleteCard() {
    const cards = this.shadowRoot.querySelectorAll('.card');
    // Check if there are cards to delete
    if (cards.length > 1) {
      const lastCard = cards[cards.length - 1];
      lastCard.parentNode.removeChild(lastCard);
    }
  }

  handleToggleDescription() {
    const description = this.shadowRoot.querySelector('#description');
    const original = this.originalDescription || '';
    // Toggle the visibility of the description
    if (description.innerText === 'none' || description.innerText === '') {
      description.innerText = original; // Show the description
    } else {
      this.originalDescription = description.innerText; // Save the original description
      description.innerText = ''; // Hide the description
    }
  }
  
  duplicateCard() {
    const clone = this.shadowRoot.querySelector('.card').cloneNode(true);
    this.shadowRoot.appendChild(clone); // Append the cloned card to the shadow root
  }
  

  render() {
    return html`
      <main>
        <div class="card">
          <img alt="real estate logo" src="https://media.istockphoto.com/id/1369053959/vector/house.jpg?s=612x612&w=0&k=20&c=iA7YgnbjMT89OD8WDtINPoD6p4-sY-GVp1Tt0YdeqxA=">
          <div class="card-content"> 
            <h2>Two Pod Realty</h2> 
            <p id="description">Real Estate Company Focused on delivering the best properties in the State College Area</p> 
            <button class="details-button" @click="${this.handleToggleDescription}">Details</button>
        </div> 
        </div> 
        
        <button id="duplicatebtn" @click="${this.duplicateCard}">Duplicator</button>
      <button id="colorBtn" @click="${this.handleClick}">BGColorChanger</button>
      <button id="Headingbtn" @click="${this.handleHeadingChange}">HeadingChanger</button>
      <button id="dltbtn" @click="${this.handleDeleteCard}">DeleteCard</button>
  </main>`;
  }
}

customElements.define('my-card', MyCard);
