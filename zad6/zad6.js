let listPracownikow = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

listPracownikow.forEach( function(firstName, lastName, index) {
    console.log('index:' + index + ',imie' + firstName + ',nazwisko' + lastName)
});

