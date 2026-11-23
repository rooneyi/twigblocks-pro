# Portraits avec légende

Portraits verticaux, nom et rôle sur un dégradé.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Team05.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Team05 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
