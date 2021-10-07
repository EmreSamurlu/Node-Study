/* console.log('1. Görev');
console.log('2. Görev');
console.log('3. Görev'); */
/*
const func1 = () => {
    console.log('Func 1 Tamamlandı');
}

const func2 = () => {
    console.log('Func 2 Tamamlandı');
}

func2();
func1();
 */
/* 
const func1 = () => {
    console.log('Func 1 Tamamlandı');
    func2();
}

const func2 = () => {
    console.log('Func 2 Tamamlandı');
    func3();
}

const func3 = () => {
    console.log('Func 3 Tamamlandı'); 
}

func1(); */
/* 
let x = 5 ;
console.log("1. Gelen Veri",x);

setTimeout(()=>{
    x = x + 5;
    console.log("2. Gelen Veri", x);
}, 5000);

x = x + 5;
console.log("3. Gelen Veri", x);
 */

const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'}
];

const listBooks = () =>{
    books.map(book => 
        console.log(book.name))
}

// listBooks();

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap 4', author: 'Yazar 4'}, listBooks);

