# Liste d’articles

Liste compacte : date, titre, rubrique et avatars des auteurs.

## Installation

1. Aucun composant Shadcn n'est requis, seulement `symfony/ux-icons`.

2. Copiez `templates/components/Blocks/Blog02.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Blog02 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
