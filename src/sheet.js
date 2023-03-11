const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('https://docs.google.com/spreadsheets/d/1Qwi4D7xmFgbruQ3lTl4z342xcVRMJWuWeOJJni-6N9g/edit#gid=0');

async function end(){
    const data = await doc.loadInfo();
    console.log(data)
}

end()