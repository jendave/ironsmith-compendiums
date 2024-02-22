#!/usr/bin/env python

import json

original_data_file="StarsmithAssets.json"

# Colors
# Module (127 90 144) 7F5A90
# Path (63 127 170) 3F7FAA
# Companion (61 139 138) 3D8B8A
# Deed (64 131 79) 40834F

def update_ability(ability):
    if ability is None:
        return None
    ability_updated = ability
    ability_updated = ability_updated.replace("[Resupply](Moves/Recover/Resupply)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.703964b8d02355b8]{Resupply}")
    ability_updated = ability_updated.replace("[Enter the Fray](Moves/Combat/Enter_the_Fray)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.2f2ba4090b22a122]{Enter the Fray}")
    ability_updated = ability_updated.replace("[Undertake an Expedition](Moves/Exploration/Undertake_an_Expedition)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.3ff03b51f620ab26]{Undertake an Expedition}")
    ability_updated = ability_updated.replace("[Secure an Advantage](Moves/Adventure/Secure_an_Advantage)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.a2d7793b23c17489]{Secure an Advantage}")
    ability_updated = ability_updated.replace("[Hearten](Moves/Recover/Hearten)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.c2c2f31f564caa06]{Hearten}")
    ability_updated = ability_updated.replace("[Gather Information](Moves/Adventure/Gather_Information)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.13b2d777c6fb719d]{Gather Information}")
    ability_updated = ability_updated.replace("[Strike](Moves/Combat/Strike)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.ae5994ceb3cba098]{Strike}")
    ability_updated = ability_updated.replace("[Clash](Moves/Combat/Clash)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.723192c97fec4fe2]{Clash}")
    ability_updated = ability_updated.replace("[Face Danger](Moves/Adventure/Face_Danger)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.e6ed148eff82c171]{Face Danger}")
    ability_updated = ability_updated.replace("[React Under Fire](Moves/Combat/React_Under_Fire)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.d9208f9b7d827aec]{React Under Fire}")
    ability_updated = ability_updated.replace("[Advance](Moves/Legacy/Advance)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.d602da2ce0c05f2c]{Advance}")
    ability_updated = ability_updated.replace("[Heal](Moves/Recover/Heal)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.2051538f0c9d5d27]{Heal}")
    ability_updated = ability_updated.replace("[Repair](Moves/Recover/Repair)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.eece9a67d1961f70]{Repair}")
    ability_updated = ability_updated.replace("[Compel](Moves/Adventure/Compel)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.9f538fabf8998c5b]{Compel}")
    ability_updated = ability_updated.replace("[Sojourn](Moves/Recover/Sojourn)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.3de42d2d3cb78855]{Sojourn}")
    ability_updated = ability_updated.replace("[Withstand Damage](Moves/Suffer/Withstand_Damage)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.3782f1b3c8ca8b88]{Withstand Damage}")
    ability_updated = ability_updated.replace("[Lose Momentum](Moves/Suffer/Lose_Momentum)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.93d2d69b7e2b85e1]{Lose Momentum}")
    ability_updated = ability_updated.replace("[Endure Harm](Moves/Suffer/Endure_Harm)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.905205c073b09eac]{Endure Harm}")
    ability_updated = ability_updated.replace("[Swear an Iron Vow](Moves/Quest/Swear_an_Iron_Vow)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.9c9ab6a42daa96e0]{Swear an Iron Vow}")
    ability_updated = ability_updated.replace("[Endure Stress](Moves/Suffer/Endure_Stress)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.ff32c523829d6481]{Endure Stress}")
    ability_updated = ability_updated.replace("[Face Desolation](Moves/Threshold/Face_Desolation)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.ff17e67a59539df4]{Face Desolation}")
    ability_updated = ability_updated.replace("[Make a Connection](Moves/Connection/Make_a_Connection)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.05909d6310d209a6]{Make a Connection}")
    ability_updated = ability_updated.replace("[Develop Your Relationship](Moves/Connection/Develop_Your_Relationship)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.141aec8b92efd14b]{Develop Your Relationship}")
    ability_updated = ability_updated.replace("[Test Your Relationship](Moves/Connection/Test_Your_Relationship)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.8704c945023355fb]{Test Your Relationship}")
    ability_updated = ability_updated.replace("[Gain Ground](Moves/Combat/Gain_Ground)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.3f5a834fa3fea5d1]{Gain Ground}")
    ability_updated = ability_updated.replace("[Fulfill Your Vow](Moves/Quest/Fulfill_Your_Vow)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.985a5415860a99e9]{Fulfill Your Vow}")
    ability_updated = ability_updated.replace("[Ask the Oracle](Moves/Fate/Ask_the_Oracle)" , "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.bd6278f18bbd6739]{Ask the Oracle}")
    ability_updated = ability_updated.replace("[Companion Takes a Hit](Moves/Suffer/Companion_Takes_a_Hit)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.d34cdf2408cd22b6]{Companion Takes a Hit}")
    ability_updated = ability_updated.replace("[Check Your Gear](Moves/Adventure/Check_Your_Gear)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.8d9830fb825057b0]{Check Your Gear}")
    ability_updated = ability_updated.replace("[Pay the Price](Moves/Fate/Pay_the_Price)", "@UUID[Compendium.foundry-ironsworn.starforgedmoves.Item.78baa51694fe37c5]{Pay the Price}")

    return ability_updated

