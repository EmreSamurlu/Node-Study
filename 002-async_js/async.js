function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler Alınmaya Çalışılıyor.');

        if (data) { resolve('Veriler Alındı.') }
        else { reject('Veriler Alınamadı.') }
    });
};

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler Düzenleniyor.');

        if (receivedData) { resolve('Veriler Düzenlendi.') }
        else { reject('Veriler Düzenlenemedi.') }
    })
}
/* 
getData(true)
    .then(result => {
        console.log(result)
        return cleanData(true)
    })
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.log(e);
    })
 */

async function processData() {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
}

processData();
