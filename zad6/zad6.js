let listPracownikow = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

listPracownikow.pracownicy.forEach( function(item, index) {
    console.log('index:' + index + ', imie: ' + item.firstName + ', nazwisko: ' + item.lastName)
});

