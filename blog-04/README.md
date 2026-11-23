# Articles en cartes horizontales

Couverture à gauche, extrait long et auteurs à droite.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Blog04.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Blog04 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
