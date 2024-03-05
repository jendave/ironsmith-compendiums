#!/usr/bin/env python

import json

original_data_file="south-american-assets.json"

# Gatka and Obhejane require some ability modification after import. The `Battle` and `Companion Endure Harm` strings cause issues. 
def update_ability(ability):
    if ability is None:
        return None
    ability_updated = ability
    ability_updated = ability_updated.replace("Undertake a Journey", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.ac19f4c7f3fe31be]{Undertake a Journey}")
    ability_updated = ability_updated.replace("Resupply", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.8d90dd472856be27]{Resupply}")
    ability_updated = ability_updated.replace("Strike", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.5288e935906f6d28]{Strike}")
    ability_updated = ability_updated.replace("Clash", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.7e008d0f656dc8b3]{Clash}")
    ability_updated = ability_updated.replace("Secure an Advantage", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.4dd8468e095810a4]{Secure an Advantage}")
    ability_updated = ability_updated.replace("Forge a Bond", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.b643d9ea53ff8d98]{Forge a Bond}")
    ability_updated = ability_updated.replace("Endure Harm", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.fdb51ee928b4fca2]{Endure Harm}")
    ability_updated = ability_updated.replace("Sojourn", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.25421995c803340e]{Sojourn}")
    ability_updated = ability_updated.replace("Gather Information", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.4244b77103f55bc4]{Gather Information}")
    ability_updated = ability_updated.replace("Enter the Fray", "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.ed343c963b08f301]{Enter the Fray}")
    ability_updated = ability_updated.replace("Face Danger" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.c8bacc17f73d3103]{Face Danger}")
    ability_updated = ability_updated.replace("End the Fight" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.aac3783710ad7499]{End the Fight}")
    ability_updated = ability_updated.replace("Fulfill Your Vow" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.725a21e2f02d7e12]{Fulfill Your Vow}")
    ability_updated = ability_updated.replace("Compel" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.be95ca063ded2b19]{Compel}")
    ability_updated = ability_updated.replace("Aid an Ally" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.f762e8f471fe875f]{Aid Your Ally}")
    ability_updated = ability_updated.replace("Battle" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.412156232a6d42bf]{Battle}")
    ability_updated = ability_updated.replace("Delve the Depths" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.36c6cbe556fbb639]{Delve the Depths}")
    ability_updated = ability_updated.replace("Swear an Iron Vow" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.010e27aa4376d4df]{Swear an Iron Vow}")
    ability_updated = ability_updated.replace("Check Your Gear" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.48f642fd361e9c03]{Check Your Gear}")
    ability_updated = ability_updated.replace("Make Camp" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.30046577bc83f2f0]{Make Camp}")
    ability_updated = ability_updated.replace("Find an Opportunity" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.4da87fd54eaa1b89]{Find an Opportunity}")
    ability_updated = ability_updated.replace("Draw the Circle" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.c0967ba47f57393b]{Draw the Circle}")
    ability_updated = ability_updated.replace("Face Death" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.92b85c33a17ab487]{Face Death}")
    ability_updated = ability_updated.replace("Endure Stress" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.e09e2fc8bb709320]{Endure Stress}")
    ability_updated = ability_updated.replace("Ask the Oracle" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.aba3e44b7e810c0f]{Ask the Oracle}")
    ability_updated = ability_updated.replace("Test Your Bond" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.421b379cb40b6ab7]{Test Your Bond}")
    ability_updated = ability_updated.replace("Turn the Tide" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.12e23cfe23534a8f]{Turn the Tide}")
    ability_updated = ability_updated.replace("Learn From Your Failures" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.d05ecfe8c467bdc5]{Learn From Your Failures}")
    ability_updated = ability_updated.replace("Heal" , "@UUID[Compendium.foundry-ironsworn.ironswornmoves.Item.3d315ee54e9ce845]{Heal}")

    return ability_updated

def parse_json_object(json_string):
    json_string = ""
    return json_string

# reading `JSON file`
with open(original_data_file,"r") as file:
   ironsmith_assets = json.load(file)

