# Hero produit centré

Titre centré, grande capture sur un halo et bandeau de clients.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/HeroSecondary01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:HeroSecondary01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
