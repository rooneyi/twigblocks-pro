# FAQ en accordéon

Questions fréquentes en accordéon accessible au clavier (contrôleur Stimulus du kit).

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in accordion; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Faq01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Faq01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
