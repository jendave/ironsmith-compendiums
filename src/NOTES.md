# Text Manipulation Tips
Some small tips to manipulate the text

# Foundry Tips

## Dice
```
Action Roll 2d10cs<(1d6 + mod)
Progress Roll 2d10cs<(mod)
```

## Utilities
```
pdftotext -table -nodiag Starsmith-Expanded-Oracles-Dec-17-22.pdf Starsmith-Expanded-Oracles-Dec-17-22-4.txt # export PDF text to text file
jq -r '.items[] | {name,_id}' starsmith-compendiums-export.json
jq -r '.items[] | {name,_id} | join(", Compendium.starsmith-compendiums.starsmithexpandedoracles.RollTable.")' starsmith-compendiums-export.json
jq -r '.items[] | "displayName: \'"+(.name)+" tables: Compendium.starsmith-compendiums.starsmithexpandedoracles.RollTable."+(._id)' starsmith-compendiums-export.json

cat ironsmith-compendiums-test2.json | jq -r '[("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' 
cat ironsmith-compendiums-edit.json | jq -r '.Oracles[]' | head -n 50
cat ironsmith-compendiums-edit.json | jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' | head -n 50  
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' ironsmith-compendiums-edit.json | sed 's/^d100/\n&/' | sed 's/^d300/\n&/' | sed 's/^d6/\n&/' | head -n 50
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' ironsmith-compendiums-edit.json | sed 's/^d10/\n&/' | sed 's/^d200/\n&/' | sed 's/^d300/\n&/' | sed 's/^d6/\n&/' | head -n 500
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' ironsmith-compendiums-edit.json | sed 's/^d10/\n&/' | sed 's/^d200/\n&/' | sed 's/^d300/\n&/' | sed 's/^d6/\n&/' | head -n 50
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @tsv' ironsmith-compendiums-edit.json | sed 's/^d10/\n&/' | sed 's/^d200/\n&/' | sed 's/^d300/\n&/' | sed 's/^d6/\n&/' > ironsmith-compendiums.txt
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @csv' ironsmith-compendiums-edit.json | sed 's/^d10/\n&/' | sed 's/^d200/\n&/' | sed 's/^d300/\n&/' | sed 's/^d6/\n&/' > ironsmith-compendiums.csv
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance|tostring + "-" + .Chance|tostring, .Description]) | @csv' ironsmith-compendiums-edit.json | sed 's/^\"d10/\n&/' | sed 's/^\"d200/\n&/' | sed 's/^\"d300/\n&/' | sed 's/^\"d6/\n&/' > ironsmith-compendiums.csv
jq -r '.Oracles[] | [("d"+ .d,.Name)],(.["Oracle Table"][] | [.Chance, .Chance, .Description]) | @csv' ironsmith-compendiums-edit.json | sed 's/^\"d10/\n&/' | sed 's/^\"d200/\n&/' | sed 's/^\"d300/\n&/' | sed 's/^\"d6/\n&/' | head -n 50
=IF(ISNUMBER(B2),B2+1,1)

	starforgedOracles.children[0].children.push({
		displayName: 'Backstory Prompts (1 - 2)',
		tables: ['Compendium.starsmith-compendiums.starsmithexpandedoracles.RollTable.bROdhxvU3ConRO7w'],
		children: []
	})
```
## VIM Tips
```
:g/^\s*$/d # Remove blank space
:%s/\s\+$//e # Remove trailing blanks
ggVG :left # Remove leading blanks
:%s/^L//g # ^L using ctrl-V ctrl-L # Remove form feeds
Visual block mode for copying column text - ctrl-V and use arrow keys
:%s/13-14/13\r14\r/g # Find string '13-14' and put carriage returns between the numbers and after '-'
:.,.+99s/ \+/\r/g # Replace spaces with carriage return for current and following 99 lines
:/\<[A-Z]\+\> # Find ALL CAPS words
:/\v<[A-Z]+> # Find ALL CAPS words very magic
:s/\<\(\w\)\(\S*\)/\u\1\L\2/g # Title Case
:s#\v(\w)(\S*)#\u\1\L\2#g # title Case very magic
:%!jq . # Format file as multiline json
:%!jq -c . # Format file as single-line json
:g/^$/d # Remove blank lines
```

## Notes for Github workflows
```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
     # Create zip file
      - run: zip -r ./module.zip packs module.json README.md CHANGELOG.md LICENSE LICENSE-Oracles
      
     # Substitute tag for changelog
      - name: Substitute tag
        id: substitute_tag
        uses: ashley-taylor/regex-property-action@1.3
        with:
          value: ${{github.event.release.tag_name}}
          regex: "[v.]"
          flags: "g"
          replacement: ""
          
      - name: Get current date
        id: date
        run: echo "::set-output name=date::$(date +'%Y-%m-%d')"

      # Update release with zip file
      - name: Update Release with Files
        id: create_version_release
        uses: ncipollo/release-action@v1
        with:
          allowUpdates: true
          artifacts: './module.zip, module.json'
          body: "Changelog: https://github.com/jendave/starsmith-compendiums/blob/develop/CHANGELOG.md#${{steps.substitute_tag.outputs.value}}---${{steps.date.outputs.date}}"
          omitDraftDuringUpdate: true
          omitPrereleaseDuringUpdate: true



name: Release Creation

on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      # Substitute the Manifest and Download URLs in the module.json
      - name: Substitute Manifest and Download Links For Versioned Ones
        id: sub_manifest_link_version
        uses: microsoft/variable-substitution@v1
        with:
          files: "module.json"
        env:
          version: ${{github.event.release.tag_name}}
          url: https://github.com/${{github.repository}}
          manifest: https://github.com/${{github.repository}}/releases/latest/download/module.json
          download: https://github.com/${{github.repository}}/releases/download/${{github.event.release.tag_name}}/module.zip

      # Create a zip file with all files required by the module to add to the release
      - run: zip -r ./module.zip module.json packs/ LICENSE OGL.txt

      # Create a release for this specific version
      - name: Update Release with Files
        id: create_version_release
        uses: ncipollo/release-action@v1
        with:
          allowUpdates: true Set this to false if you want to prevent updating existing releases
          name: ${{ github.event.release.name }}
          draft: false
          prerelease: false
          token: ${{ secrets.GITHUB_TOKEN }}
          artifacts: "./module.json, ./module.zip"
          tag: ${{ github.event.release.tag_name }}
          body: ${{ github.event.release.body }}
```