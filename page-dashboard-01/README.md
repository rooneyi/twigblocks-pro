# Tableau de bord complet

Application complète : barre latérale, en-tête, indicateurs, deux graphiques et tableau des factures.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button input avatar card badge table pagination; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Pages/Dashboard01.html.twig` dans `templates/components/Pages/`, ainsi que les blocs qu’elle assemble (kits gratuit et Pro).

## Utilisation

```twig
<twig:Pages:Dashboard01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
