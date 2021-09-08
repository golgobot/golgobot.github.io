var generalURL = 'https://docs.google.com/spreadsheets/d/1p8r5qRrLbDJp1tmBXvZow9ygzn2EVv3f_m0lgONC1HE/pub?output=csv';

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