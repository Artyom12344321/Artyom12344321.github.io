let user = 'Адольф Гитлер';
let numbers =[];
for(i=0;i<7;i++){
    numbers[i] = Number(prompt('Введіть Оцінки будь ласка'))
}
let predmet ='математика'   
console.log(`Вітаю ${user}! Кількість оцінок з предмету ${predmet} рівна ${numbers.length}. Остання оцінка-${numbers[numbers.length - 1]}.`)


