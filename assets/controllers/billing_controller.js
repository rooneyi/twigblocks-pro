import { Controller } from '@hotwired/stimulus';

/*
 * Bascule mensuel / annuel des grilles de tarifs.
 * Chaque prix porte data-monthly et data-yearly ; le bouton est un role="switch".
 */
export default class extends Controller {
    static targets = ['switch', 'price', 'period', 'note'];

    toggle() {
        const yearly = this.switchTarget.getAttribute('aria-checked') !== 'true';
        this.switchTarget.setAttribute('aria-checked', String(yearly));
        this.element.dataset.billing = yearly ? 'yearly' : 'monthly';
        this.priceTargets.forEach((el) => {
            el.animate?.([{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }], { duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 280, easing: 'ease-out' });
            el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
        });
        this.periodTargets.forEach((el) => (el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly));
        this.noteTargets.forEach((el) => (el.hidden = !yearly));
    }
}
