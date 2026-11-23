# Liste de démarrage

Étapes d'onboarding avec progression et mise en avant de la prochaine action.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card button progress; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Onboarding01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Onboarding01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
