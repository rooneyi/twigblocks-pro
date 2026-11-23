# Graphique en aire

Courbe en SVG pur avec dégradé, total et tendance. Aucune bibliothèque JavaScript, tableau accessible inclus.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card badge; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/ChartArea01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:ChartArea01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
