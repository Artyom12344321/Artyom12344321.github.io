let password = 1234;
let tryes = 3;
for(i=0;i<3;i++){
if(prompt(`Введіть пароль. Залишилось спроб - ${tryes}`) == password){
break
} else{
    tryes--
}
if(tryes == 1){alert('Остання спроба')}
}