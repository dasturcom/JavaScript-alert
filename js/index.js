// document.querySelector("body").style.backgroundColor = "crimson"
alert(`Xush kelibsiz! \nIltimos ro'yhatni to'ldiring!`, "");
var firstName = prompt ("Ismingizni kiriting!").trim().toUpperCase();
var surName = prompt ("Familiyangizni kiriting!").trim().toUpperCase();
var age = prompt ("Yoshingizni kiriting!").trim();
var year = 16;
var ageYear = year - age;



alert(`Tekshirib oling: \nSizning ismingiz: ${firstName}! \nFamiliyangiz: ${surName}! \nYoshingiz: ${age}da!`);

if (age >= year) {
    var title = document.createElement("h1");
    title.textContent = 'Tabriklaymiz royhatdan otinggiz!'
    document.body.append(title);
} else {
    var heding = document.createElement("h1");
    heding.textContent = `Kechirasizhali yosh ekansiz ${ageYear}-yildan kegin ro'yhatdan o'ting`
    document.body.append(heding);
}

document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.marginLeft = "auto";
document.querySelector("h1").style.marginRight = "auto";


// function title() {
//     console.log(year);
// }

// title()

// var title = document.createElement("h1");
// title.textContent = 'Tabriklaymiz royhatdan otinggiz!'
// document.body.append(title)

// var heding = document.createElement("h1");
// heding.textContent = `Kechirasizhali yosh ekansiz ${ageYear}-yildan kegin ro'yhatdan o'ting`
// document.body.append(heding)

alert("Mijoz, \niPhone 14, 799$");

var money = prompt('Necha pulingiz bor mijoz?');
var phone = 799;

if (money >= phone) {
    var title = document.createElement("h2");
    title.textContent = 'Tabriklaymiz haridingiz bilan!'
    document.body.append(title);
}   else {
    var title = document.createElement("h2");
    title.textContent = 'Oylik tushganda kelarsiz!'
    document.body.append(title)
}

document.querySelector("h2").style.color = "white";
document.querySelector("h2").style.marginLeft = "auto";
document.querySelector("h2").style.marginRight = "auto";