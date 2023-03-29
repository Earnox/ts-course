// Améliorez la syntaxe de ce code en TypeScript
type Users = {
  firstName: string;
  lastName: string;
  pets: Pets[];
};
type Pets = {
  name: string;
  age: number;
  color: string;
};
function getUserFullName(user: Users) {
  return user.firstName + ' ' + user.lastName;
}

function getUserNumberOfPets(user: Users) {
  return user.pets.length;
}

function getUserPetsNames(user: Users): string[] {
  return user.pets.map((pet) => pet.name);
}

const pet = {
  name: 'Médor',
  age: 5,
  color: 'brown',
};

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  pets: [pet],
};

const fullName = getUserFullName(user);
