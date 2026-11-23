import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['source', 'button'];
    static values = { copied: { type: String, default: 'Copié' } };

    connect() {
        this.initial = this.buttonTarget.textContent;
    }

    async copy() {
        try {
            await navigator.clipboard.writeText(this.sourceTarget.textContent);
            this.#flash(this.copiedValue);
        } catch {
            this.#flash('Ctrl+C');
        }
    }

    #flash(label) {
        this.buttonTarget.textContent = label;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => (this.buttonTarget.textContent = this.initial), 2000);
    }
}
