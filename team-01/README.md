# Équipe

Grille de membres avec photo ou initiales générées si la photo manque.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Team01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Team01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
