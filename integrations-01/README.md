# Intégrations

Grille d'intégrations avec icône, texte et lien vers la liste complète.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Integrations01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Integrations01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
