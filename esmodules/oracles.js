/*
# [0] Character Creation Uylg7OA7KprzNn9j
# [1] Characters EDUYGoTtXEMkKKvh
# [2] Core SW9eKiLhIBf4c0Km
# [3] Creatures RSG7ksc1DxCTpccr
# [4] Derelicts zBzW0zEkqjmtSZrH
# [5] Factions h07LKcgdKeSsWGQ2
# [6] Location Themes HhkNFM4BelwaXHfB
# [7] Misc EZdpqOZMdqwGsU7q
# [8] Moves 6cVVQY9tOQiVInzx
# [9] Planets xJpOuGNKKjAVrR3q
# [10] Settlements M0bP1WUZxPqCOHJS
# [11] Space 9aKg1x9pvKGwheVZ
# [12] Starships aO8e4enqhqWw25H6
# [13] Vaults N2sObuKzWFZ5LEU2
*/

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

    let derelictsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Derelicts"));

    ironswornOracles.children.splice(derelictsIndex + 1, 0, {
      displayName: 'Districts',
      tables: [],
      children: []
    });

    let characterCreationIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Character Creation"));
    let charactersIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Characters"));
    let coreIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Core"));
    let creaturesIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Creatures"));
    derelictsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Derelicts"));
    let districtsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Districts"));
    let factionsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Factions"));
    let locationThemesIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Location Themes"));
    let miscIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Misc"));
    let movesIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Moves"));
    let planetsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Planets"));
    let settlementsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Settlements"));
    let spaceIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Space"));
    let starshipsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Starships"));
    let vaultsIndex = ironswornOracles.children.indexOf(ironswornOracles.children.find(children => children.displayName === "Vaults"));

    let charactersFolder = ironswornOracles.children.find(children => children.displayName === "Characters");
    let nameCharactersIndex = charactersFolder.children.indexOf(charactersFolder.children.find(children => children.displayName === "Name"));

    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Access',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Community',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Engineering',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Living',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Medical',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Operations',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Production',
      tables: [],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Research',
      tables: [],
      children: []
    });

    let districtsFolder = ironswornOracles.children.find(children => children.displayName === "Districts");
    let accessDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Access"));
    let communityDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Community"));
    let engineeringDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Engineering"));
    let livingDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Living"));
    let medicalDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Medical"));
    let operationsDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Operations"));
    let productionDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Production"));
    let researchDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Research"));

    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Arid',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Chronal',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Floating',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Flooded',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Frozen',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Inferno',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Lifeform',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Mystical',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Overgrown',
      tables: [],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'War Zone',
      tables: [],
      children: []
    });

    let locationThemesFolder = ironswornOracles.children.find(children => children.displayName === "Location Themes");
    let aridlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Arid"));
    let chronallocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Chronal"));
    let floatinglocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Floating"));
    let floodedlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Flooded"));
    let frozenlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Frozen"));
    let infernolocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Inferno"));
    let lifeformlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Lifeform"));
    let mysticallocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Mystical"));
    let overgrownlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Overgrown"));
    let warZonelocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "War Zone"));

    let planetFolder = ironswornOracles.children.find(children => children.displayName === "Planets");
    let desertPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Desert"));
    let furnacePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Furnace"));
    let gravePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Grave"));
    let icePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Ice"));
    let jovianPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Jovian"));
    let junglePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Jungle"));
    let oceanPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Ocean"));
    let rockyPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Rocky"));
    let shatteredPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Shattered"));
    let taintedPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Tainted"));
    let vitalPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Vital"));
    let perilPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Peril"));
    let opportunityPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Opportunity"));

    let spaceFolder = ironswornOracles.children.find(children => children.displayName === "Space");
    let sightingSpaceIndex = spaceFolder.children.indexOf(spaceFolder.children.find(children => children.displayName === "Sighting"));
    let sectorNameSpaceIndex = spaceFolder.children.indexOf(spaceFolder.children.find(children => children.displayName === "Sector Name"));

    let starshipsFolder = ironswornOracles.children.find(children => children.displayName === "Starships");
    let missionStarshipsIndex = starshipsFolder.children.indexOf(starshipsFolder.children.find(children => children.displayName === "Mission"));

    let vaultsFolder = ironswornOracles.children.find(children => children.displayName === "Vaults");
    let interiorVaultsIndex = vaultsFolder.children.indexOf(vaultsFolder.children.find(children => children.displayName === "Interior"));
    let sanctumVaultsIndex = vaultsFolder.children.indexOf(vaultsFolder.children.find(children => children.displayName === "Sanctum"));

    ironswornOracles.children[derelictsIndex].children.push({
      displayName: 'Outer First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mLDIiGSS9a6Stemt', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BHZagLL8FdIy9YcF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uW58pJGwNVqUKWh0'],
      children: []
    });

    ironswornOracles.children[derelictsIndex].children.push({
      displayName: 'Inner First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PRqTRLRonCe8QJPt', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SDJ8MbwiUzwrgqgS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.kRKzDv4anjxlaqzy'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children.push({
      displayName: 'Zones',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nUFEtdo8YAyJs0Qp'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[accessDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aSjZRfT6EHRM31QA'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[accessDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SikQ2DDDW9EziJu3'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[accessDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.9wn19PGDzUPZ0WYZ'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[accessDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4Dp4wHxjlsAt4lt7'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[communityDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4wVqFfxiMfxdj0oe'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[communityDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Xw44xq8doKvVmMuU'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[communityDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DZ9Kg7DYxnSGARKp'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[communityDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZNrrr54PJP2qLSjJ'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[engineeringDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vOp4EtWnZwtkVOM4'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[engineeringDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NAjhJFfOfnI4RUhG'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[engineeringDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0n1W7xeDuAVmLvNx'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[engineeringDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YThREKgerZp3np4n'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[livingDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.n7A455CGVfpjJmJi'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[livingDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0XWUJFkDOKtYBGpe'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[livingDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eLfhvpqzGzQTwkoz'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[livingDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7A3TS1p0xJx9O8Ws'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[medicalDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WBCxyfoLNtzvELvC'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[medicalDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qlLVFSJQFchy8GtD'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[medicalDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cNwrs8hGV1Y3duZ2'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[medicalDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.93LcFghu4VA3VTmW'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[operationsDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4AJ3CSAW3R38267w'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[operationsDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vaQHHuBfLrQvUWqe'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[operationsDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FJ3pwO45zt7McRK9'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[operationsDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XplkuU7q0umRy0ST'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[productionDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DvXahtGuzoYnWYDZ'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[productionDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.G1kgbuN1Cimyz0SE'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[productionDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6LLdhY15KByiIv8q'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[productionDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Y72fnZxkJlhDKUAY'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[researchDistrictsIndex].children.push({
      displayName: 'Area',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ejV4G8ApVQPPCSg4'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[researchDistrictsIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Sd4YeQHAaF4HdMKy'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[researchDistrictsIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3wgJC3d2grqpsm5I'],
      children: []
    });
    ironswornOracles.children[districtsIndex].children[researchDistrictsIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Tdq9XQsqjUo2iE3G'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[shatteredPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0ccW0eVajV4NENbZ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fJV0agGCQh7hfzW8', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.VD3Q2RTuFjSouslM'],
      children: []
    });;
    ironswornOracles.children[planetsIndex].children[shatteredPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.K74TKszI8T8HTUId', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XlUqt5BZzlHelXVu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DsGW7fo4iF64qhWf'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[shatteredPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0gKPLApYlwxPhSaE', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YV6Aysnedk3A7tfo', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.kdHE1vWwFy5TRxqN'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[icePlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Uq1ybjzg3WVNH50Q', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.fTHisJyGql8gcVuC', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2bbW8GapNrUbkBiD'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[icePlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3eZVI73pFd2Vq1Vn', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wUhTOw2fAMtUYXUn', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pma1szGfHplWS97Q'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[icePlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JrTmSctB5pxFZJyb', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.S04gzGykXCDArYhc', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.m41bieZDQIJBVVbB'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Location (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tKaPKKmKhxcgYflc', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wJNYFJsFMbCW8F0L', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7utFAc8SiMTnUDyW'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4mtNdMOiPAWeLe1P', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.c6A4BvsaG6NOJdzf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.VWKvi551JyShfjh0'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Initial Contact (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ybOIRl97yeUfvAtM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NDOz35Zb8qn96VKd', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CnErGVHLpgxKqNTB'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Authority (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aI2wtdKOQvG0pZBY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eKDmSpdyzwRM7ydc', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.zMTlB0xQZyEc8PtQ'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Projects (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.iJbLrynKmB25yxKu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wPh8ecvQZvyebiE0', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tNudiYQ7dnUpeONr'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Trouble (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.rd2ZCaZFUEhca5lp', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LpumgIbgDG8wRdso', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.W6VGcvzStPUK4Yyc'],
      children: []
    });
    ironswornOracles.children[settlementsIndex].children.push({
      displayName: 'Name (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.G6mXIbtSkacs9660', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.iZtujTpGpTw5tMO4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ce7JLAwBAGqLYgHo'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[interiorVaultsIndex].children.push({
      displayName: 'First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CJlBnWFAMRRSD2XK', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.otjCnngJ1Yw74rjt', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7c2TaEWTUaaJlOdG'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[interiorVaultsIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GiMZuPESMrzCW4sO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JAM3ft7utYoihnlf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0DWXYSJfD5kotHW3'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[interiorVaultsIndex].children.push({
      displayName: 'Peril (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4DINDAOyS576i0uC', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CO2a43NmZ4Ui8KHr', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O7AobPhngMyKVX0u'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[interiorVaultsIndex].children.push({
      displayName: 'Opportunity (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FKcW0ngd4tAteFul', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Q0CvTCMrIsZJPjW4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.h9DmNX5Hw3OyNrB6'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[sanctumVaultsIndex].children.push({
      displayName: 'Purpose (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.hbSxvEVDrXKp3nfh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.f11tgzgGHAk3EF5H', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jB7Jc9SEkxuhlH2g'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[sanctumVaultsIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tMI4HdhdS3uPcQ7A', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.GA2VJG2Z4Pud10Xj', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lMMPTGXOGCxKHj1n'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[sanctumVaultsIndex].children.push({
      displayName: 'Peril (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.U3zbLYTj8aYT7jZ5', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.C3UBEjh7hWTgY16S', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.E9NXVGkiTpxDLadk'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children[sanctumVaultsIndex].children.push({
      displayName: 'Opportunity (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6wZ3tNjg9YB24ksU', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.m2fmYWlfXiAkiGJM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jNZY2f4GGlhdTxwj'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children.push({
      displayName: 'Form (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qp0q4hCncEEwFmzJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OnrAyLWl8O4X07DO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bVzSFWwcuPrZnzRI'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children.push({
      displayName: 'Shape (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ug2VXU0gTErEpqjW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EOUhqXJNMURqmZ23', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XfLeKTFTNoNHJeFk'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children.push({
      displayName: 'Material (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5w7WAG73eRo6P0BO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.h7OkPCGMJmUncIJb', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.c5wad4ZSEmOKIbV0'],
      children: []
    });
    ironswornOracles.children[vaultsIndex].children.push({
      displayName: 'Outer First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.zfHAVw0GLCDpURvp', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8FM5A0pW9nomPpFW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v3VP3uJAEm5ILL8l'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Type (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jrxDHQYEuB6XayQB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tvatzl8nPjjuAAgm', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jAQFBWOxlwoqbkvz'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Dominion (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SR2UXvMKVawDqzk4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AQ1jgsUYuEhA12Ju', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CgfxgI13aErxbXod'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Leadership (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eAqohSRwBWwx7uy5','Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.A6v2rLoWS3xEAtam', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.StGZjdeejoYDZFLN'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Guild (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.k3ylcTmv45qOhxMM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.39brIk5GOHXK0Gqw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PDnjZEt9uprBcXoY'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Fringe Group (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mhQqIfHi4ldU6lk3', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.UE6b4kAluQqrAGUO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yjYdyPveqyWUOgwF'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Corporation: Field',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FDvT6fPqV2zshZRQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HvKV3pycO2gyqB92', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KAFl5CXZdfKUmt9J'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Research: Field Of Study',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AVjqygbVDncdAY0P', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.u1MRVAikLO9ZUn05', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.IQxQ2I356Vz0TSGB'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Projects (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OwLUXvgCKzKEa1wr', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.69hcmdT5pjf2F1IU', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7VdNGiCm6peWzLMr'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Relationships (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Lh2QRYQ2jkRnEI4m', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tlrca4lQsFIZ8IwZ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tRYvWAQqU7xkpJYu'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Legacy (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JQlTpghFQFXDskkS', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.IHGdTmOVN1zloqmM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.h9jxuC70RIV2YYod'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Affiliation (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Xl7mEaAISq6I8Q9x', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DkdxtOPf0Kk45pIe', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1N106p7YNKKWr7HI'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Identity (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LhqLvU4wD2bZEicK', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OAITk7XvPcUBdDih', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Yyi071quFTMjRybK'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Quirks (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.000XYhjOoHW6hKAP', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.P1Z2tq2DiGNUalkD', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bQjrwSHHyHC4BLNc'],
      children: []
    });
    ironswornOracles.children[factionsIndex].children.push({
      displayName: 'Rumors (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DOLQckJPOzfE8JzY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yqA6hSUhfIGURMR2', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6hXWxSEdrjiY7K7f'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Registry Number Initials',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.byBI6d46QtVH1goo'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Registry Number Model',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZlVBOz7v2GzEuXtW'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Type (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LOqba6VziVXZDj0W', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tioleBB8HuEWvzTi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pBfCCKylt1qhAoPI'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Fleet (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oC3tS7XQnb0aF5bo', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.VVwHG9fOYRad8p7o', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8Lxuj8yNMgwbWIRo'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Initial Contact (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7bD2a8NrVeBXnlpJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.s9jstF4qimhTSDOT', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Zp5JgqKSBul72P88'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0L6dlLeVLJkMXhzY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.9T2TFppaaAgFrT61', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.W0QM0miRxvJmVp2H'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children[missionStarshipsIndex].children.push({
      displayName: 'Terminus (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.svjsxDT4R9rSH8YE', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qd4UyfLFc16vUkEt', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.R3sSKQGqhjScKvsB'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children[missionStarshipsIndex].children.push({
      displayName: 'Outlands (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qCcHtfV0mIRKLQvp', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8AY3xj8qpFIVfpak', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.g6wu6JxaxGRjpNoY'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children[missionStarshipsIndex].children.push({
      displayName: 'Expanse (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.VirDtYNEzhVFJ1ei', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eqAJAIUVoWx2blcp', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wjJ8Qd2skumxAFNI'],
      children: []
    });
    ironswornOracles.children[starshipsIndex].children.push({
      displayName: 'Name (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6KaSYbplCYJ89v6C', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lXErrHKlwhOZooyR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mJg13l6dbjIX8etC'],
      children: []
    });
    ironswornOracles.children[creaturesIndex].children.push({
      displayName: 'First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.B639ZC5GB4q8pjr1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gUUm4VyBeD9TAxBk', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.K0dEKmbAL3UIV0hG'],
      children: []
    });
    ironswornOracles.children[creaturesIndex].children.push({
      displayName: 'Encountered Behavior (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lKHbFR2SJbazZyMM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LcRLOp7oBP2zOiIT', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xOro3zYQOldpg6oK'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'First Look (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.guv5iEDeLijYuABa', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oTECxhDPRJJ3yUvh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.MsQ7rPo2gDyVIQEE'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'Disposition (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Lu30o0Mx9Arwipnw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.rdlIztz01R6NIJKy', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gaRwLNFfm30VzuRo'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'Role (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O5x9KiSkoNAVXW6O', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.VEL6LI4wBzI8eb7z', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.437mrjVAePTQZGYv'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'Goal (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2xxntLbzYGLZ2cao', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oLDINu3MLyDgABhD', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aqapGyFUQ1Jj9uQl'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'Revealed Aspect (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5JUVkMmXuH74WBUv', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JhY6HtE1X1xSAJW5', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cFmnWNEUaw8Lf3Qg'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children[nameCharactersIndex].children.push({
      displayName: 'Given Name (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.UnTcBB8gwFjNoT9O', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.dXJhMhBt7J2FtCVh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5acO6ocnsJerpEkI'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children[nameCharactersIndex].children.push({
      displayName: 'Callsign (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0zs4jV8AgYw1GaVB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.iBgIwzZGGKTuCGpR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vUTgxJRCAbApAZgi'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children[nameCharactersIndex].children.push({
      displayName: 'Family Name (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6pv2fJdPmbl6HDGR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v5XqY7qSbXRuBIDR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lQR1PUQksmjUX2Fd'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'Random NPC Conversation (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DxF8KMERydgfvtsQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xbNILPSGc3KQxIKD', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1y69WUZsUjvYL5om'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'NPC Plot Knowledge: Type',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DA4SVnbbEzYCRIpf'],
      children: []
    });
    ironswornOracles.children[charactersIndex].children.push({
      displayName: 'NPC Plot Knowledge: Topic',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.JEj8oBuwhiEFg5qM'],
      children: []
    });
    ironswornOracles.children[movesIndex].children.push({
      displayName: 'Make A Discovery (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.N40PkK7FvfOOgWd1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SfSqdbh63oluomwR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7q5Ex4s960gtaunC'],
      children: []
    });
    ironswornOracles.children[movesIndex].children.push({
      displayName: 'Confront Chaos (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.CJzOOTMuY0ybXS2U', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gdSfOA4kll28YIAF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5kFcmtFv9P2GRH8s'],
      children: []
    });
    ironswornOracles.children[movesIndex].children.push({
      displayName: 'Pay The Price (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LEycAF6bXh6vOJ05', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jnBW4rcekjOFL5DL', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uUtEx6wDCzRhMDth'],
      children: []
    });
    ironswornOracles.children[coreIndex].children.push({
      displayName: 'Action (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OSpHuphKhIOcJy6e', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EdMDbQ2rvj1kjsVw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.P2eGB9bEuZtwAQxq'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children.push({
      displayName: 'Theme Type (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.PnbyoxQfgZdQ3AiU', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LFxOkncnKTFTisw3'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[aridlocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LfXTtfdk79cjfExo'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[aridlocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nBvFLLQmvnCvBApN'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[aridlocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qB6VRHyHz8h9UVAg'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[chronallocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.E3FNowqcuhoPBfO0'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[chronallocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aPKWBWjBMujwlLkO'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[chronallocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LUu4dLLMs5kXPDEe'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floatinglocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0cb49aXSgIa3bzrK'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floatinglocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HTFxriwbDFoMcYLW'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floatinglocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AtqoQOiHw2S4sbUd'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floodedlocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.X0BVY0u1oEFvyrzx'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floodedlocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.74ke9AgaF8XXelLr'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[floodedlocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O39GKpnyMuyam9pl'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[frozenlocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ZqubM8Y5GsmhsaKj'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[frozenlocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3uVKQgKm3EmY7n8T'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[frozenlocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.dr075E2JijU2kCFz'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[infernolocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.qDumRuCiRh386guP'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[infernolocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FWkBb1FiTgjbJZyu'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[infernolocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xdvA8s2XoL7eKI7O'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[lifeformlocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.oDv2cXFa85vpTDVr'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[lifeformlocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yprDpKuUVhNBpGYK'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[lifeformlocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nQO4HP5VjRmCvb81'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[mysticallocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ubR5MCShmCM98tN6'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[mysticallocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.s9DxdLwfESICjln5'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[mysticallocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4C5yA2j3JjxOQfNc'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[overgrownlocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Z1uRFYQVc71TBfQ0'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[overgrownlocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NnQj1XGs3MgeAdha'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[overgrownlocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LJTBPHnLEvjBF4ku'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[warZonelocationThemesIndex].children.push({
      displayName: 'Feature',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.H1G8RPwsZSNB9w9m'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[warZonelocationThemesIndex].children.push({
      displayName: 'Peril',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7OWQYSOYnTGTHS1w'],
      children: []
    });
    ironswornOracles.children[locationThemesIndex].children[warZonelocationThemesIndex].children.push({
      displayName: 'Opportunity',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XZTTvhEtcmJ08Cin'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[jovianPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.w5yprOoOTFfjZjZj', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Vh4sPOoSMhQK1Mvs', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.TMaAUj4wwzIRZu5o'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[jovianPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gV7Wxz4tmajgxe54', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.yergAChxtcH7BcKf', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EqSN5ENCg0MqyoCP'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[jovianPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.kqNvGwKvGSC0jmtx', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.axzyF0OuGXwVzhmh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6qKWL6r9sN5h4fHg'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WF7PRchsM9oevTjM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YdzwvZU2wgPhmQ7d', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.UZEhVGNsNKw67juE'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jhnjSjXc9PmfTMd4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uE01iOVQTLPPTdoB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nQyQUAuGZkemZtLh'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.imKbV7dPHMQ4awnO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eBsfgJ5xK9YNVxoB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.t4NRCKhjxiKFpELH'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Quick Flora Plant Type',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uWrqooiiEMOBJ4Jw'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Quick Flora Characteristics',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NtsgKYiw3MDWIRCY'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[vitalPlanetIndex].children.push({
      displayName: 'Quick Flora First Look',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.7JNNleZeFXvXs9Yv'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[desertPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Lfk0gDNUJecpYuRi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.60DIGlrsawAmJuYR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wfVw6xyf8BY0Fmkw'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[desertPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.EjrmKEYy4ESfBo7C', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.UgIpgaYYzFkd424z', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bW8E38iRkmFPXJU8'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[desertPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BdbEFPelmQqkGDxs', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.a8S9E1HghcsyxTjX', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.MVnD2orENFUEJrOU'],
      children: []
    });
    ironswornOracles.children[coreIndex].children.push({
      displayName: 'Theme (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mgGRUu62QCdo0n2Z', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cCXTQZgR8f8d0Ojq', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2KgRpUejv7U6Pjzf'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[taintedPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WVdSiIWYWSpIUCTN', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.cSZDLj0BqZDc4hbF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0LirTYoCP3R8Dgzt'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[taintedPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gxozVy6LZuhqjSeC', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mhrRDafdMmbZTMBq', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jtCNxmrr3miVoZvr'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[taintedPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.y1kZTpBlrThTET3H', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ynZJHvrD1MSxw3N0', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.QhVbCgtgVq1tBmPQ'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[gravePlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.BrE1gQtsBLvg9tSx', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vBC6s29505G4SVUW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.eCoLvpIQrVfmDUgO'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[gravePlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.6l5Hqitvc4RFxpra', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Lf2FvABUcYtgv6Ae', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2JAxDfpav0IlsZLK'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[gravePlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.0vFf0yYmD1Kdc9TC', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4Jqgfo9tNEmg6SiL', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.O4WIISBXLxsJdOnU'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[furnacePlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.mXE7W7P7Vll5qPo4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.gLIiu5sGdkM62Ruo', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1sLkhxEaVUaPy57w'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[furnacePlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.WIAW8H36hzbjshr0', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5esl8jSbsIyPkLZV', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.zlAXlAtOLtqIPqvr'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[furnacePlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XkWfdDGklRXgyoVW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DZ27gXKmeNZvQBq8', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.XiribiolFLhw9KcB'],
      children: []
    });
    ironswornOracles.children[characterCreationIndex].children.push({
      displayName: 'Backstory Prompts (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bROdhxvU3ConRO7w', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.iFPWcG2DSiAy1SBh', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2Mq84Jf27YJHmYac'],
      children: []
    });
    ironswornOracles.children[characterCreationIndex].children.push({
      displayName: 'Starship History (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vqKkxkHXIlUQPRJ1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aHafyXedMkIO8YAG', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8ofw7lFejvLDKsTf'],
      children: []
    });
    ironswornOracles.children[characterCreationIndex].children.push({
      displayName: 'Starship Quirks (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.MnwK7DgFqYQffQGX', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ngWfv15bDdfLoNp9', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.e8K4CQZ02BaWlPd3'],
      children: []
    });
    ironswornOracles.children[characterCreationIndex].children.push({
      displayName: 'Sector Trouble (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.65Q1iiumixImppo3', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.TOoNVdWtoACPc6uJ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.idw2Om2jWKCJtZ0F'],
      children: []
    });
    ironswornOracles.children[characterCreationIndex].children.push({
      displayName: 'Inciting Incident (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3sdEY6TacfHlzdeV', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HPjyLGuRT9orXBYO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KexJMZU3NBzMxO5F'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[oceanPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vAi4oyM0iN9Xaku3', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.jGM8ouMCAMH7a9Ac', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YFa3euIzF3Iu3EVs'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[oceanPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.raTeFRB4wM1tpaa6', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v9dpHyiCM0N18i0f', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.p8ho6XAqC9ubRJLb'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[oceanPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HJcSLbX4pAVEhTms', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Pm2jNTRrEBT2xw8g', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pfwQG72bYwf6sxwt'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[junglePlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.9wCWNV5mg80zJCzz', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8NCFv7yLKaxIjARl', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nFaY8oF7Qg0yKzQn'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[junglePlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vdR5AogzuYvRKWHo', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.2uFx0KwWCty8dBMm', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.FFmsU2Mxni5t0kAV'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[junglePlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.SMgvAe3GhveAOgOg', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.rZ9zTYxHP3s4ejZ4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ytmG9KxquuHDyL0s'],
      children: []
    });
    ironswornOracles.children[miscIndex].children.push({
      displayName: 'Story Complication (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nTUhvodHeSxWJeR5', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.C8Kw3VVvAj63jrYK', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.NEVc4gRTMwK9RKJy'],
      children: []
    });
    ironswornOracles.children[miscIndex].children.push({
      displayName: 'Story Clue (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.DTxCBCBqmiXt725r', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.4QVpJ82UxmEfapht', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.YeI3VaHANGw2Yhte'],
      children: []
    });
    ironswornOracles.children[miscIndex].children.push({
      displayName: 'Anomaly Effect (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.LDZn0zQu8ZUERzyw', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.tSkFbuKgAMurqmr2', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1JCwlvrXH5QnyceQ'],
      children: []
    });
    ironswornOracles.children[miscIndex].children.push({
      displayName: 'Combat Action (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OKjUBLf07BQt7C3P', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OnDA9kOWpOiQEjN7', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ot3tdcJQecMZcoDJ'],
      children: []
    });
    ironswornOracles.children[miscIndex].children.push({
      displayName: 'Item Of Significance (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pgeFss8cl7LDC1fO', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ONylXJvvAC9hwDmT', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lmGHgjJtjVjRZCRZ'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children[sightingSpaceIndex].children.push({
      displayName: 'Terminus (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.HAVQK27TE8slQu60', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.U07ucsEg2i6NPNVb', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.nV1RjQlEGnMChpzA'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children[sightingSpaceIndex].children.push({
      displayName: 'Outlands (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aiRMDaf1F4ZOTUZM', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.3udObEySl0mUNtbr', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.pljXdRpqxaNfzlLW'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children[sightingSpaceIndex].children.push({
      displayName: 'Expanse (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.iuepGP5QpCa8k4hu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.d3wRe8JyFn8ScAxY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.uVLY1hKVNPninkIq'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children[sectorNameSpaceIndex].children.push({
      displayName: 'Prefix (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.OBgw20hZhAlacN3n', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.1qgTxhg1qpPATkiu', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vk6vBQsstREMx9AV'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children[sectorNameSpaceIndex].children.push({
      displayName: 'Suffix (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KOB1e7oQ9qA5lZIB', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KGTJ4kSSkeyHxgZy', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.MQFMTMilYVltbR0q'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children.push({
      displayName: 'Stellar Object (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.lZotf8hb5262ZC9y', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.hwmEnxGWjNH5yxv4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KCXgXQVMkPiEkqbe'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children.push({
      displayName: 'Peril (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.G90eIxEM1jKH5YY4', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.B6tAK1uWbSAEFUKz', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aRRBZvovBw2M28CM'],
      children: []
    });
    ironswornOracles.children[spaceIndex].children.push({
      displayName: 'Opportunity (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Us6oXnDxSfqSetSL', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Poyn3CNftqVhkoeD', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.t1AOwc3lKoqF9cJ8'],
      children: []
    });
    ironswornOracles.children[coreIndex].children.push({
      displayName: 'Descriptor (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.886Dxrj4VbhJWWH8', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.8SO1JnHLK1F7sFwQ', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.02ya1SPztxDlHmV0'],
      children: []
    });
    ironswornOracles.children[coreIndex].children.push({
      displayName: 'Focus (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.zQO6QiD9dBseAj2n', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.vLrIoBVbDBjNziuq', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.s58V9HjgGqP3tmT2'],
      children: []
    });
    ironswornOracles.children[creaturesIndex].children.push({
      displayName: 'Revealed Aspect (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.se7xt3pePCsteqqW', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.n2OENgk435wG7mS1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.P0xAOu6mSQjDOQE0'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[perilPlanetIndex].children.push({
      displayName: 'Lifebearing (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.KD84vncPvRKsl4aG', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wFb1T0jnPFAxosb1', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.v8O2QC6q6nhGtDs2'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[perilPlanetIndex].children.push({
      displayName: 'Lifeless (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.n1gXDGsSkn2kDcGr', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.c32SZYjoIfPzqze6', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.xF2TW2geNXeqbFpp'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[opportunityPlanetIndex].children.push({
      displayName: 'Lifebearing (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.Trq6J1gDaYlU4bsG', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.frnLEGzyEM9CgA9B', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.P6GDb3IVTDA86AZP'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[opportunityPlanetIndex].children.push({
      displayName: 'Lifeless (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.H8uvbUai3jQTFjQF', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aGmgSngtTVR383aR', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.bdMFP8LItOBEaL9A'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[rockyPlanetIndex].children.push({
      displayName: 'Observed From Space (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.N54KUtDcuuChzF3r', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.aos2ItE40qIbg8aV', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.wX7icUFXfjt33JHV'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[rockyPlanetIndex].children.push({
      displayName: 'Feature (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.5R7eSgr0otB7ggVi', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.AtmwcrDFmiL5KiZY', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.ztBOckg0G5IMb5OX'],
      children: []
    });
    ironswornOracles.children[planetsIndex].children[rockyPlanetIndex].children.push({
      displayName: 'Names (Ironsmith)',
      tables: ['Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.n1fQSqdBI1hcsq53', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.IV7IsgbLgtpPJ0yp', 'Compendium.ironsmith-expanded-oracles.ironsmithexpandedoracles.RollTable.UDcY6Jp7nppzmlCI'],
      children: []
    });

    CONFIG.IRONSWORN.registerOracleTree('ironsworn', ironswornOracles)
  }
});
