# Équipe en liste

Liste avec rôle et ville, la ligne survolée se met en avant.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Team03.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Team03 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
