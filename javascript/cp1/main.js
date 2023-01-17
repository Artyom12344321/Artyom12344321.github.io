let balli = 0;
if(confirm('Ти лисий?') == true){
    balli=balli + 1;
}
if(prompt('Коли розвалився совок?') == '1991'){
    balli=balli + 2;
}
if(confirm('В мене клавіатура genius') == true){
    balli=balli + 2;}
if(prompt('Хто в нас очкарік?') == 'Назар'){
    balli=balli + 1;
}
if(prompt('Коли хрестили Русь') == ' 988'){
    balli=balli + 2;}

if(confirm('Станіслав ворона?') == true){
    balli=balli + 1;
}
if(confirm('ТИ ЛЮБИШ МАМУ?') == true){
    balli=balli + 0;
}
let user = prompt('Як тебе звати?')
if(user == 'Володимир Сергійович' ||user == 'Артем' ||user == 'кокококок' ){
    balli=balli + 2;
}
let genius = prompt('Скільки буде 5-5+5?')
if(genius == '5' ||genius == 'Корінь 25' ||genius == 'пять' ){
    balli=balli + 1;
alert(`Вітаю, ви прошли тест на ${balli} балів.`);
}

