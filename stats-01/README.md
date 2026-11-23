# Indicateurs clés

Quatre cartes KPI avec tendance colorée selon que la hausse est bonne ou non.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card badge; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Stats01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Stats01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
