import { Controller } from '@hotwired/stimulus';

/* Onglets accessibles (motif WAI-ARIA Tabs) : clic, flèches gauche/droite, Début/Fin. */
export default class extends Controller {
    static targets = ['tab', 'panel'];

    connect() {
        this.element.addEventListener('keydown', this.#onKeydown);
    }

    disconnect() {
        this.element.removeEventListener('keydown', this.#onKeydown);
    }

    select(event) {
        this.#activate(this.tabTargets.indexOf(event.currentTarget));
    }

    #activate(index) {
        this.tabTargets.forEach((tab, i) => {
            const active = i === index;
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
            this.panelTargets[i].hidden = !active;
        });
    }

    #onKeydown = (event) => {
        const current = this.tabTargets.indexOf(document.activeElement);
        if (current === -1) return;
        const last = this.tabTargets.length - 1;
        const next = { ArrowRight: current === last ? 0 : current + 1, ArrowLeft: current === 0 ? last : current - 1, Home: 0, End: last }[event.key];
        if (next === undefined) return;
        event.preventDefault();
        this.#activate(next);
        this.tabTargets[next].focus();
    };
}
