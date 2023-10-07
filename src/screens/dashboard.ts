import styles from './styles.css';
import { addObserver, appState, dispatch } from '../store/index';
import { Attribute } from '../components/card/card';
import trips from '../services/trips';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		
	    if (this.shadowRoot) {
		  const tripData = trips.get();
	  
		  const style = this.ownerDocument.createElement("style");
		  style.innerHTML = styles;
		  this.shadowRoot?.appendChild(style);
		  
		  if (Array.isArray(tripData)) {
			tripData.forEach((imageData) => {
			  const card = this.ownerDocument.createElement('app-card');
			  card.setAttribute('img', imageData.img);
			  this.shadowRoot?.appendChild(card);
			  
			});
		  }
		}

	  }
}

customElements.define('app-dashboard', Dashboard);