def parse_json_object(json_string):
    json_string = ""
    return json_string

# reading `JSON file`
with open(original_data_file,"r") as file:
   starsmith_assets = json.load(file)

for asset in starsmith_assets['Assets']:
    asset_name = asset.get('Name')
    ability_1 = update_ability(asset.get('Ability1'))
    ability_2 = update_ability(asset.get('Ability2'))
    ability_3 = update_ability(asset.get('Ability3'))
    has_clock_1 = "true" if asset_name == "Traveler" else "false"
    clock_max_1 = 6 if asset_name == "Traveler" else 4
    category = asset.get('Category')
    color = asset.get('Color')
    track_name = asset.get('TrackLabel')
    track_max = asset.get('TrackMax')
    track_value = 0 if asset_name == "Holodeck" else track_max
    track_condition_temp = asset.get('TrackCondition')
    track_condition_string = """[{ "name" : "%s", "ticked" : "false"}]""" % (track_condition_temp) if (track_condition_temp is not None and asset_name != "Traveler") else None
    print("track_condition_string: %s" % (track_condition_string))
    track_condition = json.loads(track_condition_string) if (track_condition_temp is not None and asset_name != "Traveler") else []
    track_enabled = "true" if (track_max or track_name) and asset_name != "Traveler" else "false"
    forward = update_ability(asset.get('Foreword'))
    input_item = asset.get('Input1')
    fields_temp = """[]"""
    #print(input_item)
    
    if (input_item):
        if (asset_name == "Crew Member"):
            fields_temp =  """[{"name": "Role", "value": "" }, { "name": "Name", "value": "" }]"""
            #print(fields_temp)
        else:
            fields_temp = """[{"name": "%s", "value": "" }]""" % (input_item)
            #print(fields_temp)
    
    fields = json.loads(fields_temp)

    appendix_item = asset.get('Appendix')
    exclusive_options = json.loads("""[{"name": "%s","selected": true}]""" % (appendix_item)) if appendix_item else json.loads("""[]""")

    match category:
        case 'Module':
            color = '#7F5A90'
        case 'Path':
            color = '#3F7FAA'
        case 'Support Vehicle':
            color = '#495790'
        case 'Companion':
            color = '#3D8B8A'
        case 'Deed':
            color = '#40834F'
        case 'Mech':
            color = '#4F5A69'
        case 'Mech Module':
            color = '#883529'
        case _:
            color = '#905b0d'

    asset_foundry = json.dumps({"name": asset_name, "type": "asset", "img": "icons/svg/item-bag.svg", "system": { "requirement": forward, "category": category, "color": color, "fields": fields, "abilities": [{"description": "<p>" + ability_1 + "</p>", "enabled": "true", "hasClock": has_clock_1, "clockMax": clock_max_1, "clockTicks": 0 }, { "description": "<p>" + ability_2 + "</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>" + ability_3 + "</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 } ], "track": { "enabled": track_enabled, "name": track_name, "max": track_max, "value": track_value, "min": 0 }, "exclusiveOptions": [], "conditions": track_condition, "description": "" }}, indent=4)

    file_asset = open("output/" + asset_name.lower().replace(' ', '-') + ".json", "w")

    print(asset_foundry)
    file_asset.write(asset_foundry)
    file_asset.close()

    print()