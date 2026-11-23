# Envoi de fichiers

Zone de dépôt accessible au clavier, liste des fichiers avec progression et erreurs.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button progress; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/FileUpload01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:FileUpload01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
