# Témoignages

Trois citations avec avatar et initiales générées automatiquement.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Testimonials01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Testimonials01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
