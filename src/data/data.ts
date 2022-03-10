import CategoryModel from '../modules/Search/models/CategoryModel';
import classLogo from '../assets/class.svg';
import objectLogo from '../assets/object.svg';
import dataSourceLogo from '../assets/dataSource.svg';
import uniqLogo from '../assets/UniqLogo.svg';
const data: CategoryModel[] = [
  {
    id: '1',
    title: 'Классы',
    logo: classLogo,
    items: [
      {
        id: '101',
        name: 'Кинопоиск',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        logo: uniqLogo,
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
        id: '102',
        name: 'Википедия',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '23',
        name: 'Вконтакте',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '26',
        name: 'Одноклассники',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
    id: '2',
    title: 'Объекты',
    logo: objectLogo,
    items: [
      {
        id: '101',
        name: 'Триллеры',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '102',
        name: 'Комедии',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '22',
        name: 'Ужасы',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '23',
        name: 'Приключения',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '24',
        name: 'Боевики',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
    id: '3',
    title: 'Источники данных',
    logo: dataSourceLogo,
    items: [
      {
        id: '101',
        name: 'Азиатская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '102',
        name: 'Японская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '103',
        name: 'Австралийская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '104',
        name: 'Российская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
        id: '105',
        name: 'Мексиканская',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
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
