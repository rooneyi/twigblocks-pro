# Formulaire de contact

Formulaire complet avec coordonnées, construit avec les composants Field.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in field input button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Contact01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Contact01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
