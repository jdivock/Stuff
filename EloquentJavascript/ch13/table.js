'use strict';
function buildTable(data){
    var table = document.createElement('table');

    // Build header
    var thead = document.createElement('thead');
    var theadR = document.createElement('tr');
    thead.appendChild(theadR);

    Object.keys(data[0]).forEach(function(el){
        var theadC = document.createElement('td');
        theadC.appendChild(document.createTextNode(el));
        theadR.appendChild(theadC);
    });
        
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // Iterate through cells and build those
    data.forEach(function(el){
        //build row
        var tbodyRow = document.createElement('tr');

        for( var val in el){
            var tbodyC = document.createElement('td');
            tbodyC.appendChild(document.createTextNode(el[val]));
            if(typeof el[val] === 'number'){
                tbodyC.style.textAlign = 'right';
            }
            tbodyRow.appendChild(tbodyC);
        }

        tbody.appendChild(tbodyRow);
    });


    return table;
}


// mountain data for reference
/*      var MOUNTAINS = [
      {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
      {name: "Everest", height: 8848, country: "Nepal"},
      {name: "Mount Fuji", height: 3776, country: "Japan"},
      {name: "Mont Blanc", height: 4808, country: "Italy/France"},
      {name: "Vaalserberg", height: 323, country: "Netherlands"},
      {name: "Denali", height: 6168, country: "United States"},
      {name: "Popocatepetl", height: 5465, country: "Mexico"}
      ];
*/
