# Préférences de notification

Tableau d'interrupteurs par événement et par canal.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card button switch; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Notifications01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Notifications01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
