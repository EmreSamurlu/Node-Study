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

let x = 5 ;
console.log("1. Gelen Veri",x);

setTimeout(()=>{
    x = x + 5;
    console.log("2. Gelen Veri", x);
}, 5000);

x = x + 5;
console.log("3. Gelen Veri", x);
