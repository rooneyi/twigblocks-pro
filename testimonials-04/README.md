# Témoignages en grille

Un témoignage principal avec un chiffre clé et une grille à bordures fines.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Testimonials04.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Testimonials04 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- Le bloc gratuit `Pattern` (collection Ardoise) : copiez aussi `Pattern.html.twig`.
