# Calendrier mensuel

Vue mois calculée côté serveur, avec événements colorés et jour courant.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Calendar01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Calendar01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
