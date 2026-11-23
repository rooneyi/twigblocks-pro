import { Controller } from '@hotwired/stimulus';

/* Accordéon exclusif lié à des visuels : ouvrir un élément affiche l'image correspondante. */
export default class extends Controller {
    static targets = ['item', 'panel'];

    connect() { this.#show(Math.max(0, this.itemTargets.findIndex((d) => d.open))); }

    toggle(event) {
        const i = this.itemTargets.indexOf(event.currentTarget);
        if (!event.currentTarget.open) { if (!this.itemTargets.some((d) => d.open)) event.currentTarget.open = true; return; }
        this.itemTargets.forEach((d, j) => { if (j !== i) d.open = false; });
        this.#show(i);
    }

    #show(i) { this.panelTargets.forEach((p, j) => p.classList.toggle('is-active', j === i)); }
}
