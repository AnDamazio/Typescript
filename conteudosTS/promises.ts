import * as fs from 'fs';
import * as util from 'util';
// const readFile = util.promisify(fs.readFile)


function readFileAsync(filename: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}

function loadJSONAsync(filename: string):Promise<any> {
    return readFileAsync(filename)
        .then(function (res) {
            return JSON.parse(res);
        })
}

loadJSONAsync('good.json').then((res) => {
    console.log(res)
    return res
})
.then((res) => {
    console.log('oi')
    return res
})
.catch((err) => {
    console.log("Deu errado:", err.message)
})

Promise.all([loadJSONAsync('good.json'), loadJSONAsync('good2.json')])
    .then((res) => {
        let [file1, file2] = res;
        return [file1, file2]
    }).then((res) => [
        console.log(res)
    ])

