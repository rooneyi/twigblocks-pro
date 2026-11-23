# Landing sombre éditoriale

Thème sombre, hero avec indicateurs, section récit, équipe et newsletter.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button badge card input separator; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Pages/Landing02.html.twig` dans `templates/components/Pages/`, ainsi que les blocs qu’elle assemble (kits gratuit et Pro).

## Utilisation

```twig
<twig:Pages:Landing02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
