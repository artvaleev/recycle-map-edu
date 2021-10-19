import { dayNames } from '@/constants';

const formWorkTime = (workTime) => {
  let content = '<ul>';
  Object.keys(dayNames).forEach((dayCode) => {
    if (!workTime[dayCode]) return true;

    const [start, stop] = workTime[dayCode];
    content += `<li>${dayNames[dayCode]}: ${start}:00 - ${stop}:00</li>`;
  });
  content += '</ul>';

  return content;
};

export const formBalloonContent = (item) => {
  return `<p><strong>${item.title}</strong>
    </p><p>${item.address}</p>
    <p>${item.description}</p>
    <p>
      Время работы:<br />
      ${formWorkTime(item.worktime)}
    </p>`;
};
