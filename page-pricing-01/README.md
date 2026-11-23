# Page tarifs

Formules, logos de réassurance, FAQ dédiée à la facturation et appel à l'action.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button badge card separator accordion; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Pages/Pricing01.html.twig` dans `templates/components/Pages/`, ainsi que les blocs qu’elle assemble (kits gratuit et Pro).

## Utilisation

```twig
<twig:Pages:Pricing01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
