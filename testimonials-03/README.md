# Mur défilant

Deux lignes de témoignages qui défilent en sens opposés.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Testimonials03.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Testimonials03 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
