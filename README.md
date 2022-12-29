# DnD Attributes Generator

This project is practical. In it I apply the **Single Responsibility** principle of SOLID and **Clean Code**.
These smaller projects are great for training.

## Table of Contents

* [Ability Score](#ability-score)
* [Generator Rules](#generator-rules)
* [Source Code Explained](#source-code-explained)
* [How To Run The Code](#how-to-run-the-code)
* [How Edit The Code](#how-edit-the-code)
* [What I Need To Know To Run Or Edit The Code](#what-i-need-to-know-to-run-or-edit-the-code)

## Ability Score

Player Book v3.5

* To create an ability score for your character, roll 4 six-sided dice (4d6).
* Disregard the lowest die roll and total the three highest ones.
* The result is a number between 3 (horrible) and 18 (tremendous).
* The average ability score for the typical commoner is 10 or 11. But your character is not typical. The most common ability scores for player characters (PCs) are 12 and 13.

## Generator Rules

This is the signatures of the methods that set the rules.

* **ruleRoll4D6**
  * Standard rule like mentioned in the Player Book v3.5
  * Roll 4d6 and discard the lower value. Sum the total of the three values
* **ruleRoll1D10Plus8**
  * Roll 1d10 and plus 8
* **ruleRoll1D8Plus10**
  * Roll 1d8 and plus 10
* **ruleRoll3D6**
  * *Experimental*
  * Run 3d6 7 times. Sum the triple. Return the highest value of the seven.

## Source Code Explained

The code is flexible with 3 constants, see below.

* MAX_ATTRIBUTES
  * Defines the maximum attributes to be generated
* MINIMAL_SCORE
  * Defines the minimal score for each attribute
* RULE
  * Defines the rules to generate the attributes, accept the signature of the rule method. Mentioned in [Generator Rules](#generator-rules)

## How To Run The Code

Execute the steps below.

```bash
git clone git@github.com:tufcoder/dnd-attributes-generator.git <folder>
cd <folder>
node .
```

## How Edit The Code

You can edit the code in the file `index.js`.
The other files is for historical purpose and can be discarded later.

## What I Need To Know To Run Or Edit The Code

* NodeJS
* JavaScript
* Terminal:
  * Windows: Windows Terminal, Powershell, Git Bash
  * Linux/Mac: a terminal like bash or zshell
* Git
* SOLID
  * Single Responsibility
* Clean Code