for asset in ironsmith_assets['Assets']:
    asset_name = asset.get('Name')
    category = asset.get('Category')
    ability_1 = update_ability(asset.get('Ability1'))
    ability_2 = update_ability(asset.get('Ability2'))
    ability_3 = update_ability(asset.get('Ability3'))
    ability_4 = update_ability(asset.get('Ability4'))
    ability_5 = update_ability(asset.get('Ability5'))
    
    ability_1_enabled = "true"
    if (ability_5):
        ability_1_enabled = "false"
    elif ("Stotr Gaayak" in asset_name):
        ability_1_enabled = "false"
    elif (asset_name == "Mutant Senses"):
        ability_1_enabled = "false"
    elif (category == "Companion"):
        ability_1_enabled = "false"
    
    has_clock_1 = "true" if asset_name == "Traveler" else "false"
    clock_max_1 = 6 if asset_name == "Traveler" else 4
    
    ability123_string = """[{"description": "<p>%s</p>", "enabled": "%s", "hasClock": "%s", "clockMax": "%s", "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 } ]""" % (ability_1, ability_1_enabled, has_clock_1, clock_max_1, ability_2, ability_3)
    ability1234_string = """[{"description": "<p>%s</p>", "enabled": "%s", "hasClock": "%s", "clockMax": "%s", "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 } ]""" % (ability_1, ability_1_enabled, has_clock_1, clock_max_1, ability_2, ability_3, ability_4)
    ability12345_string = """[{"description": "<p>%s</p>", "enabled": "%s", "hasClock": "%s", "clockMax": "%s", "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 }, { "description": "<p>%s</p>", "enabled": "false", "hasClock": "false", "clockMax": 4, "clockTicks": 0 } ]""" % (ability_1, ability_1_enabled, has_clock_1, clock_max_1, ability_2, ability_3,ability_4, ability_5)

    ability_final = None

    if (ability_5):
        ability_final = json.loads(ability12345_string)
    elif (ability_4):
        ability_final = json.loads(ability1234_string)
    elif (ability_3):
        ability_final = json.loads(ability123_string)

    category = asset.get('Category')
    color = asset.get('Color')
    track_name = asset.get('TrackLabel')
    track_max = asset.get('TrackMax')
    track_value = 0 if asset_name == "Holodeck" else track_max
    track_value = 0 if asset_name == "Hi Magaru" else track_max
    track_condition_temp = asset.get('TrackCondition')
    track_condition_string = """[{ "name" : "%s", "ticked" : "false"}]""" % (track_condition_temp) if (track_condition_temp is not None and asset_name != "Traveler") else None
   # print("track_condition_string: %s" % (track_condition_string))
    track_condition = json.loads(track_condition_string) if (track_condition_temp is not None and asset_name != "Traveler") else []
    track_enabled = "true" if (track_max or track_name) and asset_name != "Traveler" else "false"
    foreward = update_ability(asset.get('Foreword'))
    description = update_ability(asset.get('Description'))
    input1 = asset.get('Input1')
    input2 = asset.get('Input2')
    input3 = asset.get('Input3')
    input4 = asset.get('Input4')
    input5 = asset.get('Input5')
    input6 = asset.get('Input6')

    fields = None
    #print(input_item)
    
    input123456_string = """[{"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }]""" % (input1, input2, input3, input4, input5, input6)
    input12345_string = """[{"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }]""" % (input1, input2, input3, input4, input5)
    input1234_string = """[{"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }]""" % (input1, input2, input3, input4)
    input123_string = """[{"name": "%s", "value": "" }, {"name": "%s", "value": "" }, {"name": "%s", "value": "" }]""" % (input1, input2, input3)
    input12_string = """[{"name": "%s", "value": "" }, {"name": "%s", "value": "" }]""" % (input1, input2)
    input1_string = """[{"name": "%s", "value": "" }]""" % (input1)
    
    if (input6):
        fields = json.loads(input123456_string)
    elif (input5):
        fields = json.loads(input12345_string)
    elif (input4):
        fields = json.loads(input1234_string)
    elif (input3):
        fields = json.loads(input123_string)
    elif (input2):
        fields = json.loads(input12_string)
    elif (input1):
        fields = json.loads(input1_string)

    appendix = asset.get('Appendix')
    exclusive_options = json.loads("""[{"name": "%s","selected": false}]""" % (appendix)) if appendix else json.loads("""[]""")

    asset_foundry = json.dumps({"name": asset_name, "type": "asset", "img": "icons/svg/item-bag.svg", "system": { "requirement": foreward, "category": category, "color": "", "fields": fields,  "abilities": ability_final, "track": { "enabled": track_enabled, "name": track_name, "max": track_max, "value": track_value, "min": 0 }, "exclusiveOptions": exclusive_options, "conditions": track_condition, "description": description }}, indent=4)

    file_asset = open("output/" + asset_name.lower().replace(' ', '-').replace('(', '').replace(')', '') + ".json", "w")

    print(asset_foundry)
    file_asset.write(asset_foundry)
    file_asset.close()

    print()