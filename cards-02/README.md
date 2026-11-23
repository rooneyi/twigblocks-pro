# Cartes à motifs

Chaque carte a son motif en en-tête : grille, losanges, hexagones, points.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Cards02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Cards02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- Le bloc gratuit `Pattern` (collection Ardoise) : copiez aussi `Pattern.html.twig`.
