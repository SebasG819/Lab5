import styles from './styles.css';
import { dispatch } from '../../store/index';
import { TopImagesActions} from '../../types/store';
import { changeTopimage } from '../../store/actions';

export enum Attribute {
	"img" = "img",
}

export default class Card extends HTMLElement {
	img?: string;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			img: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, _ : unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();

		const button = this.shadowRoot?.querySelector('button');

		button?.addEventListener('click', () => {
			console.log('Traer imagen');
			const nuevaImagenSuperior = 'https://fmdataba.com/images/p/147073.png'; 
			dispatch({
			  action: TopImagesActions.TOPIMAGES, 
			  payload: nuevaImagenSuperior,
			});
		  });
		}

	mount() {
		this.render();
	}

	render() {
		const style = this.ownerDocument.createElement("style");
		style.innerHTML = styles;
		this.shadowRoot?.appendChild(style);
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="../card/styles.css">
		<section>
		<button><img src="${this.img}"></button>
		</section>	
        `;
	}
}

customElements.define('app-card', Card);
