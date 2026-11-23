# Tableau de données

Liste avec recherche, statuts colorés, actions et pagination.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in table badge input button pagination; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Table01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Table01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
