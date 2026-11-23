# Section éditoriale

Texte long, citation mise en avant et chiffres clés : pour une page À propos ou un récit.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Content01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Content01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
