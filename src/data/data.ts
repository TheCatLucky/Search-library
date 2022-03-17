import classLogo from '../assets/Class.svg';
import objectLogo from '../assets/Object.svg';
import dataSourceLogo from '../assets/DataSource.svg';
import uniqLogo from '../assets/UniqLogo.svg';
import { CategoryModel } from '../modules/search';

const data: CategoryModel[] = [
  {
    id: 1,
    title: 'Классы',
    logo: classLogo,
    items: [
      {
        id: 101,
        name: 'Класс ППО 137/569-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        logo: uniqLogo,
        keywords: ['Класс', 'Название', 'ГНИВЦ'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },

      {
        id: 102,
        name: 'Класс ППО 186/129-ОЛ',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 103,
        name: 'Класс ДКГ 023/332-ЛЛ',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Класс', 'Название', 'ГНИВЦ'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 104,
        name: 'Класс ОМЛ 096/153-ЛК',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Класс', 'Название', 'ГНИВЦ'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 105,
        name: 'Класс ППО 117/529-ДК',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 106,
        name: 'Класс ППП 197/579-ПК',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 107,
        name: 'Класс ПРО 107/069-МД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 108,
        name: 'Класс ПРО 108/069-МД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 109,
        name: 'Класс ПРО 109/069-МД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 110,
        name: 'Класс ПРО 111/069-МД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
      {
        id: 111,
        name: 'Класс ПРО 101/069-МД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи', 'Ссылки'],
        data: [
          {
            name: 'Объекты',
            value: 1338,
          },
          {
            name: 'Атрибуты',
            value: 199,
          },
          {
            name: 'Связи',
            value: 536,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Объекты',
    logo: objectLogo,
    items: [
      {
        id: 201,
        name: 'Объект ППЛ 107/509-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 202,
        name: 'Объект РКП 145/504-ВФ',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 203,
        name: 'Объект ППЛ 117/509-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 204,
        name: 'Объект ППЛ 107/519-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 205,
        name: 'Объект ППЛ 107/533-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 206,
        name: 'Объект ППЛ 167/533-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 207,
        name: 'Объект ППЛ 147/533-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 208,
        name: 'Объект ППЛ 167/833-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 209,
        name: 'Объект ППЛ 125/533-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 210,
        name: 'Объект ППЛ 217/533-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
      {
        id: 211,
        name: 'Объект ППЛ 217/103-ДД',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Объект', 'Атрибут', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 131,
          },
          {
            name: 'Связанные объекты',
            value: 1338,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Источники данных',
    logo: dataSourceLogo,
    items: [
      {
        id: 301,
        name: 'Источник данных РП-154/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 302,
        name: 'Источник данных РП-104/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 303,
        name: 'Источник данных РП-234/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 304,
        name: 'Источник данных РП-150/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 305,
        name: 'Источник данных РП-654/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 306,
        name: 'Источник данных РП-644/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 307,
        name: 'Источник данных РП-654/58',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 308,
        name: 'Источник данных РП-654/08',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 309,
        name: 'Источник данных РП-154/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 310,
        name: 'Источник данных РП-754/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
      {
        id: 311,
        name: 'Источник данных РП-610/78',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Источник', 'Атрибут', 'Класс', 'ГНИВЦ'],
        data: [
          {
            name: 'Атрибуты',
            value: 123,
          },
          {
            name: 'Связанные классы',
            value: 523,
          },
          {
            name: 'Связанные источники данных',
            value: 10,
          },
        ],
      },
    ],
  },
];
export default data;
