# ironsmith-expanded-oracles

![GitHub all releases](https://img.shields.io/github/downloads/jendave/ironsmith-expanded-oracles/total)
[![Latest Version](https://img.shields.io/github/v/release/jendave/ironsmith-expanded-oracles?display_name=tag&sort=semver&label=Latest%20Version)](https://github.com/jendave/ironsmith-expanded-oracles/releases/latest)
![Foundry Version](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjendave%2Fironsmith-expanded-oracles%2Fmain%2Fmodule.json)
[![License](https://img.shields.io/github/license/jendave/ironsmith-expanded-oracles)](LICENSE)

A FoundryVTT compendium of fan-created oracles for the Ironsworn system.

# Features and Notes
* Oracle tables from the PDF are included.
* Tables that are copies of the Ironsworn official tables are included if they are part of Ironsmith 1-2, 3-4, 5-6 array.
* Tables that are simply copies of official Ironsworn tables without the array (some planet and several of the derelict tables for example) are not included since they would be redundant with the standard Ironsworn System tables.

## Installation
To install the module search for `Ironsmith` or `Ironsworn` in the `Add-On Modules` tab of Foundry.

Or use this URL:

```
https://github.com/jendave/Ironsmith-expanded-oracles/releases/latest/download/module.json
```

By default, the Oracles will be integrated into the Oracle Tree in the Character Sheet. 
![Character Sheet - Oracles Tree](./docs/oracle-tree-character-sheet.jpg)

If this is not desired, then uncheck the `Enable Oracles in Default Tree` in `Configure Settings` game setting. 
![Module Game Settings](./docs/module-game-settings.jpg)

The Oracles can also be added to the character sheet by using the `Custom Folders` method below.

Macros for Ironship Registry Number and Dice rolling can be found in the `Ironsmith Expanded Oracles Macros` compendium. Drag and drop any you need into the macro toolbar.

## (Optional Installation) Use Custom Folders to add Character Sheet Oracles 
* If integrating the Ironsmith Oracles directly into the default Oracle Tree if not desired, then use this method to add the Ironsmith Oracles.
* If it does not already exist, create a `Custom Oracles` folder in `Rollable Tables` tab called:
  * `Custom Oracles` - EN
  * `Oráculos personalizados` - ES
  * `Oracles personnalisés` - FR
  * `Własne Wyrocznie` - PL

Open the `Ironsmith Expanded Oracles` compendium and copy the folders into the `Rollable Tables` `Custom Oracles` folder.

![Rollable Tables - Custom Oracles](./docs/custom-oracles-rollable-tables.jpg)

The Oracles will be available in the Character sheet under `Custom Oracles`.

![Character Sheet - Custom Oracles](./docs/custom-oracles-character-sheet.jpg)

# Credits
Expanded oracles by Eric Bright and licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Download the [Ironsmith Expanded Oracles PDF from DriveThruRPG.](https://www.drivethrurpg.com/product/417619/Ironsmith-Expanded-Oracles)

Original oracles by Shawn Tomkin from the Ironsworn Reference Guide and used under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Module by David Hudson and licensed for use under the [MIT license](https://opensource.org/license/mit/).

The Ironship Registry number generator macro was contributed by @el_reverend (Discord).

# Acknowledgements
Many thanks to Ben Straub for his fantastic [Ironsworn & Ironsworn Game System](https://foundryvtt.com/packages/foundry-ironsworn).

The [foundryvtt-importer module](https://github.com/EthanJWright/foundryvtt-importer) and [Mana's Compendium Importer](https://gitlab.com/mkahvi/fvtt-compendium-importer) were used to import and export the tables during the development process.
