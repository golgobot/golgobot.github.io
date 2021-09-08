const generalURL = 'https://docs.google.com/spreadsheets/d/1y_FVjRDYBBpUN4Pxf5iMjlAJH4bx9qhdzPoLw9fiU0A/pub?output=csv';

function processData(results) {
    for (data of results.data) {
        if (data.Display !== 'y') continue;
        $('table').append('\
      <tr> \
        <td>' + data['Name'] + '</td>\
        <td>' + data['Email'] + '</td> \
        <td>' + data['Research'] + '</td>\
      </tr> \
    ');
    }
}

function init() {
    Papa.parse(generalURL, {
        download: true,
        header: true,
        complete: processData
    });
}

window.addEventListener('DOMContentLoaded', init);