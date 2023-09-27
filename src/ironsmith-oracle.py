#!/usr/bin/env python

import json

original_data_file="ironsmith-expanded-oracles.json"
# output_data_file="ironsmith-expanded-oracles.txt"

# reading `JSON file`
with open(original_data_file,"r") as file:
   ironsmith_oracles = json.load(file)

# Updating JSON Data
print("Ironsmith Expanded Oracles\n")

for oracle in ironsmith_oracles['Oracles']:
    oracle_name = (oracle['Name'])
    die = (oracle['d'])
    # if die == "200":
    #     table = 1
    #     print("d100 "+ oracle_name + " (1 - 2)")
    # else:
    print("d" + die + " " + oracle_name)

    range_upper = None
    for result in oracle['Oracle Table']:
        if range_upper is None:
            range_upper = 0
        range_lower = range_upper + 1
        range_upper = result['Chance']
        description = result['Description']
        print(str(range_lower) + "-" + str(range_upper) + " " + description)
    print()

# Saving updated data into a new file
# with open(output_data_file,"w") as file:

