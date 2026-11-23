import { Controller } from '@hotwired/stimulus';

/* Halo qui suit le pointeur sur les éléments .tb-spotlight à l'intérieur du contrôleur. */
export default class extends Controller {
    connect() {
        this.onMove = (e) => {
            const card = e.target.closest('.tb-spotlight');
            if (!card || !this.element.contains(card)) return;
            const r = card.getBoundingClientRect();
            card.style.setProperty('--tb-x', `${e.clientX - r.left}px`);
            card.style.setProperty('--tb-y', `${e.clientY - r.top}px`);
        };
        this.element.addEventListener('pointermove', this.onMove);
    }

    disconnect() {
        this.element.removeEventListener('pointermove', this.onMove);
    }
}
