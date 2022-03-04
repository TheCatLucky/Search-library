import { Data } from '../models/data';

const data: Data = {
  classes: [
    {
      id: 1,
      name: 'Триллеры',
      links: 122,
      objects: 105,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: ['Название', 'Год выпуска', 'Жанры', 'Актеры'],
      /*  attributes: {
        "year" : [1997,1998, 1975]
      } */
    },
    {
      id: 2,
      name: 'Актеры',
      links: 190,
      objects: 105,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: ['Имя', 'Дата рождения', 'Фильмы с участием'],
    },
  ],

  dataSources: [
    {
      id: 101,
      name: 'Кинопоиск',
      linkedClasses: 190,
      linkedDataSources: 1338,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
    },
    {
      id: 102,
      name: 'Википедия',
      linkedClasses: 678,
      linkedDataSources: 2378,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: ['Статьи'],
    },
  ],

  objects: [
    {
      id: 26,
      name: 'Название объекта',
      requestRate: 542,
      linkedObjects: 12,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: [
        'Мстители',
        '2012',
        'фантастика',
        'Мэтт Дэймон',
        'Бен Аффлек',
        'Стеллан Скарсгард',
      ],
    },
    {
      id: 29,
      name: 'Название объекта',
      requestRate: 152,
      linkedObjects: 12,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: [
        'Умница Уилл Хантинг',
        '1997',
        'драма',
        'мелодрама',
        'Мэтт Дэймон',
        'Бен Аффлек',
        'Стеллан Скарсгард',
      ],
    },
    {
      id: 30,
      name: 'Название объекта',
      requestRate: 152,
      linkedObjects: 12,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: [
        'Эйфория',
        '2019',
        'драма',
        'Зендея',
        'антер Шафер',
        'Джейкоб Элорди',
      ],
    },
    {
      id: 127,
      name: 'Название объекта',
      requestRate: 442,
      linkedObjects: 15,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: [
        'Зендея',
        '1 сентября, 1996',
        'Мегаполис',
        'Дюна 2',
        'Космический джем: Новое поколение',
      ],
    },
    {
      id: 128,
      name: 'Название объекта',
      requestRate: 444,
      linkedObjects: 15,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: [
        'Джейкоб Элорди',
        '26 июня, 1997',
        'Эйфория',
        'Глубокие воды',
        'Два сердца',
      ],
    },
    {
      id: 129,
      name: 'Название объекта',
      requestRate: 322,
      linkedObjects: 15,
      created: new Date(2022, 1, 17),
      lastUpdate: new Date(2022, 1, 17),
      tags: ['Хантер Шафер', '31 декабря, 1999', 'Эйфория'],
    },
  ],
};

export default data;
