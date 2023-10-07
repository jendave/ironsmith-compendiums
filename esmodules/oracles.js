Hooks.once("init", async () => {
  // CONFIG.debug.hooks = true;
  const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);
  console.log('ironsmith-expanded-oracles | Initializing Ironsmith Expanded Oracles');
  game.settings.register('ironsmith-expanded-oracles', 'enableOraclesInTree', {
    name: 'Enable Oracles in Default Tree',
    hint: 'Enable Oracles in the character sheet tree.',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
    onChange: debouncedReload
  });
});

Hooks.once("ironswornOracleTreesReady", async () => {
  if (game.settings.get('ironsmith-expanded-oracles', 'enableOraclesInTree')) {
    const ironswornOracles = CONFIG.IRONSWORN.getOracleTree('ironsworn')

    let actionThemeIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Action and Theme"));
    let placeIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Place"));
    let settlementFolder = ironswornOracles.children.find(children => children.displayName === "Settlement");
    let settlementIndex = ironswornOracles.children.indexOf(settlementFolder);
    let characterIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Character"));
    let nameFolder = ironswornOracles.children.find(children => children.displayName === "Name");
    let nameIndex = ironswornOracles.children.indexOf(nameFolder);
    let ironlanderNameIndex = nameFolder.children.indexOf(nameFolder.children.find(children => children.displayName === "Ironlander"));
    let otherNameIndex = nameFolder.children.indexOf(nameFolder.children.find(children => children.displayName === "Other"));
    let turningPointIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Turning Point"));
    let movesIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Moves"));
    let featureIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Feature"));
    let siteNameIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Site Name"));
    let siteNatureIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Site Nature"));
    let monstrosityIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Monstrosity"));
    let trapIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Trap"));
    let combatEventIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Combat Event"));
    let threatIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Threat"));

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
    let monsterHuntingIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Monster Hunting"));

    ironswornOracles.children.push({
      displayName: 'Other',
      tables: [],
      children: []
    });

    let otherFolder = ironswornOracles.children.find(children => children.displayName === "Other");
    let otherIndex = ironswornOracles.children.indexOf(otherFolder);

    ironswornOracles.children.push({
      displayName: 'Vows',
      tables: [],
      children: []
    });

    let vowsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Vows"));

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
        displayName: 'Activity (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.z6cLE8xcEJrMsAxw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BnJrpltTMViHnKij', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v0FEnJaeFlqIwWJK'],
        children: []
      },
      {
        displayName: 'Descriptor (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PHizkEMpEbuqf8hu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aH2sdteUcR31gAwA', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6XVC7djd7VbPXc4Z'],
        children: []
      },
      {
        displayName: 'Disposition (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.RhiwducU2pTCRDpO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nQxUi6cxbs0anJuF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YoyegDVPzdgZlfod'],
        children: []
      },
      {
        displayName: 'Goal (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yFfQTBg7tyc72s4m', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.T6g89mwSUrONdy9Q', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HVcyCucZYQlq0vyS'],
        children: []
      },
      {
        displayName: 'Role (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.THyqvtvnpMAmghzY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vVIwIneKy2NoNOQg', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KZJjCsHBHbejeiUe'],
        children: []
      },
      {
        displayName: 'Random NPC Conversation (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HUR4ToDsdKdAGaPz', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vYA5T9SXEUW7H75S', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Wx0riTQFaJY4qkpT'],
        children: []
      },
      {
        displayName: 'NPC Plot Knowledge: Type',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Pb44yFq76PYRCCRJ'],
        children: []
      },
      {
        displayName: 'NPC Plot Knowledge: Topic',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NStSbQ2gmzTDqo0L'],
        children: []
      }
    );

    ironswornOracles.children[combatEventIndex].children.push(
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

    ironswornOracles.children[featureIndex].children.push(
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

    ironswornOracles.children[monsterHuntingIndex].children.push(
      {
        displayName: 'Dominant Attitude of the People',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.QraukbOe9Pfzkc8A'],
        children: []
      },
      {
        displayName: 'End the Fight Hit',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cawiYHA3nGux8Vqu'],
        children: []
      },
      {
        displayName: 'End the Fight Weak Hit But',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fkf5NivRTBPEBpAt'],
        children: []
      },
      {
        displayName: 'How People Tried to Stop It',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PoWbQ8Uk0Atcv9Vu'],
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
        displayName: 'Monster Weakness',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.T7lgfm3nB9LSdylF'],
        children: []
      },
      {
        displayName: 'Mounting Pressure But',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tG9ntqjZ7telppCh'],
        children: []
      },
      {
        displayName: 'Mounting Pressure Getting Worse',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gU6PnSSv4FYOpHoF'],
        children: []
      },
      {
        displayName: 'Mounting Pressure Monster Desire',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZQifTar4YBtXBrVN'],
        children: []
      },
      {
        displayName: 'Secret Action Anti-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PF4xccosi4ygZoGZ'],
        children: []
      },
      {
        displayName: 'Secret Actor Anti-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SX6MdGYhmcpgwLcu'],
        children: []
      },
      {
        displayName: 'Secret Actor Pro-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qwauXBnovP6swUph'],
        children: []
      },
      {
        displayName: 'Secret Desire Pro-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ydnEI1BXu4voqkTr'],
        children: []
      },
      {
        displayName: 'Secret Reason Anti-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0FMRdoHhJnWuBb2M'],
        children: []
      },
      {
        displayName: 'Secret Reason Pro-Monster',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Dfk5R2OodJgGdyrb'],
        children: []
      },
      {
        displayName: 'Tracking Sign',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4Z1xJ2bVOhvtcdup'],
        children: []
      },
      {
        displayName: 'Tracking Sign Age',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xOiRVGD39AUXmoiI'],
        children: []
      },
      {
        displayName: 'What the Monster Did',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1jSxbgVP1CWKB1TS'],
        children: []
      }
    );

    ironswornOracles.children[monstrosityIndex].children.push(
      {
        displayName: 'Characteristics (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O4dEGP4ikd9ocEQw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AKYmmmlJcclQiZdU', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.C3T2kwpfYIIBDdfM'],
        children: []
      },
      {
        displayName: 'Abilities (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bI1vxrBufRBT4PRj', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vHLJvnArJTh9225H', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KrjbJ2tGREqy4OdA'],
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
        displayName: 'Elf (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.07G5YDSICG6bzvZh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oFDnPxngEFi3qizJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SR8tFMNinEZd6cST'],
        children: []
      }
    );

    ironswornOracles.children[nameIndex].children[ironlanderNameIndex].children.push({
      displayName: 'Name (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LSzwTeXOlkD4gcVQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XUwc7RnBYd1P2N7a', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xBtTZG2MrbV3cTDm', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ljs00zet8pjD7L2v', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YZKNVYhwZ83phfOs', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4N7heVltOaujzsTw'],
      children: []
    });

    ironswornOracles.children[nameIndex].children[otherNameIndex].children.push({
      displayName: 'Giants (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EasTpUDnAM31kppk', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AUGsgaVKXIDqJfFS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.r5wRlli3cZiK1IRt'],
      children: []
    });

    ironswornOracles.children[nameIndex].children[otherNameIndex].children.push({
      displayName: 'Varou (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Q3mlTJFiHve677Yi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZqxqShnZE1DT6Dbu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DtSXLiHqaYXw9ToW'],
      children: []
    });

    ironswornOracles.children[nameIndex].children[otherNameIndex].children.push({
      displayName: 'Trolls (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YVB9XrzSH23E1ovW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4vGEd9VVi9D4hNNh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.e6yU3tDaOcTxOnQJ'],
      children: []
    });

    ironswornOracles.children[otherIndex].children.push(
      {
        displayName: 'Items of Narrative Significance',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5gw54UqRJ4SY6YcS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AU81rQndvWGiwS3z', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pDuUGjRBixDzDaQW'],
        children: []
      }
    );

    ironswornOracles.children[otherIndex].children.push({
      displayName: 'Threat',
      tables: [],
      children: []
    });

    let threatOtherIndex = otherFolder.children.indexOf(otherFolder.children.find(children => children.displayName === "Threat"));
    
    ironswornOracles.children[otherIndex].children[threatOtherIndex].children.push({
      displayName: 'Undead Uprising',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BP9WsByry6CtzdUl'],
      children: []
    });

    ironswornOracles.children[otherIndex].children[threatOtherIndex].children.push({
      displayName: 'Undead Uprising Accompanying Sign or Portent',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.c0WAvr6LfO26h8KK'],
      children: []
    });

    ironswornOracles.children[placeIndex].children.push(
      {
        displayName: 'Coastal Waters Location (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uS3xYNahiV8c1IvM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NnYeEA7e3W2VNPRX', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GevfByTd4FIrfGpb'],
        children: []
      }
    );

    ironswornOracles.children[placeIndex].children.push(
      {
        displayName: 'Location (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0SMbpiwJm9DVdAt3', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HQtRLJQiwZxWdwVe', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WdXJXroTleYqGCB9'],
        children: []
      }
    );

    ironswornOracles.children[placeIndex].children.push(
      {
        displayName: 'Location Descriptor (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OanBZ1XU4wBasNTq', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Vgvk7NlpFRX6MqeB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.j2WjbFYOk2lAxTlH'],
        children: []
      }
    );

    ironswornOracles.children[settlementIndex].children.push(
      {
        displayName: 'Trouble (Ironsmith)',
        tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.65PrMkMABgeLp38A', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Ox77HXdyqrgusrgF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KNPxDJkiX6910Isy'],
        children: []
      }
    );

    let quickNameSettlementIndex = settlementFolder.children.indexOf(settlementFolder.children.find(children => children.displayName === "Quick Name"));
   
    ironswornOracles.children[settlementIndex].children[quickNameSettlementIndex].children.push({
      displayName: 'Prefix (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FCgTE2Sf347vIaDH', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4EKgKcoP8X39ZeCf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7Ead251QYGsRgiDW'],
      children: []
    });

    ironswornOracles.children[settlementIndex].children[quickNameSettlementIndex].children.push({
      displayName: 'Suffix (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.e4LpLkGUpbkjqyUf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.TvEDIwozXApM4OdH', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KBLFiYJ2c0JdAvaK'],
      children: []
    });

    CONFIG.IRONSWORN.registerOracleTree('ironsworn', ironswornOracles)
  }
});
