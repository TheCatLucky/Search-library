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
        name: 'Название класса',
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
        name: 'Название класса 1',
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
        name: 'Название класса 2',
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
        name: 'Название класса 3',
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
        name: 'Название класса 4',
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
        name: 'Название класса 5',
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
        name: 'Название класса 6',
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
        name: 'Название объекта 1',
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
        name: 'Название объекта 2',
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
        name: 'Название объекта 3',
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
        name: 'Название объекта 4',
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
        name: 'Название объекта 5',
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
        name: 'Название источника данных',
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
        name: 'Название источника данных 2',
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
        name: 'Название источника данных 3',
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
        name: 'Название источника данных 4',
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
        name: 'Название источника данных 5',
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
