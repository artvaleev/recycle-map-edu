const dayNames = {
  "monday": 'Понедельник',
  "tuesday": 'Вторник',
  "wednesday": 'Среда',
  "thursday": 'Четверг',
  "friday": 'Пятница',
  "saturday": 'Суббота',
  "sunday": 'Воскресенье',
};

const formWorkTime = (workTime) => {
  let content = '<ul>';
  Object.keys(dayNames).forEach((dayCode) => {
    if (workTime[dayCode]) {
      const [start, stop] = workTime[dayCode];
      content += `<li>${dayNames[dayCode]}: ${start}:00 - ${stop}:00</li>`;
    }
  });
  content += '</ul>';

  return content;
};

export const formBalloonContent = (item) => `<p><strong>${item.title}</strong></p><p>${item.address}</p><p>${item.description}</p><p>Время работы:<br />${formWorkTime(item.worktime)}</p>`;
