# Consommation du forfait

Jauges d'utilisation avec alerte automatique au-delà de 80 %.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card button progress alert; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Usage01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Usage01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
