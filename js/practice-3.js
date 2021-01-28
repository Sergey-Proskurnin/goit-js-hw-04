const bestTeachersBlended2 = [
  { name: 'Dmitriy', slackName: '@Dima Pismenniy' },
  { name: 'Alexandr', slackName: '@Aleksandr Venik' },
  { name: 'Katerina', slackName: '@Ekaterina Aleksandrovych' },
];

const teachersWeekend = (teacher, callBackTeacher) => {
  return callBackTeacher(teacher);
};

const teacherСheck = teacherName => {
  for (const teacher of bestTeachersBlended2) {
    if (teacher.slackName === teacherName) {
      return `Of course, ${teacher.name}, happy journey! See you next weekend!`;
    }
  }
  return `No way, work hard this weekend!`;
};
console.log(teachersWeekend('@Dima Pismenniy', teacherСheck));
