# Ironsmith Compendiums for Ironsworn

![GitHub all releases](https://img.shields.io/github/downloads/jendave/ironsmith-compendiums/total)
[![Latest Version](https://img.shields.io/github/v/release/jendave/ironsmith-compendiums?display_name=tag&sort=semver&label=Latest%20Version)](https://github.com/jendave/ironsmith-compendiums/releases/latest)
![Foundry Version](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjendave%2Fironsmith-compendiums%2Fmain%2Fmodule.json)
[![License](https://img.shields.io/github/license/jendave/ironsmith-compendiums)](LICENSE)

## About

A FoundryVTT compendium of the Ironsmith supplements by [Eric Bright](https://preview.drivethrurpg.com/en/browse?keyword=eric%20bright) for [Ironsworn](https://www.ironswornrpg.com/).

## Contact

* [Ironsworn/Starforged Discord Server - FoundryVTT Channel](https://discord.com/channels/437120373436186625/867434336201605160)
* [GitHub Repository](https://github.com/jendave/ironsmith-compendiums)
* [Itch.io](https://jendave.itch.io/)

## Features and Notes

* Oracles, Assets, Moves, Site/Delve Themes, Domains and Foes from the PDFs are included.
  * [Ironsmith](https://preview.drivethrurpg.com/en/product/351813/ironsmith)
  * [Ironsmith Expanded Oracles](https://preview.drivethrurpg.com/en/product/333665/Ironsmith-Expanded-Oracles)
  * [Ironsmith Japanese Flavor Pack](https://preview.drivethrurpg.com/en/product/372140/ironsmith-japanese-mythology-flavor-pack-softcover)
  * [Ironsmith Indian Flavor Pack](https://preview.drivethrurpg.com/en/product/374967/ironsmith-indian-hindu-mythology-flavor-pack-softcover)
  * [Ironsmith African Flavor Pack](https://preview.drivethrurpg.com/en/product/374198/ironsmith-african-mythology-flavor-pack-softcover)
  * [Ironsmith South American Flavor Pack](https://preview.drivethrurpg.com/en/product/374202/ironsmith-south-american-mythology-flavor-pack-softcover)
  * [Ironsmith Norse Flavor Pack](https://preview.drivethrurpg.com/en/product/372161/ironsmith-norse-mythology-flavor-pack-softcover)
* Tables that are copies of the Ironsworn official tables are included if they are part of Ironsmith 1-2, 3-4, 5-6 array.
* Tables that are simply copies of official Ironsworn tables without the array are not included since they would be redundant with the standard Ironsworn System tables.

## Module Installation

To install the module, search for `Ironsmith` or `Ironsworn` in the `Add-On Modules` tab of of the Foundry VTT game setup screen. Then click on `Install`.

Or use this URL and click on `Install`:

```bash
https://github.com/jendave/ironsmith-compendiums/releases/latest/download/module.json
```

## Tabletop Integration

### Oracles

By default, the Oracles will be integrated into the Oracle Tree in the Character Sheet.

![Character Sheet - Oracles Tree](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/oracle-tree-character-sheet.jpg?raw=true)

If this is not desired, then uncheck the `Enable Oracles in Default Tree` in `Configure Settings` game settings.

![Module Game Settings](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/module-game-settings.jpg?raw=true)

The Oracles can also be added to the character sheet by using the `Custom Folders` method below.

Macros for Dice rolling can be found in the `Ironsmith Expanded Oracles Macros` compendium. Drag and drop any you need into the macro toolbar.

### (Optional Installation) Use Custom Folders to add Character Sheet Oracles

* If integrating the Ironsmith Oracles directly into the default Oracle Tree if not desired, then use this method to add the Ironsmith Oracles.
* If it does not already exist, create a `Custom Oracles` folder in `Rollable Tables` tab called:
  * `Custom Oracles` - EN
  * `Oráculos personalizados` - ES
  * `Oracles personnalisés` - FR
  * `Własne Wyrocznie` - PL
  * `Свои оракулы` - RU

Open the `Ironsmith Expanded Oracles` or `Pack Oracles` compendiums and copy the folders into the `Rollable Tables` `Custom Oracles` folder.

![Rollable Tables - Custom Oracles](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/custom-oracles-rollable-tables.jpg?raw=true)

The Oracles will be available in the Character sheet under `Custom Oracles`.

![Character Sheet - Custom Oracles](https://github.com/jendave/ironsmith-compendiums/blob/main//docs/custom-oracles-character-sheet.jpg?raw=true)

### Site Themes and Domains

Copy the desired themes and domains from the Ironsmith Site compendiums into the `Items` tab in FoundryVTT.

### Foes

Copy the desired foes from the `Ironsmith Foes` or `Pack Foes` compendiums into the `Actors` tab in FoundryVTT.

### Assets and Moves

* Use the following method to integrate the `Ironsmith Assets` into the character sheet.
  * Create a `Custom Assets` folder in the `Items` tab called:
    * `Custom Assets` - EN
    * `Recursos Personalizados` - ES
    * `Ressources personnalisées` - FR
    * `Własne Aspekty` - PL
  * Open the `Ironsmith Assets` or `Pack Assets` compendiums and copy the Items into the `Items` `Custom Assets` folder.
    * ![Items - Custom Assets](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/custom-assets-items.jpg?raw=true)
  * The Assets will be available in the Character sheet under `Custom Assets`.
    * ![Character Sheet - Custom Assets](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/custom-assets-character-sheet.jpg?raw=true)
* Use the following method to integrate the `Ironsmith Moves` into the character sheet.
  * Create a `Custom Moves` folder in the `Items` tab called:
    * `Custom Moves` - EN
    * `Movimientos personalizados` - ES
    * `Actions personnalisées` - FR
    * `Własne Ruchy` - PL
  * Open the `Ironsmith Moves` compendium and copy the Items into the `Items` `Custom Moves` folder.
    * ![Items - Custom Moves](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/custom-moves-items.jpg?raw=true)
  * The Moves will be available in the Character sheet under `Custom Moves`.
    * ![Character Sheet - Custom Moves](https://github.com/jendave/ironsmith-compendiums/blob/main/docs/custom-moves-character-sheet.jpg?raw=true)

## Troubleshooting

* Due to changes in version `2.0.0`, uninstalling and re-installing the module may be needed.

## Credits

The [Ironsmith](https://preview.drivethrurpg.com/en/product/351813/ironsmith) supplements by Eric Bright are licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Original oracles by Shawn Tomkin from [Ironsworn](https://preview.drivethrurpg.com/en/product/238369/ironsworn) and [Ironsworn: Delve](https://preview.drivethrurpg.com/en/product/302260/ironsworn-delve) are used under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Module by David Hudson and licensed for use under the [MIT license](https://opensource.org/license/mit/).

## Acknowledgements

Ironsmith Expanded Oracles were created using [Eric Bright's Ironsworn JSON files](https://github.com/ericbright2002/Forged_in_Obsidian).

Many thanks to Ben Straub for his fantastic [Ironsworn & Starforged Game System](https://foundryvtt.com/packages/foundry-ironsworn).

### Modules

The following modules were used in the development process

* [foundryvtt-importer module](https://github.com/EthanJWright/foundryvtt-importer)
* [DF Manual Rolls](https://foundryvtt.com/packages/df-manual-rolls)

## FoundryVTT Modules and Other Resources

Please check out my other modules and resources for Ironsworn, Ironsworn: Starforged and other systems.

### [FoundryVTT](https://foundryvtt.com/community/david-hudson/packages) Modules

* [Starforged Custom Oracles](https://foundryvtt.com/packages/starforged-custom-oracles)
* [Starsmith Compendiums for Ironsworn: Starforged](https://foundryvtt.com/packages/starsmith-expanded-oracles)
* [Ironsmith Expanded Oracles for Ironsworn](https://foundryvtt.com/packages/ironsmith-expanded-oracles)
* [Augmented Reality Cyberpunk City Kit](https://foundryvtt.com/packages/augmented-reality-foundry)
* [Token Note Hover](https://github.com/jendave/token-note-hover)

### [Itch.io](https://jendave.itch.io/) Resources

* [The City on the Breeze - Cyberpunk-inspired Oracle arrays](https://jendave.itch.io/the-city-on-the-breeze)
* [I'll Be Home for Life Day! - Star Wars Life Day Oracle](https://jendave.itch.io/ill-be-home-for-life-day)
* [Critical Success Oracles](https://jendave.itch.io/critical-success-oracles)
* [I Owe My Soul to the Corporate Planet - Company Planet Oracles](https://jendave.itch.io/i-owe-my-soul-to-the-corporate-planet)
* [Creature Rank Generator](https://jendave.itch.io/creature-rank-generator)
