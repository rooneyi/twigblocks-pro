# Cartes d’équipe

Cartes à motif hexagonal, bio, liens et carte de recrutement.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Team02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Team02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- Le bloc gratuit `Pattern` (collection Ardoise) : copiez aussi `Pattern.html.twig`.
- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
