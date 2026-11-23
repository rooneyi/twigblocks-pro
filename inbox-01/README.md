# Messagerie

Application mail en trois colonnes : dossiers, liste des messages, lecture et réponse.

## Installation

1. Installez les composants Shadcn utilisés par ce bloc :

```shell
for c in button input badge avatar; do php bin/console ux:install $c --kit=shadcn; done
```

2. Copiez `templates/components/Blocks/Inbox01.html.twig` dans `templates/components/Blocks/`.

## Utilisation

```twig
<twig:Blocks:Inbox01 />
```

Chaque texte est une prop : surchargez-la (`title="..."`) ou remplacez un `{% block %}` pour changer le contenu.
