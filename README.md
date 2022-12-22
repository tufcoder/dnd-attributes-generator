# DnD Attributes Generator

This project is practical. In it I apply the **Single Responsibility** principle of SOLID and **Clean Code**.
These smaller projects are great for training.

## Ability Score

Player Book v3.5

* To create an ability score for your character, roll 4 six-sided dice (4d6).
* Disregard the lowest die roll and total the three highest ones.
* The result is a number between 3 (horrible) and 18 (tremendous).
* The average ability score for the typical commoner is 10 or 11. But your character is not typical. The most common ability scores for player characters (PCs) are 12 and 13.

## Generator Rules

This is the signatures of the methods that set the rules.

* ruleRoll4D6
  * Standard rule like mentioned in the Player Book v3.5
  * Roll 4d6 and discard the lower value. Sum the total of the three values
* ruleRoll1D10Plus8
  * Roll 1d10 and plus 8
* ruleRoll1D8Plus10
  * Roll 1d8 and plus 10
* ruleRoll3D6
  * Experimental
  * Run 3d6 7 times. Get the highest number generate by the triple

## Source Code Explained

The code is flexible with 3 constants, see below.

* MAX_ATTRIBUTES
  * Defines the maximum attributes to be generated
* MINIMAL_SCORE
  * Defines the minimal score for each attribute
* RULE
  * Defines the rules to generate the attributes, accept the signature of the rule method. Mentioned in [Generator Rules](#generator-rules)

## How to run the code

Execute the steps below.

```bash
git clone <folder>
cd <folder>
node .
```

## How edit the code

You can edit the code in the file `index.js`.
The other files is for historical purpose and can be discarded later.
