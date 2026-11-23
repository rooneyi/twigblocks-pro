# Compteurs animés

Chiffres qui défilent jusqu’à leur valeur quand ils apparaissent.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Stats02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Stats02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- Le bloc gratuit `Pattern` (collection Ardoise) : copiez aussi `Pattern.html.twig`.
- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
