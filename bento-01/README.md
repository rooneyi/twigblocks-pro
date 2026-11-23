# Grille bento

Cinq cases de tailles variées, chacune montre une vraie partie du produit en composants.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in badge button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Bento01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Bento01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
