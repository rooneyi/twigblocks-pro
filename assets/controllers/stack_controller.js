import { Controller } from '@hotwired/stimulus';

/* Pile de cartes : la carte du dessus change avec les flèches (boutons ou clavier). Les autres cartes restent lisibles par les lecteurs d'écran via la liste. */
export default class extends Controller {
    static targets = ['card', 'status'];

    connect() { this.index = 0; this.#render(); }

    next() { this.index = (this.index + 1) % this.cardTargets.length; this.#render(); }

    prev() { this.index = (this.index - 1 + this.cardTargets.length) % this.cardTargets.length; this.#render(); }

    #render() {
        const n = this.cardTargets.length;
        this.cardTargets.forEach((card, i) => {
            const depth = (i - this.index + n) % n;
            card.dataset.depth = Math.min(depth, 3);
            card.setAttribute('aria-hidden', String(depth !== 0));
            card.inert = depth !== 0;
        });
        if (this.hasStatusTarget) this.statusTarget.textContent = `${this.index + 1} / ${n}`;
    }
}
