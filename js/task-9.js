// Задание
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов.
//  Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её
//   копии с привязанным контекстом к соответствующим объектам.

// Тесты
// Объявлена переменная pizzaPalace.
// Значение переменной pizzaPalace это исходный объект.
// Объявлена переменная burgerShack.
// Значение переменной burgerShack это исходный объект.
// Объявлена функция composeMessage(customerName).
// Объявлена переменная pizzaPalaceComposer.
// Значение переменной pizzaPalaceComposer это копия функции composeMessage с контекстом привязанным к объекту pizzaPalace.
// Объявлена переменная pizzaPalaceMessage.
// Значение переменной pizzaPalaceMessage это строка 'Манго, всегда рады вас видеть в «Pizza Palace».'.
// Объявлена переменная burgerShackComposer.
// Значение переменной burgerShackComposer это копия функции composeMessage с контекстом привязанным к объекту burgerShack.
// Объявлена переменная burgerShackMessage.
// Значение переменной burgerShackMessage это строка 'Поли, всегда рады вас видеть в «Burger Shack».'.

const pizzaPalace = {
    company: 'Pizza Palace',
  };
  
  const burgerShack = {
    company: 'Burger Shack',
  };
  
  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }
  // Пиши код ниже этой строки
  
  const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
  const pizzaPalaceMessage = pizzaPalaceComposer('Манго');


  
  const burgerShackComposer = composeMessage.bind(burgerShack);
  const burgerShackMessage = burgerShackComposer('Поли');

console.log(pizzaPalaceMessage);
console.log(burgerShackMessage);


// ====================================================================
// template
// ========================================================================
//   function greet(clientName) {
//     return `${clientName}, добро пожаловать в «${this.service}».`;
//   }
  
//   const steam = { service: 'Steam' };
//   const steamGreeter = greet.bind(steam);
//   steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."
  
//   const gmail = { service: 'Gmail' };
//   const gmailGreeter = greet.bind(gmail);
//   gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."
  

