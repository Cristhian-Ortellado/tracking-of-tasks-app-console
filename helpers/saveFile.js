import * as fs from 'fs';
const file = './db/data.json';
const saveDb = (data)=>{
    fs.writeFileSync(file,JSON.stringify(data));
}

const readDB=()=>{
    //the file doesn't exists 
    if (!fs.existsSync(file)){
        return null;
    }

    //the file exists
    const info = fs.readFileSync(file,{encoding:'utf-8'});
    const data = JSON.parse(info);
    return data;
}

export {saveDb, readDB}