const request = require('request');
const url = require('./url.json');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const path = require('path');


let fields = ['email', 'nome', 'data', 'tipo', 'tempo', 'ip'];


const file = path.dirname(__dirname) + "/leads.csv";

const URL = url;

function get(url) {
    return new Promise((result, reject) => {
        request.get(url, ((error, response, body) => {
            return error ? reject(error) : result(JSON.parse(body));
        }));
    });
}



function generetorCsv(fields, file) {
    
    
    
    get(URL).then(dados => {;
        const json = Object.keys(dados).map(id => dados[id]);
        
        const json2csvParser = new Json2csvParser({ fields });
        const csv = json2csvParser.parse(json);
        
        // remove file
        try {
            fs.unlinkSync(file);
        } catch (error) {}
        
        fs.writeFileSync(file, csv, { encoding: 'ascii' });
        console.log(`Seu arquivo foi salvo no diretorio ${file}`);
    }).catch( error => {
        console.log(`Um erro ocorreu: ${error}`);
    });
}


generetorCsv(fields, file);
