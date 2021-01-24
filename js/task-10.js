// Задание
// Сервису рассылки электронной почты необходимо добавить логирование
//  действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает
//   почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор
//    статистики симулиуется логированием строки. Разберись и дополни код так, чтобы он работал верно.

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоеноа строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объектуservice.

const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
      this.mailingList = this.mailingList.filter((e) => e !== email);
      return `Почта ${email} удалена из рассылки.`;
    },
  };
  
  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
  }
  
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service) );
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.
  
  console.log(service.mailingList);
  /* ['mango@mail.com', 
      'poly@hotmail.de', 
      'ajax@jmail.net', 
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.
  
  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

//   const customer = {
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции


// // ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.


  