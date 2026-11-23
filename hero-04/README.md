# Hero à hexagones

Motif hexagonal et notifications qui flottent à côté du titre.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Hero04.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Hero04 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- Le bloc gratuit `Pattern` (collection Ardoise) : copiez aussi `Pattern.html.twig`.
- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
