import { Controller } from '@hotwired/stimulus';

/* Défilement horizontal par boutons pour une liste en scroll-snap. Le défilement au doigt ou au trackpad marche sans JavaScript. */
export default class extends Controller {
    static targets = ['track', 'prev', 'next'];

    connect() { this.trackTarget.addEventListener('scroll', this.#update, { passive: true }); this.#update(); }

    disconnect() { this.trackTarget.removeEventListener('scroll', this.#update); }

    next() { this.#go(1); }

    prev() { this.#go(-1); }

    #go(dir) {
        const item = this.trackTarget.firstElementChild;
        const step = item ? item.getBoundingClientRect().width + 16 : this.trackTarget.clientWidth * 0.8;
        this.trackTarget.scrollBy({ left: dir * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }

    #update = () => {
        const t = this.trackTarget;
        if (this.hasPrevTarget) this.prevTarget.disabled = t.scrollLeft < 4;
        if (this.hasNextTarget) this.nextTarget.disabled = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    };
}
