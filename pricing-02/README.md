# Tarifs mensuel / annuel

Bascule mensuel ou annuel avec prix animés et formule à bordure lumineuse.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button badge; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Pricing02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Pricing02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.

## Dépendances

- `effects.css` (à la racine du kit) importé après le CSS du kit Shadcn, et les contrôleurs Stimulus de `assets/controllers/` si le bloc en utilise.
