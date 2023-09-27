#!/usr/bin/env python

import json

original_data_file="ironsmith-expanded-oracles.json"
# output_data_file="ironsmith-expanded-oracles.txt"
table_2 = ["(1 - 3)", "(4 - 6)"]
table_3 = ["(1 - 2)", "(3 - 4)", "(5 - 6)"]
table_6 = ["(1)", "(2)", "(3)", "(4)","(5)", "(6)"]

# reading `JSON file`
with open(original_data_file,"r") as file:
   ironsmith_oracles = json.load(file)

# Updating JSON Data
print("Ironsmith Expanded Oracles\n")

for oracle in ironsmith_oracles['Oracles']:
    oracle_name = (oracle['Name'])
    die = (oracle['d'])
    if die == "200":
        table_num = 0
        print("d100 "+ oracle_name + " " + table_2[table_num])
        range_lower = None
        print_title = True
        for result in oracle['Oracle Table']:
            if range_lower is None:
                range_lower = 1
            range_upper = result['Chance']
            description = result['Description']
            if range_upper > 100 and range_upper <= 200:
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_2[table_num])
                    print_title = False
                print(str(range_lower - 100) + "-" + str(range_upper - 100) + " " + description)
                range_lower = range_upper + 1 
            else:
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower) + "-" + str(range_upper) + " " + description)
                range_lower = range_upper + 1
    elif die == "300":
        table_num = 0
        print("d100 "+ oracle_name + " " + table_3[table_num])
        range_lower = None
        print_title = True
        for result in oracle['Oracle Table']:
            if range_lower is None:
                range_lower = 1
            range_upper = result['Chance']
            description = result['Description']
            if range_upper > 100 and range_upper <= 200:
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_3[table_num])
                    print_title = False
                print(str(range_lower - 100) + "-" + str(range_upper - 100) + " " + description)
                range_lower = range_upper + 1 
            elif range_upper > 200 and range_upper <= 300:
                if range_lower == 201:
                    print_title = True
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_3[table_num])
                    print_title = False
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower - 200) + "-" + str(range_upper - 200) + " " + description)
                range_lower = range_upper + 1 
            else:
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower) + "-" + str(range_upper) + " " + description)
                range_lower = range_upper + 1
    elif die == "600":
        table_num = 0
        print("d100 "+ oracle_name + " " + table_6[table_num])
        range_lower = None
        print_title = True
        for result in oracle['Oracle Table']:
            if range_lower is None:
                range_lower = 1
            range_upper = result['Chance']
            description = result['Description']
            if range_upper > 100 and range_upper <= 200:
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_6[table_num])
                    print_title = False
                print(str(range_lower - 100) + "-" + str(range_upper - 100) + " " + description)
                range_lower = range_upper + 1 
            elif range_upper > 200 and range_upper <= 300:
                if range_lower == 201:
                    print_title = True
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_6[table_num])
                    print_title = False
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower - 200) + "-" + str(range_upper - 200) + " " + description)
                range_lower = range_upper + 1 
            elif range_upper > 300 and range_upper <= 400:
                if range_lower == 301:
                    print_title = True
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_6[table_num])
                    print_title = False
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower - 300) + "-" + str(range_upper - 300) + " " + description)
                range_lower = range_upper + 1 
            elif range_upper > 400 and range_upper <= 500:
                if range_lower == 401:
                    print_title = True
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_6[table_num])
                    print_title = False
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower - 400) + "-" + str(range_upper - 400) + " " + description)
                range_lower = range_upper + 1 
            elif range_upper > 500 and range_upper <= 600:
                if range_lower == 501:
                    print_title = True
                if print_title:
                    table_num = table_num + 1
                    print("\nd100 "+ oracle_name + " " + table_6[table_num])
                    print_title = False
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower - 500) + "-" + str(range_upper - 500) + " " + description)
                range_lower = range_upper + 1 
            else:
                range_upper = result['Chance']
                description = result['Description']
                print(str(range_lower) + "-" + str(range_upper) + " " + description)
                range_lower = range_upper + 1
    else:
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

