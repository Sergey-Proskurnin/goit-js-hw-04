// Задание
// Дополни код так, чтобы в переменной result был результат
// выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Тесты
// Объявлена функция makePizza.
// Объявлена переменная result.
// Значение переменной result это строка 'Ваша пицца готовится, ожидайте.'.
// Значение переменной result получено с помощью вызова функции.
// Объявлена переменная pointer.
// Значение переменной pointer это ссылка на функцию makePizza.

function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
  }
  // Пиши код ниже этой строки
  
  const result = makePizza();
  const pointer = makePizza;

  console.log(result);
  console.log(pointer);
  