# Landing SaaS claire

Page d'accueil complète : navigation, hero produit, logos, bento, intégrations, témoignages, tarifs, FAQ et pied de page.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button badge card input separator avatar accordion; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Pages/Landing01.html.twig` dans `templates/components/Pages/`, ainsi que les blocs qu’elle assemble (kits gratuit et Pro).

## Utilisation

```twig
<twig:Pages:Landing01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
