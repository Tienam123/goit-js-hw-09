const data = [
  {
    name: [
      `<ul>
        <li>Оголошена змінна customer</li>
        <li>Код отформатирован Prettier</li>
        <li><a href="./1-gallery.html">Перейти на страницу выполнения задания</a></li>
      </ul>`,
    ],
  },
  {
    name: [
      `<ul>
        <li>Створи клас Storage, який створюватиме об'єкти для управління складом товарів.Клас очікує лише один аргумент — початковий масив товарів який записується до створеного об'єкта в приватну властивість items.</li>
        <li>getItems() — повертає масив поточних товарів у приватній властивості items.</li>
        <li><a href="./2-form.html">Перейти на страницу выполнения задания</a></li>
        </ul>`,
    ],
  },
];
const buttons = document.querySelectorAll('.btn-resources');
const tabContent = document.querySelector('#tab-content');
buttons.forEach(el => el.addEventListener('click', handleClickTab));

function handleClickTab(e) {
  buttons.forEach((el, index) => {
      el.classList.remove('active');
    },
  );
  e.target.classList.add('active');
  tabContent.innerHTML = data[e.target.dataset.number].name;
}