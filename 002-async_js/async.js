/* function getData(data) {
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
} */
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

/* async function processData() {
    try {
        const receivedData = await getData(false);
        console.log(receivedData);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);

    } catch (e) {
        console.log(e)
    }
}

processData();
 */


const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' }
];

const listBooks = () => {
    books.map(book =>
        console.log(book.name))
}

const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        // resolve(books);
        reject('Bir Hata Oluştu.');
    })
    return promise1;
};
/* 
addBook({ name: 'Kitap 4', author: 'Yazar 4' })
    .then(() => {
        console.log('Yeni Liste');
        listBooks();
    })
    .catch((e) => {
        console.log(e)
    })
 */

const showBooks = async () => {
    try {
        await addBook({ name: 'Kitap X', author: 'Yazar X' })
        listBooks();
    }
    catch (e) {
        console.log(e);
    }
}
showBooks();