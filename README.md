# TwigBlocks Pro (privé)

Collection **Obsidienne** : les blocs et pages complètes vendus avec la licence Pro de TwigBlocks.
Dépôt **privé** : ne jamais le rendre public ni le forker publiquement. Licence commerciale, voir [LICENSE.md](LICENSE.md).

## Installer dans le site

Le site public est [rooneyi/twigblocks](https://github.com/rooneyi/twigblocks). Ce dépôt se clone à la place du kit :

```sh
cd twigblocks
git clone git@github.com:rooneyi/twigblocks-pro.git kits/twigblocks-pro
sh bin/build-assets.sh
```

`kits/twigblocks-pro/` est ignoré par le dépôt public : rien ne peut y être poussé par erreur.
Pour mettre à jour : `git -C kits/twigblocks-pro pull`.

## Contenu

- un dossier par bloc (`hero-02/`, `pricing-01/`…) au format recette du Symfony UX Toolkit (`manifest.json`, `templates/`, README) ;
- `assets/controllers/` : contrôleurs Stimulus des blocs animés ;
- `effects.css` : effets partagés ;
- `manifest.json` : description du kit.

Le catalogue (noms, catégories, aperçus) est dans `kits/catalog.json` du dépôt public.
