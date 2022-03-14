import CategoryModel from '../modules/Search/models/CategoryModel';
import classLogo from '../assets/class.svg';
import objectLogo from '../assets/object.svg';
import dataSourceLogo from '../assets/dataSource.svg';
import uniqLogo from '../assets/UniqLogo.svg';

const data: CategoryModel[] = [
  {
    id: 1,
    title: 'Классы',
    logo: classLogo,
    items: [
      {
        id: 101,
        name: 'Кинопоиск',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        logo: uniqLogo,
        link: 'https://www.google.com/',
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },

      {
        id: 102,
        name: 'Википедия',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        link: 'https://www.google.com/',
        keywords: ['Статьи'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 103,
        name: 'Вконтакте',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 104,
        name: 'Одноклассники',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 105,
        name: 'Одноклассник',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 106,
        name: 'Одна буква И',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 107,
        name: 'Две буквы И',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 108,
        name: 'Три Буквы и',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 109,
        name: 'Четыре буквы и',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 110,
        name: 'Пять букв и!',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 111,
        name: 'Неизвестно',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 112,
        name: 'Инкогнито',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
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
        name: 'Триллеры',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 202,
        name: 'Комедии',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 203,
        name: 'Ужасы',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 204,
        name: 'Приключения',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 205,
        name: 'Боевики',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
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
        name: 'Азиатская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 302,
        name: 'Японская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Статьи'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 303,
        name: 'Австралийская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 304,
        name: 'Российская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
      {
        id: 305,
        name: 'Мексиканская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
          {
            name: 'Связанные имена',
            value: 1338,
          },
        ],
      },
    ],
  },
];
export default data;
