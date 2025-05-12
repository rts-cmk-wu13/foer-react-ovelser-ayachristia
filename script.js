// opgave 1) DESTRUKTURERINR OBEJCTS AMD ARRAYS
let [, dog1, dog2] = dogs
console.log('- hund1;', dog1, '- hund2;', dog2);
// opgave 2)
// let navn = cat.name;
// let race = cat.breed;
// let ownersEmail = cat.owner.contact
let { name, breed, owner: { contact } } = cat;
console.log('- Navn;', name, '- Race;', breed, '-Email;', contact);
// opgave 3)
function destructurToy({ name, favoriteToys }) {
    console.log(name, ...favoriteToys);
}
destructurToy(cat)

// --------------------------------------------------------

// opgave 4) REST
let [dogA, dogB, ...otherDogs] = dogs;
console.log(dogA, dogB, otherDogs);
// opgave 5)
let dogsWithC = otherDogs.filter((dog) => dog.startsWith("C"))
console.log(dogsWithC);
// opgave 6)
let { breed: catBreed, ...otherInformation } = cat;
console.log(catBreed, otherInformation);


// --------------------------------------------------------
// opgave 7) SPREAD OPERATOR
let rabbitBreeds = [...smallRabbitBreeds, ...largeRabbitBreeds]
console.log(rabbitBreeds);
// opgave 8)
let checkeredGiantInfo = {
    ...checkeredGiantBasic,
    ...checkeredGiantTraits
}
console.log(checkeredGiantInfo);

// --------------------------------------------------------
// opgave 9) OPTIONAL CHAINING
westernMovies.forEach((movie) => {
    console.log(movie.details?.director || '!has no director!');
})
// opgave 10)
let user = 'Aya';
user ? console.log('Velkommen', user) : console.log('You are not logged in');
let user2 = 'Baya';
user ? console.log('Velkommen', user2) : console.log('You are not logged in');