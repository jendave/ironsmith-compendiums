Hooks.once("init", async () => {
  // CONFIG.debug.hooks = true;
  const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);
  console.log('ironsmith-expanded-oracles | Initializing Ironsmith Expanded Oracles');
  if (game.data.system.id === 'foundry-ironsworn') {
    game.settings.register('ironsmith-expanded-oracles', 'enableOraclesInTree', {
      name: 'Enable Oracles in Default Tree',
      hint: 'Enable Oracles in the character sheet tree. The Ironsworn Classic and/or Delve rulesets must also be enabled.',
      scope: 'world',
      config: true,
      type: Boolean,
      default: true,
      onChange: debouncedReload
    });
  }
});

Hooks.once("ironswornOracleTreesReady", async () => {
  if (game.data.system.id === 'foundry-ironsworn') {
    if (game.settings.get('ironsmith-expanded-oracles', 'enableOraclesInTree') && game.settings.get('foundry-ironsworn', 'ruleset-classic')) {
      const ironswornOracles = CONFIG.IRONSWORN.getOracleTree('classic');
      let actionThemeIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Action and Theme Oracles"));
      let characterIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Character"));
      let nameFolder = ironswornOracles.children.find(children => children.displayName === "Name");
      let nameIndex = ironswornOracles.children.indexOf(nameFolder);
      let placeIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Place Oracles"));
      let settlementFolder = ironswornOracles.children.find(children => children.displayName === "Settlement Oracles");
      let settlementIndex = ironswornOracles.children.indexOf(settlementFolder);
      let turningPointIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Turning Point Oracles"));
      let otherNameIndex = nameFolder.children.indexOf(nameFolder.children.find(children => children.displayName === "Other Names"));

      ironswornOracles.children.push({
        displayName: 'Corruption',
        tables: [],
        children: []
      });

      let corruptionIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Corruption"));

      ironswornOracles.children.push({
        displayName: 'Monster Hunting',
        tables: [],
        children: []
      });

      let monsterHuntingFolder = ironswornOracles.children.find(children => children.displayName === "Monster Hunting");
      let monsterHuntingIndex = ironswornOracles.children.indexOf(monsterHuntingFolder);

      ironswornOracles.children.push({
        displayName: 'Moves',
        tables: [],
        children: []
      });

      let movesIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Moves"));

      ironswornOracles.children.push({
        displayName: 'Vows and Milestones',
        tables: [],
        children: []
      });

      ironswornOracles.children.push({
        displayName: 'Flavor Pack Oracles',
        tables: [],
        children: []
      });

      let flavorPackIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Flavor Pack Oracles"));

      ironswornOracles.children[flavorPackIndex].children.push(
        {
          displayName: 'African Oracles',
          tables: [],
          children: []
        },
        {
          displayName: 'Indian Oracles',
          tables: [],
          children: []
        },
        {
          displayName: 'Japanese Oracles',
          tables: [],
          children: []
        },
        {
          displayName: 'Norse Oracles',
          tables: [],
          children: []
        },
        {
          displayName: 'South American Oracles',
          tables: [],
          children: []
        }
      );

      let flavorPackFolder = ironswornOracles.children.find(children => children.displayName === "Flavor Pack Oracles");
      let africanOraclesIndex = flavorPackFolder.children.indexOf(flavorPackFolder.children.find(children => children.displayName === "African Oracles"));
      let indianOraclesIndex = flavorPackFolder.children.indexOf(flavorPackFolder.children.find(children => children.displayName === "Indian Oracles"));
      let japaneseOraclesIndex = flavorPackFolder.children.indexOf(flavorPackFolder.children.find(children => children.displayName === "Japanese Oracles"));
      let norseOraclesIndex = flavorPackFolder.children.indexOf(flavorPackFolder.children.find(children => children.displayName === "Norse Oracles"));
      let southAmericanOraclesIndex = flavorPackFolder.children.indexOf(flavorPackFolder.children.find(children => children.displayName === "South American Oracles"));

      flavorPackFolder.children[africanOraclesIndex].children.push(
        {
          displayName: 'Grassland Settlement Names',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithafricanoracles.RollTable.uoWNDhhwjN4Pjlbg'],
          children: []
        },
        {
          displayName: 'Grasslander Names',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithafricanoracles.RollTable.edCY4deafcqKWVPR'],
          children: []
        },
        {
          displayName: 'Regions of the Grasslands',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithafricanoracles.RollTable.e7j2RjjdNvkuqA00'],
          children: []
        }
      );

      flavorPackFolder.children[indianOraclesIndex].children.push(
        {
          displayName: 'Tigerlander Names: Traditional Female',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithindianoracles.RollTable.Jy4oCU0kmKI5K6Mf'],
          children: []
        },
        {
          displayName: 'Tigerlander Names: Traditional Male',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithindianoracles.RollTable.EphNLFj2ET8Jf33q'],
          children: []
        },
        {
          displayName: 'Regions of the Tigerlands',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithindianoracles.RollTable.nHbD2DjG4fOqVFaT'],
          children: []
        },
        {
          displayName: 'Tigerland Settlement Names',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithindianoracles.RollTable.VuCCRL1FxblqHAg8'],
          children: []
        }
      );

      flavorPackFolder.children[japaneseOraclesIndex].children.push(
        {
          displayName: 'Firelander Names: Traditional  Male',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.PUmbwVMa2OxC8bJ8'],
          children: []
        },
        {
          displayName: 'Firelander Names: Traditional Female',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.EzVjTXmbzIz1onv8'],
          children: []
        },
        {
          displayName: 'Fireland Coastal Location',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.0HbiFgV1UtUwEp4g'],
          children: []
        },
        {
          displayName: 'Fireland Location',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.AvytEAkubkXaAuho'],
          children: []
        },
        {
          displayName: 'Regions of the Firelands',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.6cwsoxKUzHWgoCAU'],
          children: []
        },
        {
          displayName: 'Settlement Name Prefix (Meaning)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.43jnV8WTFSbqbJvj'],
          children: []
        },
        {
          displayName: 'Settlement Name Suffix (Meaning)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithjapaneseoracles.RollTable.jGCHyZGWy0Zwm0i8'],
          children: []
        }
      );

      flavorPackFolder.children[norseOraclesIndex].children.push(
        {
          displayName: 'Elder Futhark (Runes as Oracles)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithnorseoracles.RollTable.Bmuo471dLLuT5nZN'],
          children: []
        },
        {
          displayName: 'Icelander Names: Traditional Female',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithnorseoracles.RollTable.LWAIaFtnsP9WipMt'],
          children: []
        },
        {
          displayName: 'Icelander Names: Traditional Male',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithnorseoracles.RollTable.Dv6rHBPo4U0DXACt'],
          children: []
        },
        {
          displayName: 'Regions of the Icelands',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithnorseoracles.RollTable.Yu5T9pKKdmg7CJmu'],
          children: []
        }
      );

      flavorPackFolder.children[southAmericanOraclesIndex].children.push(
        {
          displayName: 'Jungleland Settlement Names',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithsouthamericanoracles.RollTable.4K42bi6RNTj93CAI'],
          children: []
        },
        {
          displayName: 'Junglelander Names',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithsouthamericanoracles.RollTable.L7vTgre8R5UhczU4'],
          children: []
        },
        {
          displayName: 'Regions of the Junglelands',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithsouthamericanoracles.RollTable.D4VtGkGiBXEuGhrC'],
          children: []
        }
      );

      let vowsFolder = ironswornOracles.children.find(children => children.displayName === "Vows and Milestones");
      let vowsIndex = ironswornOracles.children.indexOf(vowsFolder);

      ironswornOracles.children[actionThemeIndex].children.push(
        {
          displayName: 'Action (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jooAXdTKCabTkolP', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ioGurG7gA7GtaVsM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LX6sfa9q1T7ObbLu'],
          children: []
        },
        {
          displayName: 'Theme (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.95cJ5CUzfFDpwWRx', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7y536g7HrwnyBelG', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GrMFlQ1LAbPwpaQh'],
          children: []
        }
      );

      ironswornOracles.children[characterIndex].children.push(
        {
          displayName: 'Character Role (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.THyqvtvnpMAmghzY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vVIwIneKy2NoNOQg', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KZJjCsHBHbejeiUe'],
          children: []
        },
        {
          displayName: 'Character Goal (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yFfQTBg7tyc72s4m', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.T6g89mwSUrONdy9Q', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HVcyCucZYQlq0vyS'],
          children: []
        },
        {
          displayName: 'Character Descriptor (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PHizkEMpEbuqf8hu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aH2sdteUcR31gAwA', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6XVC7djd7VbPXc4Z'],
          children: []
        }
      );

      ironswornOracles.children[corruptionIndex].children.push(
        {
          displayName: 'Compulsion',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PDNDZDa5UqMeOCtp'],
          children: []
        },
        {
          displayName: 'Fear',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.14JyzXAjiiKFBPzP'],
          children: []
        },
        {
          displayName: 'Physical Sign',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Fcove2nD0gY7dvXQ'],
          children: []
        },
        {
          displayName: 'Quirk',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DjQqDqKIcmjv6dN0'],
          children: []
        },
        {
          displayName: 'Supernatural Sign',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vNJjrFCJ4TlywKEs'],
          children: []
        },
        {
          displayName: 'Type of Evidence of Corruption',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Ji5qZAxZoO2VIBKy'],
          children: []
        },
        {
          displayName: 'Typical NPC Reaction',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.9eNEhsDz3VGQe568'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children.push(
        {
          displayName: 'Design the Monster',
          tables: [],
          children: []
        },
        {
          displayName: 'Ending the Fight',
          tables: [],
          children: []
        },
        {
          displayName: 'Heed the Call',
          tables: [],
          children: []
        },
        {
          displayName: 'Milestones',
          tables: [],
          children: []
        }
      );

      let designTheMonsterMonsterHuntingIndex = monsterHuntingFolder.children.indexOf(monsterHuntingFolder.children.find(children => children.displayName === "Design the Monster"));
      let endingTheFightMonsterHuntingIndex = monsterHuntingFolder.children.indexOf(monsterHuntingFolder.children.find(children => children.displayName === "Ending the Fight"));
      let heedTheCallMonsterHuntingIndex = monsterHuntingFolder.children.indexOf(monsterHuntingFolder.children.find(children => children.displayName === "Heed the Call"));

      let milestonesMonsterHuntingFolder = monsterHuntingFolder.children.find(children => children.displayName === "Milestones");
      let milestonesMonsterHuntingIndex = monsterHuntingFolder.children.indexOf(milestonesMonsterHuntingFolder);

      ironswornOracles.children[monsterHuntingIndex].children[designTheMonsterMonsterHuntingIndex].children.push(
        {
          displayName: 'Exploitable Weakness',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.T7lgfm3nB9LSdylF'],
          children: []
        },
        {
          displayName: 'Likelihood of Correct Ability',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WUl5yIYzgQn67MuK'],
          children: []
        },
        {
          displayName: 'Likelihood of Correct Characteristic',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BMneJw1hK4W7j2UO'],
          children: []
        },
        {
          displayName: 'Likelihood of Correct Primary Form',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qiHZKaoWHrkmdICM'],
          children: []
        },
        {
          displayName: 'Likelihood of Correct Size',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZsvsjnJhGfphcFrE'],
          children: []
        },
        {
          displayName: 'Primary Ability',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tV0fK39GFPSzbJnr'],
          children: []
        },
        {
          displayName: 'Primary Characteristic',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WY9gYnCSYXPXPPmR'],
          children: []
        },
        {
          displayName: 'Primary Form',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EH04r2O57lZEyqBb'],
          children: []
        },
        {
          displayName: 'Size',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wRnuBbEPYHIfxRqz'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[endingTheFightMonsterHuntingIndex].children.push(
        {
          displayName: 'On a Strong Hit The Monster....',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cawiYHA3nGux8Vqu'],
          children: []
        },
        {
          displayName: 'On a Weak Hit But...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fkf5NivRTBPEBpAt'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[heedTheCallMonsterHuntingIndex].children.push(
        {
          displayName: 'How Have People Tried to Stop the Monster?',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PoWbQ8Uk0Atcv9Vu'],
          children: []
        },
        {
          displayName: 'What Has the Monster Done?',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1jSxbgVP1CWKB1TS'],
          children: []
        },
        {
          displayName: 'What is the Dominant Attitude of the People?',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.QraukbOe9Pfzkc8A'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[milestonesMonsterHuntingIndex].children.push(
        {
          displayName: 'Find an Opposing Viewpoint',
          tables: [],
          children: []
        },
        {
          displayName: 'Find the Mounting Pressure',
          tables: [],
          children: []
        },
        {
          displayName: 'Tracks',
          tables: [],
          children: []
        },
        {
          displayName: 'Uncover a Secret',
          tables: [],
          children: []
        }
      );

      let findAnOpposingViewpointMonsterHuntingIndex = milestonesMonsterHuntingFolder.children.indexOf(milestonesMonsterHuntingFolder.children.find(children => children.displayName === "Find an Opposing Viewpoint"));
      let findTheMountingPressureMonsterHuntingIndex = milestonesMonsterHuntingFolder.children.indexOf(milestonesMonsterHuntingFolder.children.find(children => children.displayName === "Find the Mounting Pressure"));
      let tracksMonsterHuntingIndex = milestonesMonsterHuntingFolder.children.indexOf(milestonesMonsterHuntingFolder.children.find(children => children.displayName === "Tracks"));
      let uncoverASecretMonsterHuntingIndex = milestonesMonsterHuntingFolder.children.indexOf(milestonesMonsterHuntingFolder.children.find(children => children.displayName === "Uncover a Secret"));

      ironswornOracles.children[monsterHuntingIndex].children[milestonesMonsterHuntingIndex].children[findAnOpposingViewpointMonsterHuntingIndex].children.push(
        {
          displayName: 'Actor',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qwauXBnovP6swUph'],
          children: []
        },
        {
          displayName: 'Wants to...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ydnEI1BXu4voqkTr'],
          children: []
        },
        {
          displayName: 'Why?',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Dfk5R2OodJgGdyrb'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[milestonesMonsterHuntingIndex].children[findTheMountingPressureMonsterHuntingIndex].children.push(
        {
          displayName: 'And It\'s Getting Worse Because...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gU6PnSSv4FYOpHoF'],
          children: []
        },
        {
          displayName: 'But...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tG9ntqjZ7telppCh'],
          children: []
        },
        {
          displayName: 'The Monster Wants to...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZQifTar4YBtXBrVN'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[milestonesMonsterHuntingIndex].children[tracksMonsterHuntingIndex].children.push(
        {
          displayName: 'Age',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xOiRVGD39AUXmoiI'],
          children: []
        },
        {
          displayName: 'Sign',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4Z1xJ2bVOhvtcdup'],
          children: []
        }
      );

      ironswornOracles.children[monsterHuntingIndex].children[milestonesMonsterHuntingIndex].children[uncoverASecretMonsterHuntingIndex].children.push(
        {
          displayName: 'Actor',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SX6MdGYhmcpgwLcu'],
          children: []
        },
        {
          displayName: 'Secretly Does...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PF4xccosi4ygZoGZ'],
          children: []
        },
        {
          displayName: 'Why?',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0FMRdoHhJnWuBb2M'],
          children: []
        }
      );

      ironswornOracles.children[movesIndex].children.push(
        {
          displayName: 'Pay the Price (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.kBpArcUlL0MBiLSE', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5mbaAMTDSpyIBh9m', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.j60qSt20b5Ra7qCg'],
          children: []
        }
      );

      ironswornOracles.children[nameIndex].children.push(
        {
          displayName: 'Ironlander Names (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LSzwTeXOlkD4gcVQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XUwc7RnBYd1P2N7a', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xBtTZG2MrbV3cTDm', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ljs00zet8pjD7L2v', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YZKNVYhwZ83phfOs', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4N7heVltOaujzsTw'],
          children: []
        }
      );

      ironswornOracles.children[nameIndex].children.push(
        {
          displayName: 'Elf Names (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.07G5YDSICG6bzvZh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oFDnPxngEFi3qizJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SR8tFMNinEZd6cST'],
          children: []
        }
      );

      ironswornOracles.children[nameIndex].children[otherNameIndex].children.push(
        {
          displayName: 'Giants (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EasTpUDnAM31kppk', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AUGsgaVKXIDqJfFS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.r5wRlli3cZiK1IRt'],
          children: []
        },
        {
          displayName: 'Varou (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Q3mlTJFiHve677Yi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZqxqShnZE1DT6Dbu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DtSXLiHqaYXw9ToW'],
          children: []
        },
        {
          displayName: 'Trolls (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YVB9XrzSH23E1ovW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4vGEd9VVi9D4hNNh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.e6yU3tDaOcTxOnQJ'],
          children: []
        }
      );

      ironswornOracles.children[placeIndex].children.push(
        {
          displayName: 'Location (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0SMbpiwJm9DVdAt3', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HQtRLJQiwZxWdwVe', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WdXJXroTleYqGCB9'],
          children: []
        },
        {
          displayName: 'Coastal Waters Location (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uS3xYNahiV8c1IvM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NnYeEA7e3W2VNPRX', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GevfByTd4FIrfGpb'],
          children: []
        },
        {
          displayName: 'Location Descriptor (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OanBZ1XU4wBasNTq', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Vgvk7NlpFRX6MqeB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.j2WjbFYOk2lAxTlH'],
          children: []
        }
      );

      ironswornOracles.children[settlementIndex].children.push(
        {
          displayName: 'Settlement Trouble (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.65PrMkMABgeLp38A', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Ox77HXdyqrgusrgF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KNPxDJkiX6910Isy'],
          children: []
        }
      );

      let quickNameSettlementIndex = settlementFolder.children.indexOf(settlementFolder.children.find(children => children.displayName === "Quick Settlement Name Generator"));

      ironswornOracles.children[settlementIndex].children[quickNameSettlementIndex].children.push(
        {
          displayName: 'Prefix (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FCgTE2Sf347vIaDH', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4EKgKcoP8X39ZeCf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7Ead251QYGsRgiDW'],
          children: []
        },
        {
          displayName: 'Suffix (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.e4LpLkGUpbkjqyUf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.TvEDIwozXApM4OdH', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KBLFiYJ2c0JdAvaK'],
          children: []
        }
      );

      ironswornOracles.children[turningPointIndex].children.push(
        {
          displayName: 'Combat Action (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.QDA1hAtUCI1fcccc', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fdT87NOrMKvqGdTe', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OB9V3EZcGmrv5CTO'],
          children: []
        },
        {
          displayName: 'Mystic Backlash (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.blvtGNeP5C6Fniqx', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BuIjwttl9aypuw6u', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HMgzl0ZuL7mnzYzD'],
          children: []
        },
        {
          displayName: 'Major Plot Twist (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.joTd30CNcNw7ySbA', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tV0hmp97KlSC1OBo', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZodIul2xQQp2haov'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children.push(
        {
          displayName: 'Active Opposition',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0rwlyFID7qof1hrA'],
          children: []
        },
        {
          displayName: 'Difficulty Level',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.P2iBppnx0884EteE'],
          children: []
        },
        {
          displayName: 'Method of Making Headway',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.h5rOpC6d10AhFmU1'],
          children: []
        },
        {
          displayName: 'Narrative Conflict',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4DOOXzrcLbExZ12z'],
          children: []
        },
        {
          displayName: 'Obstacles to Overcome',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EGGHouKBVSTV9iYR'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children.push(
        {
          displayName: 'Challenges to Noble Virtue',
          tables: [],
          children: []
        },
        {
          displayName: 'Fantasy Quest',
          tables: [],
          children: []
        },
        {
          displayName: 'Grim Quest',
          tables: [],
          children: []
        },
        {
          displayName: 'Mystery Vow',
          tables: [],
          children: []
        },
        {
          displayName: 'One-Shot',
          tables: [],
          children: []
        }
      );

      let challengesToVirtueVowsIndex = vowsFolder.children.indexOf(vowsFolder.children.find(children => children.displayName === "Challenges to Noble Virtue"));
      let fantasyQuestVowsIndex = vowsFolder.children.indexOf(vowsFolder.children.find(children => children.displayName === "Fantasy Quest"));
      let grimQuestVowsIndex = vowsFolder.children.indexOf(vowsFolder.children.find(children => children.displayName === "Grim Quest"));
      let mysteryVowVowsIndex = vowsFolder.children.indexOf(vowsFolder.children.find(children => children.displayName === "Mystery Vow"));
      let oneShotVowsIndex = vowsFolder.children.indexOf(vowsFolder.children.find(children => children.displayName === "One-Shot"));

      ironswornOracles.children[vowsIndex].children[challengesToVirtueVowsIndex].children.push(
        {
          displayName: 'Loss of...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WuksvXuuPfyNvHAU'],
          children: []
        },
        {
          displayName: 'Challenging the Virtue of...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.a97NA6HOLVwX0Wq6'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children[fantasyQuestVowsIndex].children.push(
        {
          displayName: 'Alternate Fantasy Quests',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yg7lzwTqrJhcYfaY'],
          children: []
        },
        {
          displayName: 'Archetype',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ftSp0SlfBdaZaxNu'],
          children: []
        },
        {
          displayName: 'Modifier',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3mYV6Lod9xLwAr8h'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children[grimQuestVowsIndex].children.push(
        {
          displayName: 'Burden',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GX9dgD5KrcdxiRIY'],
          children: []
        },
        {
          displayName: 'Grim Quest',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DPBG6Gm4kjTlbyI7'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children[mysteryVowVowsIndex].children.push(
        {
          displayName: 'Clue Relates To...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PsWvuiS2ivTsDwWC'],
          children: []
        },
        {
          displayName: 'Culprit\'s Past Location',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JrGtnc9GFa88OxiO'],
          children: []
        },
        {
          displayName: 'Item of Narrative Significance',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5gw54UqRJ4SY6YcS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AU81rQndvWGiwS3z', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pDuUGjRBixDzDaQW'],
          children: []
        },
        {
          displayName: 'Obstacle',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HmqfAcf8F2IAQnxD'],
          children: []
        },
        {
          displayName: 'Premise',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bKGW8eRX551R1Dkz'],
          children: []
        },
        {
          displayName: 'Topic of Info',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EbBdlUOMz6KbUCe7'],
          children: []
        },
        {
          displayName: 'Type of Info',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SLF2vKM2ECnyEJOj'],
          children: []
        },
        {
          displayName: 'Who Committed the Crime',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tuoHH10URIXcc0x2'],
          children: []
        },
        {
          displayName: 'Why the Crime was Committed',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.R7xxod7I2649AfEO'],
          children: []
        }
      );

      ironswornOracles.children[vowsIndex].children[oneShotVowsIndex].children.push(
        {
          displayName: 'Added Pressure',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HbHa69vRs2jVF8Hd'],
          children: []
        },
        {
          displayName: 'Inciting Incident',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.l3fPYm3lc5BZZZKx'],
          children: []
        },
        {
          displayName: 'Location',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2hzG8oEmMbVVMJsZ'],
          children: []
        }
      );


    // ==================== PERILOUS VOID ORACLES ====================
    // Register Perilous Void oracle tree in the classic tree
    ironswornOracles.children.push({
      displayName: 'Perilous Void',
      tables: [],
      children: []
    });

    let pvFolder = ironswornOracles.children.find(children => children.displayName === 'Perilous Void');
    let pvIndex = ironswornOracles.children.indexOf(pvFolder);

    // Setting Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Setting Creation',
      tables: [],
      children: []
    });

    // Sector Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Sector Creation',
      tables: [],
      children: []
    });

    // System Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'System Creation',
      tables: [],
      children: []
    });

    // World Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'World Creation',
      tables: [],
      children: []
    });

    // Lifeform Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Lifeform Creation',
      tables: [],
      children: []
    });

    // Society Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Society Creation',
      tables: [],
      children: []
    });

    // Faction Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Faction Creation',
      tables: [],
      children: []
    });

    // Community Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Community Creation',
      tables: [],
      children: []
    });

    // Development Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Development Creation',
      tables: [],
      children: []
    });

    // NPC Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'NPC Creation',
      tables: [],
      children: []
    });

    // Site Creation
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Site Creation',
      tables: [],
      children: []
    });

    // Other Tables
    ironswornOracles.children[pvIndex].children.push({
      displayName: 'Other Tables',
      tables: [],
      children: []
    });

    // Populate category children
    let pvSettingCreationFolder = pvFolder.children.find(c => c.displayName === 'Setting Creation');

    pvSettingCreationFolder.children.push({
      displayName: 'Jump Tech',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.w5ONAti5uvo'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Campaign Frame',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.9aq2IQ8aA8'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Interstellar Society',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.RIDCZwEqexo'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Nonhuman Species Archetype',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.j0Vn0stxJd0', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.PLKxnMqTDEc'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Nonhuman Species Descriptor',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.qBFt34y80s', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.K5Q2hRDDdsk', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.X7cjLVn0NW4'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Nonhuman Species Special Ability',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.rPwCWmOqIlo'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Society Relations',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.RQgde56X0YU'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Inciting Incident',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.7GXrH5LjvrY'],
      children: []
    });

    pvSettingCreationFolder.children.push({
      displayName: 'Opening Scene',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.6GQYmHimOcg'],
      children: []
    });

    let pvSectorCreationFolder = pvFolder.children.find(c => c.displayName === 'Sector Creation');

    pvSectorCreationFolder.children.push({
      displayName: 'Subsector of Interest',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.s8Z8Qu7vyow'],
      children: []
    });

    pvSectorCreationFolder.children.push({
      displayName: 'Star Type',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.r3zR4rxd50'],
      children: []
    });

    pvSectorCreationFolder.children.push({
      displayName: 'Nebula',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.X5AlmLrnP80'],
      children: []
    });

    pvSectorCreationFolder.children.push({
      displayName: 'Anomaly',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.spllkQpDoAA'],
      children: []
    });

    let pvSystemCreationFolder = pvFolder.children.find(c => c.displayName === 'System Creation');

    pvSystemCreationFolder.children.push({
      displayName: 'System Population - Core',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.gRcUmEd1bNU'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'System Population - Frontier',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.iCCrN27wHWE'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'System Population - Wild',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.M9Zji3y9ZU'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Pop Center Development',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.eJwFE7rAG5E'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Satellite Type',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Ib9vklZHw4Q'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Asteroid',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.M4tblVEiY8', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.6N6bkyhV3SY'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Gas Giant',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.zLplfzO2PUo', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.XeEQJOKKfQA'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Artificial Satellite',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.wUaruCcNdbE'],
      children: []
    });

    pvSystemCreationFolder.children.push({
      displayName: 'Stellar Phenomenon',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.E2GQ2RuBdYI'],
      children: []
    });

    let pvWorldCreationFolder = pvFolder.children.find(c => c.displayName === 'World Creation');

    pvWorldCreationFolder.children.push({
      displayName: 'World Climate - Close Position',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.yipG1CLJuJQ'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'World Climate - Near Position',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.sMbrD1dymA'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'World Climate - Far Position',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.q7t2o7wW5so'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'World Climate - Extreme Position',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Q83ZAufa0Nc'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'World Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.DWmx2Ytwyg'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'World Size',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.RTJon3ni6Q'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Supercold World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Rm3jVtQ2Ijg'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Cold World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.JfvkjOVZrJE'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Temperate World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.gBihod1504o'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Hot World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.LVldY1cIr6w'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Superhot World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.3ydvvDaGbfM'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Exotic Gas',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Tbg6A2R14'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Barren World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Trgha0rgIMg', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.lIWkHgnpCsc', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.VlVwCawuWl4', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Q8w3zK41t1E'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Frozen World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.JP8JnYQwdDU', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.otRNw4fxegA', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.5Vng6MJ1rMs', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.2YFrMwFoiks'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Arid World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.a3VJjBnz8k', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Vtu6TX6yQU0', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.PtkfqFjIO8', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.QeQTuQfS3qw'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Oceanic World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.zpKsN3oipQ', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.PewDCLeIws', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Z7mrMPekHSg', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.hKTVemwTT7c'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Arboreal World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.XjZsGMLTZpM', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.ygFaK1rUN70'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Earthlike World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.jyUasWWZhEM', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.G2jyfdUYHI'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Volcanic World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.36NKM8m0myU', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Di461myerq4'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Metallic World',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.WQpq4yRemok', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Shtkm2PFFtI'],
      children: []
    });

    pvWorldCreationFolder.children.push({
      displayName: 'Resource Tables',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.6ohaVvbgqwM', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.puFJapaQjuw', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.tjoMEhgpiu0', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.K4QhIt0kmIM', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.NASYBeQhcSM'],
      children: []
    });

    let pvLifeformCreationFolder = pvFolder.children.find(c => c.displayName === 'Lifeform Creation');

    pvLifeformCreationFolder.children.push({
      displayName: 'Microbial Lifeform',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.104h3iC7YkQ'],
      children: []
    });

    pvLifeformCreationFolder.children.push({
      displayName: 'Simple Lifeform',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.hjXwE65MpVk'],
      children: []
    });

    pvLifeformCreationFolder.children.push({
      displayName: 'Complex Lifeform',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.kRnLDinJSfs', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.rRT05zqKYuA', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.uXcIE3Htf7Q'],
      children: []
    });

    pvLifeformCreationFolder.children.push({
      displayName: 'Lifeform Adaptation by World Type',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.9tcFCzoWHAI', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.dPyCU3zGzBk', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.tPbwCgwz0T8', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.OOF5hu3T2uk', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.iJt9Fd8Ryk', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.qB4rIxLSUHM', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.vUkyCFnkVnU'],
      children: []
    });

    pvLifeformCreationFolder.children.push({
      displayName: 'Lifeform Adaptation by Gravity',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.KBKEkO1caTs', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.eKgNht8Eyl4', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.CTuR9EstH5M', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.jUV8nfDeN4c'],
      children: []
    });

    let pvSocietyCreationFolder = pvFolder.children.find(c => c.displayName === 'Society Creation');

    pvSocietyCreationFolder.children.push({
      displayName: 'Society Tech Level',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.iWJUYiC6ue8'],
      children: []
    });

    pvSocietyCreationFolder.children.push({
      displayName: 'Society Condition',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.nlFmPWau5Sk'],
      children: []
    });

    pvSocietyCreationFolder.children.push({
      displayName: 'Society Political System',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.CWuRbA2YAQ'],
      children: []
    });

    let pvFactionCreationFolder = pvFolder.children.find(c => c.displayName === 'Faction Creation');

    pvFactionCreationFolder.children.push({
      displayName: 'Faction Profile',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.7S5HS9r5t1A', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.phCemJji9r0'],
      children: []
    });

    pvFactionCreationFolder.children.push({
      displayName: 'Faction Special Asset',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.xFMnVgzcbBg'],
      children: []
    });

    let pvCommunityCreationFolder = pvFolder.children.find(c => c.displayName === 'Community Creation');

    pvCommunityCreationFolder.children.push({
      displayName: 'Community Profile',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.7NpOtKVmBgo', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.5O9Op3Frxdw', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.hr2zBBOfwmE'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Community Problem',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.MsEXa1bmHc'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Outpost',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.d9gAyxNI'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Space Station',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.TojXi8R42E'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Colony',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.DvtuWfXLdjM'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Village',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.mjOxgr35IDs'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Town',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.DynVqyIH0o'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'City',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.xPpPPm1jQuU'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'Megacity',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.ijXWS8376jk'],
      children: []
    });

    pvCommunityCreationFolder.children.push({
      displayName: 'District Type',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.y1yocosHWA'],
      children: []
    });

    let pvDevelopmentCreationFolder = pvFolder.children.find(c => c.displayName === 'Development Creation');

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Development Type',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.BTTNFXes25Y'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Situation',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.PVk8BtcWhgA'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Incident',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.L2Ikvdae820'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Encounter - Voidside',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.B75GbINvac'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Encounter - Worldside',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.PxVYYzxhxL0'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Activity',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.H7YKEhhmnA'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Event',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.2x47u93GBAY'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Offer',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.1aZyQt27k2A'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Discovery',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.tGCroCLpA'],
      children: []
    });

    pvDevelopmentCreationFolder.children.push({
      displayName: 'Job',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.YicMiFZcnWo'],
      children: []
    });

    let pvNPCCreationFolder = pvFolder.children.find(c => c.displayName === 'NPC Creation');

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Archetype',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.jjZtmCKlW9Q'],
      children: []
    });

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Species',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.AVVCiXaX2GE'],
      children: []
    });

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Occupation',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.YSl0PETb7RY', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.VdZAauIEFyU', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.EcRkHmZT0o'],
      children: []
    });

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Motivation',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.OIi1FWMckkY'],
      children: []
    });

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Traits',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.fDTKsdtQ7M', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.gZSGm3OFf4c', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.1kAPpxBb9I4'],
      children: []
    });

    pvNPCCreationFolder.children.push({
      displayName: 'NPC Detail',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.a9TdnMdYTII'],
      children: []
    });

    let pvSiteCreationFolder = pvFolder.children.find(c => c.displayName === 'Site Creation');

    pvSiteCreationFolder.children.push({
      displayName: 'Derelict',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.8Sh1KuGksVY', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.ad0EOlyvIBw', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.QtDl1bNefyE', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.AXLKEXj8CR8'],
      children: []
    });

    pvSiteCreationFolder.children.push({
      displayName: 'Facility',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Z8OipQC18', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Z2ndGY0oZEs', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.ypSiECKpWFc', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.NwkmhwfB24'],
      children: []
    });

    pvSiteCreationFolder.children.push({
      displayName: 'Ruin',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.KMkTskfKn0', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.7xeQevTXwvs', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.NY82oz1Xas', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.5uCkIiLTPck'],
      children: []
    });

    let pvOtherTablesFolder = pvFolder.children.find(c => c.displayName === 'Other Tables');

    pvOtherTablesFolder.children.push({
      displayName: 'Robot/Droid',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.AQqeuv5cJpo', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.F8Gdvcr1o9g'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Spaceship',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.SlpUXUDJpk8', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.VOAqeYA28NY'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Artifact/Gadget',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.7EU8yU6dsls'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Technobabble',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.6h4vnZPC1Z8'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Detail',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.83wlG7tm6E', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.Qc7MLKMPN7w'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Names - Star/Satellite',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.njMYZedTM1Y', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.arlBabHUfPg'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Names - NPC',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.eiiNfU9iEqg', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.p3IXR7Y6vCU'],
      children: []
    });

    pvOtherTablesFolder.children.push({
      displayName: 'Names - Settlement',
      tables: ['Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.RlFFNCGytCw', 'Compendium.ironsmith-expanded-oracles.perilousvoidoracles.RollTable.bMJTi8LN3Tk'],
      children: []
    });

      CONFIG.IRONSWORN.registerOracleTree('classic', ironswornOracles)
    }

    if (game.settings.get('ironsmith-expanded-oracles', 'enableOraclesInTree') && game.settings.get('foundry-ironsworn', 'ruleset-delve')) {
      const ironswornDelveOracles = CONFIG.IRONSWORN.getOracleTree('delve');
      let characterDelveIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Character"));
      let combatEventIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Combat Event"));
      let featureIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Feature"));
      let monstrosityIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Monstrosity"));
      let siteNameIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Site Name"));
      let siteNatureIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Site Nature"));
      let threatFolder = ironswornDelveOracles.children.find(children => children.displayName === "Threat");
      let threatIndex = ironswornDelveOracles.children.indexOf(threatFolder);
      let trapIndex = ironswornDelveOracles.children.indexOf(ironswornDelveOracles.children.find(children => children.displayName === "Trap"));

      ironswornDelveOracles.children[characterDelveIndex].children.push(
        {
          displayName: 'Activity (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.z6cLE8xcEJrMsAxw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BnJrpltTMViHnKij', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v0FEnJaeFlqIwWJK'],
          children: []
        },
        {
          displayName: 'Disposition (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.RhiwducU2pTCRDpO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nQxUi6cxbs0anJuF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YoyegDVPzdgZlfod'],
          children: []
        },
        {
          displayName: 'NPC Plot Knowledge: Type of Information',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Pb44yFq76PYRCCRJ'],
          children: []
        },
        {
          displayName: 'NPC Plot Knowledge: Topic of Information',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NStSbQ2gmzTDqo0L'],
          children: []
        },
        {
          displayName: 'NPC Random Conversation',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HUR4ToDsdKdAGaPz', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vYA5T9SXEUW7H75S', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Wx0riTQFaJY4qkpT'],
          children: []
        }
      );

      ironswornDelveOracles.children[combatEventIndex].children.push(
        {
          displayName: 'Method (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xliEy6IezB6Bno7T', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6HUJFolkmKLBvzPH', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yvLw77aZig7EJJPx'],
          children: []
        },
        {
          displayName: 'Target (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.kucYoF4358jhz0Cz', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7FMrmLEQ4GFfaIdu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LVErdQdZ6wJwgNYZ'],
          children: []
        }
      );

      ironswornDelveOracles.children[featureIndex].children.push(
        {
          displayName: 'Aspect (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.hpoqnqHIaVXe6xJT', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.dgIrmGVgKvcKYQff', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mnRmkA94Tij5BiQW'],
          children: []
        },
        {
          displayName: 'Focus (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CM8P7j8n09FH2vOr', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HJvSyTKZOxE83Cay', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.TOVkN9NX0L4WZSIR'],
          children: []
        }
      );

      ironswornDelveOracles.children[monstrosityIndex].children.push(
        {
          displayName: 'Abilities (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bI1vxrBufRBT4PRj', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vHLJvnArJTh9225H', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KrjbJ2tGREqy4OdA'],
          children: []
        },
        {
          displayName: 'Characteristics (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O4dEGP4ikd9ocEQw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AKYmmmlJcclQiZdU', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.C3T2kwpfYIIBDdfM'],
          children: []
        }
      );

      ironswornDelveOracles.children[siteNameIndex].children.push(
        {
          displayName: 'Description (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Lygijrdg2NzxgkQ1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.36B9sm7STm0QEYvB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FajXAPiGGK8pqwco'],
          children: []
        },
        {
          displayName: 'Detail (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fKLvNV5BMJOjo9uv', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NoQGq3pexEnM5tEf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.IUY5ENgMBCAVPZjt'],
          children: []
        },
        {
          displayName: 'Namesake (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BSGn5DoO8ICY9izW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0XtsRTioC8bORRLj', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tEfTWNSwL4yyaqyB'],
          children: []
        }
      );

      ironswornDelveOracles.children[siteNatureIndex].children.push(
        {
          displayName: 'Danger Result',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.573pKijUJwXRG7zC'],
          children: []
        }
      );

      ironswornDelveOracles.children[threatIndex].children.push(
        {
          displayName: 'Undead Uprising',
          tables: [],
          children: []
        }
      );

      let undeadUprisingIndex = threatFolder.children.indexOf(threatFolder.children.find(children => children.displayName === "Undead Uprising"));

      ironswornDelveOracles.children[threatIndex].children[undeadUprisingIndex].children.push(
        {
          displayName: 'Accompanying Signs or Portents',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.c0WAvr6LfO26h8KK'],
          children: []
        },
        {
          displayName: 'The Undead...',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BP9WsByry6CtzdUl'],
          children: []
        }
      );

      ironswornDelveOracles.children[trapIndex].children.push(
        {
          displayName: 'Event (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.x2qnlYMpEzgFKvgQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pjF73BawRFEADf2L', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fm5KeFVhzwXnGeI4'],
          children: []
        },
        {
          displayName: 'Component (Ironsmith)',
          tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yCJvciPpUDzcaCFJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WSRH34rRo466Huhi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YVI30QuI41hFScny'],
          children: []
        }
      );
      CONFIG.IRONSWORN.registerOracleTree('delve', ironswornDelveOracles)
    }
  }
});
