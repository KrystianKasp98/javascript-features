const dog = { paws: 4 }
const cat = structuredClone(dog);

cat.meow = true

if (dog.meow) {
  console.log("That's not a dog!")
}

// https://codisity.pl/100-bugow-js/aefeac4f-fef6-4b65-b2cf-bd41c4111a8e