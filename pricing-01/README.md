# Tarifs en trois formules

Formules pilotées par une seule prop, avec formule mise en avant.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card button badge; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Pricing01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Pricing01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
