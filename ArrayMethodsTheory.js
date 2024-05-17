"use strict";

// ARRAY REDUCE (non-mutating)

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfNumbers = numbers.reduce((sum, currentEl) => {
  return sum + currentEl;
}, 0);

console.log(sumOfNumbers);

const data = [
  ["id", 1],
  ["firstName", "Alex"],
  ["age", 20],
];

const newUser = data.reduce((user, currentEl) => {
  const [key, value] = currentEl;

  user[key] = value;

  return user;
}, {});

console.log(newUser);

/* const user = Object.fromEntries(data)
console.log(user); */

const string = "abcdefg";

// ARRAY MAP (non-mutating)

const phones = [
  {
    id: "motorola-defy-with-motoblur",
    product: {
      age: 13,
      type: "phone",
      carrier: "T-Mobile",
      id: "motorola-defy-with-motoblur",
      imageUrl: "img/phones/motorola-defy-with-motoblur.0.jpg",
      name: "Motorola DEFY™ with MOTOBLUR™",
      snippet: "Are you ready for everything life throws your way?",
      price: 920,
      discount: 20,
      screen: "3.7 inches",
      capacity: "2000MB",
      ram: "512MB",
    },
    quantity: 1,
  },
  {
    id: "motorola-xoom",
    product: {
      age: 1,
      type: "tablet",
      id: "motorola-xoom",
      imageUrl: "img/phones/motorola-xoom.0.jpg",
      name: "MOTOROLA XOOM™",
      snippet:
        "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
      price: 910,
      discount: 10,
      screen: "10.1 inches",
      capacity: "32000MB",
      ram: "1000MB",
    },
    quantity: 1,
  },
  {
    id: "samsung-mesmerize-a-galaxy-s-phone",
    product: {
      age: 15,
      type: "phone",
      id: "samsung-mesmerize-a-galaxy-s-phone",
      imageUrl: "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
      name: "Samsung Mesmerize™ a Galaxy S™ phone",
      snippet:
        "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors",
      price: 960,
      discount: 10,
      screen: "4.0 inches",
      capacity: "2048MB",
      ram: "512MB",
    },
    quantity: 1,
  },
  {
    id: "droid-pro-by-motorola",
    product: {
      age: 11,
      type: "phone",
      id: "droid-pro-by-motorola",
      imageUrl: "img/phones/droid-pro-by-motorola.0.jpg",
      name: "DROID™ Pro by Motorola",
      snippet: "The next generation of DOES.",
      price: 740,
      discount: 10,
      screen: "3.1 inches",
      capacity: "2048MB",
      ram: "512MB",
    },
    quantity: 1,
  },
];

console.log(phones);

const phonePricesArray = phones.map((ph) => {
  return {
    ...ph,
    totalPrice: ph.product.price * ph.quantity,
  };
});

console.log(phonePricesArray);

// ARRAY FILTER (non-mutating);

const query = "amsun";

const samsungPhones = phones.filter((ph) => {
  return ph.product.name
    .toLowerCase()
    .includes(query.toLowerCase())
    .filter((ph) => ph.price > 500);
});

console.log(samsungPhones);

const tablets = [
  { id: 1, name: "Samsung", price: 600 },
  { id: 2, name: "Apple", price: 700 },
];

function addNewTablet(name, price) {
  const id = Math.max(...tablets.map((t) => t.id), 0) + 1;

  return tablets.push({
    id,
    name,
    price,
  });
}

addNewTablet("Xiaomi", 500);

console.log(tablets);
