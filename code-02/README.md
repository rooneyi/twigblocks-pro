# Terminal animé

Étapes à gauche, terminal dont les lignes apparaissent au défilement.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Code02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Code02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
