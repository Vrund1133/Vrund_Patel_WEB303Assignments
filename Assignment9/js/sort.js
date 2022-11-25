var characters = [

    {
        "firstName": "Clark",
        "lastName": "Kent",
        "powerLevel": "6144567",
        "birthdate": "1988-10-19",
        "gender": "Male",
        "role": "Superman"
    },
    {
        "firstName": "Barry",
        "lastName": "Allen",
        "powerLevel": "5367",
        "birthdate": "2000-11-17",
        "gender": "Male",
        "role": "Flash"
    },
    {
        "firstName": "Diana",
        "lastName": "Prince",
        "powerLevel": "44567",
        "birthdate": "1819-7-13",
        "gender": "Female",
        "role": "Wonder Women"
    },
    {
        "firstName": "Bruce",
        "lastName": "Wayne",
        "powerLevel": "34577",
        "birthdate": "1972-4-23",
        "gender": "Male",
        "role": "Batman"
    },
    {
        "firstName": "Arthur",
        "lastName": "Curry",
        "powerLevel": "33567",
        "birthdate": "1975-11-23",
        "gender": "Male",
        "role": "Aquaman"
    }
]

buildTable(characters)

$('th').on('click', function(){
    var column = $(this).data('column ')
    var order = $(this).data('order')
    console.log('Column was clicked!', column, order)

    if(order == 'desc'){
      $(this).data('order' , "asc")
      characters = characters.sort((a,b) =>[column] > b[column] ? 1 : -1)
    }else {
        $(this).data('order' , "desc")
        characters = characters.sort((a,b) =>[column] < b[column] ? 1 : -1)
    }
    buildTable(characters)
})

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML=''
   for(var i=0; i < data.length; i++) {
        var row = `<tr>
                   <th>${data[i].firstName}</th>
                   <th>${data[i].lastName}</th>
                   <th>${data[i].powerLevel}</th>
                   <th>${data[i].birthdate}</th>
                   <th>${data[i].gender}</th>
                   <th>${data[i].role}</th>
                   </tr>`
                   table.innerHTML += row
    }
}

