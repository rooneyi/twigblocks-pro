# Fiche entreprise

Liste libellé / valeur sur deux colonnes, avec pièces jointes.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Description01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Description01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
