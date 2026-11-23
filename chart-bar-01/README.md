# Histogramme comparatif

Barres groupées sur deux périodes, avec légende, en SVG pur.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/ChartBar01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:ChartBar01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
