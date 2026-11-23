# Tableau kanban

Colonnes de cartes avec étiquettes, échéances et avatars.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button badge avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Kanban01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Kanban01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
