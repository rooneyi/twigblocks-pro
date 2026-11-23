# Paramètres du compte

Formulaire de profil en lignes responsives et zone de suppression.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in card field input button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Settings01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Settings01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
