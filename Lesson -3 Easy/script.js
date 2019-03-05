// // let num = 20;

// // function showFirstMessage(text) {
// //     alert(text);
// //     console.log(num);
// // }

// // showFirstMessage("Hello World!");
// // console.log(num);


// // function calc(a,b) {
// //     return (a + b);
// // }
 
// let calc = (a,b) => a+b

// console.log(calc(3,4));


// function retVar() {
//     let num = 50;
//     return num;
// }
// let anotherNum = retVar();

// let str = "text";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2";

// console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));






let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце.", ""),
            b = prompt("Во сколько обойдется ?", "");

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--
        console.log("not done");
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (i = 1; i < 4; i++) {
        let x = prompt("Статья необязательных расходов", '');
        
    if ( (typeof(x))=== 'string' && (typeof(x)) !=null 
        && x !='' && x.length < 50) { 
        console.log("done");
        appData.optionalExpenses[i] = x;
    } else {
        i = i- 1
    }

    } 

};
chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();



function detectLevel(params) {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}
    
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доходы в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();