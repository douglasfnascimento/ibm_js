const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

// Ao selecionar um item ou palavra desejada, as outras serão destacadas no visual studio code, então basta ir em command + d para selecionar todas as palavras iguais, e depois é só apagar o que não for necessário, ou substituir por outra palavra, ou ainda adicionar mais palavras iguais. Dessa forma, você pode editar o código de maneira mais rápida e eficiente, sem precisar clicar várias vezes em cada palavra ou item que deseja alterar. Isso é especialmente útil quando você tem listas grandes ou quando precisa fazer alterações em várias partes do código ao mesmo tempo.