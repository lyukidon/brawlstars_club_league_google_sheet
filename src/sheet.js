const { GoogleSpreadsheet } = require("google-spreadsheet");
const { google } = require("googleapis");

// API 키 설정
const apiKey = "AIzaSyDcCcETleJe0Q-iyZf9Ri8y4_fyfaw2zz8";

const doc = new GoogleSpreadsheet(
    "1Qwi4D7xmFgbruQ3lTl4z342xcVRMJWuWeOJJni-6N9g"
  );

async function authGoogleSheet(){
	try{
		await doc.useApiKey(apiKey);
		await doc.loadInfo();
        console.log(doc.title)
	}catch(err){
		console.log( "AUTH ERROR ", err)
	}
}
authGoogleSheet();

async function readFirstSheetRow(){ 
    await doc.useApiKey(apiKey);
    await doc.loadInfo()
	var sheet = doc.sheetsByIndex[0]; // 첫번째 시트를 가져옵니다.
    var rows = await sheet.getRows({offset:0, limit:2}); // 세 번째 row 부터 100개 row를 가져옵니다.
    rows.forEach((ele)=>{
    	console.log( ele )
    });
    
    // const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
}
readFirstSheetRow();