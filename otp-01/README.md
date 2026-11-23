# Code de vérification

Saisie d'un code à usage unique, collage et navigation au clavier gérés par le kit.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in input-otp button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Otp01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Otp01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
