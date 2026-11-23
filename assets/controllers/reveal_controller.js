import { Controller } from '@hotwired/stimulus';

/* Fait apparaître les enfants [data-reveal] quand ils entrent à l'écran, un par un. */
export default class extends Controller {
    connect() {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
        const items = [...this.element.querySelectorAll('[data-reveal]')];
        items.forEach((el, i) => el.style.setProperty('--tb-i', String(i % 6)));
        this.element.classList.add('tb-reveal-ready');
        this.observer = new IntersectionObserver((entries) => {
            for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-visible'); this.observer.unobserve(e.target); }
        }, { rootMargin: '0px 0px -10% 0px' });
        items.forEach((el) => this.observer.observe(el));
    }

    disconnect() {
        this.observer?.disconnect();
    }
}
