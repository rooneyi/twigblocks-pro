import { Controller } from '@hotwired/stimulus';

/*
 * Fait défiler un nombre de 0 à sa valeur quand il devient visible.
 * Le HTML contient déjà la valeur finale : sans JavaScript ou avec "moins d'animations", elle s'affiche telle quelle.
 *   <span data-controller="counter" data-counter-to-value="1400" data-counter-suffix-value=" PME">1 400 PME</span>
 */
export default class extends Controller {
    static values = { to: Number, decimals: { type: Number, default: 0 }, prefix: String, suffix: String, duration: { type: Number, default: 1600 } };

    connect() {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
        this.final = this.element.textContent;
        this.format = new Intl.NumberFormat(document.documentElement.lang || undefined, { minimumFractionDigits: this.decimalsValue, maximumFractionDigits: this.decimalsValue });
        this.observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { this.observer.disconnect(); this.#run(); } }, { threshold: 0.4 });
        this.observer.observe(this.element);
    }

    disconnect() {
        this.observer?.disconnect();
        cancelAnimationFrame(this.frame);
    }

    #run() {
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / this.durationValue);
            const eased = 1 - Math.pow(1 - t, 3);
            this.element.textContent = this.prefixValue + this.format.format(this.toValue * eased) + this.suffixValue;
            if (t < 1) this.frame = requestAnimationFrame(tick); else this.element.textContent = this.final;
        };
        this.frame = requestAnimationFrame(tick);
    }
}
