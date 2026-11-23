# Hero avec portraits

Grand titre à gauche, mosaïque de portraits et note clients.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/HeroSecondary02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:HeroSecondary02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
