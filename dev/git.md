# Git gebruiken voor lokaal versiebeheer

Als je lokaal werkt maar wel versiebeheer wilt gebruiken, kan je eenvoudig een lokaal git project maken:

- Open een terminal in de folder van je project. 
- In VS Code kan je kiezen voor 'view > integrated terminal'. Dit Terminal venster staat automatisch in de goede map.
- Typ `git init`

Je ziet als het goed is :
```
Initialized empty Git repository in /Users/Name/Myproject/.git/
```

Je kan nu lokaal werken met git. 
- Je kan je uncommitted changes ongedaan maken door in het 'git' venster van VS Code op 'changes' te klikken.
- Als je laatste wijzigingen correct zijn maak je een commit door op het vinkje te klikken. 
- Je wijziging wordt nu lokaal bijgehouden in je commit history. 
- Je hoeft niet niet te syncen/pushen met een online repository als je alleen lokaal werkt. 

## Branches

Je kan lokaal branches aanmaken om nieuwe features toe te voegen zonder dat je werkende code (de 'master branch') in gevaar komt. Als je nieuwe feature helemaal af is, dan merge je die samen met de master branch. 

- Maak een nieuwe branch met `git branch new_feature` 
- Maak dit je working branch met `git checkout new_feature`

Als blijkt dat je nieuwe feature totaal niet werkt kan je de branch weggooien

- Ga terug naar de master branch met `git checkout master`
- Verwijder de nieuwe branch met `git branch -d new_feature`

Als je nieuwe feature helemaal werkt kan je je branches samenvoegen:

- Ga terug naar de master branch met `git checkout master`
- Merge beide branches met `git merge new_feature`

## Online repository linken

Je kan ook achteraf nog een online repository (bv. github) linken aan je project, waarna je met `git push` je code op de remote repository kan plaatsen.
```
git remote add origin <repository-address>
``` 

## Bestaande Git map verwijderen

Als je een repository hebt gecloned via `git clone` (bijvoorbeeld een oefening van HR-CMGT) dan is er al een .git folder met een history en remote instellingen. Als je dit niet wilt gebruiken kan je de .git map in de terminal verwijderen met `sudo rm -r .git`. Daarna begin je een verse repository met `git init`.