
# De-strukturering

### Opgave 1
De-strukturér hundende "Max" og "Luna" ud af hunde-arrayet til variablerne "dog1" og "dog2".


### Opgave 2
De-strukturér navn og race samt ejerens email-adresse ud af katte-objektet.

### Opgave 3
Opret en funktion, der som parametre de-strukturerer "name" og "favoriteToys" ud af et objekt. Brug console.log til at udskrive de to parametre inde i funktionen. Invokér funktionen med katte-objektet.


# Rest-operator

### opgave 4
De-strukturér de to første hunde ud af hunde-arrayet i variablerne "dogA" og "dogB". Brug rest-operatoren til at samle de resternde hunde op i arrayet "otherDogs".

### opgave 5
Filtrér arrayet "otherDogs", så hunde der begynder med bogstavet "C" samles i arrayet "dogsWithC". Udskriv arrayet i konsollen. 

### opgave 6
De-strukturér "breed" ud af katte-objektet, og saml de restrerende nøgle-værdi par i objektet "otherInformation". Udskriv dem i konsollen.

# Spread-operator

### opgave 7
Saml de to arrays "smallRabbitBreeds" og "LargeRabbitBreeds" til et samlet array "rabbitBreeds" ved hjælp af spread-operatoren.

### opgave 8
Saml de to objekter "checkeredGiantBasic" og "checkeredGiantTraits" til et samlet objekt "checkeredGiantInfo" ved hjælp af spread-operatoren.

# Optional chaining

### opgave 9
Variablen "westernMovies" indeholder et array af klassiske westernfilm. Nogle af filmene har et details objekt, hvor man bland andet kan se, hvem der har instrueret filmen. Brug optional chaining til at udskrive filmens instruktør, ved først at tjekke om "details"-objektet findes.
**Ekstraopgave:** Udskriv "Ukendt instruktør", hvis details-objektet ikke er defineret.

# Ternary operator

### opgave 10
I denne sidste opgave skal du selv oprette en variabel. Brugen af ternary operators i React bruges ofte til at rendere forskelligt indhold afhængigt af om en variabel er defineret eller ej. Opret en variabel og brug en ternay operator til at udskrive en type besked hvis variablen findes, og en anden type besked hvis variablen ikke findes.

Eksempelvis:
```js
let user = "Carsten"
user ? console.log(`Velkommen, ${user}`) : console.log("Du er ikke logget ind")
```

Prøv så at slette user-variablen, og se forskellen. 