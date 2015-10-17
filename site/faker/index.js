var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var fakePersons = generateFakePersons(30);

function FakePerson(){
    var categories = ['one','two','three','fore'];
    this.name = faker.name.findName();
    this.email = faker.internet.email();
    this.category = getRandomCategory(categories)
}

function getRandomCategory(categories){
    var min = 0;
    var max = categories.length;
    return categories[Math.floor(Math.random() * (max - min) + min)];
}

function generateFakePersons(number){
    var fakerPersons = [];
    for(var i = 0;i<number;i++){
        fakerPersons.push(new FakePerson());
    }
    return fakerPersons;
}
module.exports = generateFakePersons;