# Logos en défilement

Bande de logos qui défile en continu, pause au survol.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/LogoCloud02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:LogoCloud02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
