import { Controller } from '@hotwired/stimulus';

/*
 * Coloration syntaxique légère pour les blocs de démonstration de code (Twig, PHP, JS, YAML, shell).
 * Le texte reste dans le HTML : sans JavaScript, le code s'affiche simplement sans couleurs.
 * Couleurs : classes tb-tok-* définies dans effects.css (suivent le thème clair ou sombre).
 */
const RULES = [
    ['comment', /(\{#[\s\S]*?#\}|\/\/[^\n]*|#(?![\[{])[^\n]*|\/\*[\s\S]*?\*\/)/y],
    ['string', /('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)/y],
    ['delim', /(\{\{-?|-?\}\}|\{%-?|-?%\}|<\?php|<\/?twig:[\w:]+|\/?>)/y],
    ['keyword', /\b(use|namespace|class|final|readonly|public|private|protected|function|return|new|static|extends|import|export|default|const|let|await|async|if|else|for|endfor|in|set|props|block|endblock|extends|include|true|false|null)\b/y],
    ['var', /(\$[A-Za-z_]\w*|@[\w\\]+|#\[[^\]]*\])/y],
    ['number', /\b\d[\d_.]*\b/y],
    ['func', /\b[A-Za-z_]\w*(?=\()/y],
    ['prompt', /^\$ (?=\S)/my],
];

export default class extends Controller {
    connect() {
        for (const el of this.element.querySelectorAll('code[data-lang]')) el.innerHTML = this.#highlight(el.textContent);
    }

    #highlight(src) {
        let out = '', i = 0, plain = '';
        const flush = () => { out += this.#esc(plain); plain = ''; };
        while (i < src.length) {
            let hit = null;
            for (const [type, re] of RULES) {
                re.lastIndex = i;
                const m = re.exec(src);
                if (m && m[0].length) { hit = [type, m[0]]; break; }
            }
            if (hit) { flush(); out += `<span class="tb-tok-${hit[0]}">${this.#esc(hit[1])}</span>`; i += hit[1].length; } else { plain += src[i++]; }
        }
        flush();
        return out;
    }

    #esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
}
