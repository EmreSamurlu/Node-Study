const fs = require('fs');

// Dosya Okumak
/* 
fs.readFile('password.txt', 'utf-8', (e, data) =>{
    if(e) throw e;
    console.log(data);
    console.log('Dosya Okuması Tamamlandı.');
})
 */ 
// Dosya Yazmak

/* fs.writeFile('example.txt', 'Kodluyoruz', 'utf8', (e)=>{
    if (e) throw e;
    console.log("Dosya Başarılı Bir Şekilde Oluşturuldu.");
}); */

// Veri Eklemek

/* fs.appendFile('example.txt', '\nPatika.dev', 'utf8', (e)=>{
    if (e) throw e;
    console.log("Veri Başarılı Bir Şekilde Eklendi.");
}); */

// Dosya Silmek

/* fs.unlink('example.txt', (e)=>{
    if (e) throw e;
    console.log("Dosya Silindi.");
}); */

// Klasörler Oluşturmak
/* 
fs.mkdir('uploads/img', {recursive: true} , (e)=>{
    if (e) throw e;
    console.log("Klasörler Oluşturuldu.");
}); */

// Klasör Silmek 

fs.rmdir('uploads', {recursive: true} , (e)=>{
    if (e) throw e;
    console.log("Klasörler Silindi.");
});