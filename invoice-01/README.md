# Facture

Facture imprimable avec calcul des totaux HT, TVA et TTC à partir des lignes.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Invoice01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Invoice01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
