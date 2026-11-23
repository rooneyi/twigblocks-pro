# Hero avec aperçu produit

Hero en deux colonnes avec capture d'e-mail et aperçu de l'interface construit en composants.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button input card badge separator; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Hero02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Hero02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
