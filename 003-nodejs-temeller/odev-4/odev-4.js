const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (e) =>{
    if (e) throw e;
    console.log('Dosya Başarıyla Oluşturuldu.')
}) 

fs.readFile('employees.json', 'utf8', (e, data) =>{
    if (e) throw e;
    console.log(data);
    console.log('Dosya Başarıyla Okundu.')
})

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 2200}', 'utf8', (e)=>{
    if (e) throw e;
    console.log('Dosya Güncellendi');
})

fs.unlink('employees.json', (e)=>{
    if (e) throw e;
    console.log('Dosya Silindi!');
}) 