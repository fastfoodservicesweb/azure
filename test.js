// Ladda http-modul fÃ¶r att fÃ¶r http-sever.

var http = require('http');

// Ladda modulen fÃ¶r att lÃ¤sa en fil.

var fs = require('fs');

var i = 1;

 

//lÃ¤ser in filen index.html i en callback-funktion.

fs.readFile('./index.html', function (err, html) {

                      // en logutskrift dÃ¥ servern anropas.

console.log("Server, anropas, localhost:7999. I funktion fs.readFile");

    if (err) {

        throw err;

    }

// Konfigurera http-servern att ge ett "Hello" svar pÃ¥ alla frÃ¥gor.

// Detta sker i en callback-funktion.

//req = request res = response

    http.createServer(function(req, res) { 

                                            //val av Content-Type header

        res.writeHeader(200, {"Content-Type": "text/html"}); 

                                            //skriv ut innehÃ¥llet i filen, variabeln html;

        res.write(html); 

        res.end(); 

// en logutskrift dÃ¥ servern anropas.

console.log("Server, anropas, localhost:7999. Antalet anrop: "+i+++" i http.createServer");

console.log(req.url);

    }).listen(3000);

});

// en logutskrift dÃ¥ servern startas.

console.log("Server, startas, localhost:3000");
