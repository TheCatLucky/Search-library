import DataModel from '../modules/models/DataModel';
import classLogo from '../modules/icons/class.svg';
import objectLogo from '../modules/icons/object.svg';
import dataSourceLogo from '../modules/icons/dataSource.svg';

const data: DataModel[] = [
  {
    id: '1',
    title: 'Классы',
    logo: classLogo,
    items: [
      {
        id: '101',
        name: 'Кинопоиск',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: {
          'Связанные классы': 190,
          'Связанные объекты': 1338,
          Атрибуты: 312,
        },
      },
      {
        id: '102',
        name: 'Википедия',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Статьи'],
        data: {
          'Связанные классы': 678,
          'Связанные объекты': 2378,
          Атрибуты: 312,
        },
      },
      {
        id: '23',
        name: 'Вконтакте',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
      },
      {
        id: '26',
        name: 'Одноклассники',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
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
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: {
          'Связанные классы': 190,
          'Связанные объекты': 1338,
          Атрибуты: 312,
        },
      },
      {
        id: '102',
        name: 'Комедии',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Статьи'],
        data: {
          'Связанные классы': 678,
          'Связанные объекты': 2378,
          Атрибуты: 312,
        },
      },
      {
        id: '22',
        name: 'Ужасы',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
      },
      {
        id: '23',
        name: 'Приключения',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
      },
      {
        id: '24',
        name: 'Боевики',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
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
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: {
          'Связанные классы': 190,
          'Связанные объекты': 1338,
          Атрибуты: 312,
        },
      },
      {
        id: '102',
        name: 'Японская',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: ['Статьи'],
        data: {
          'Связанные классы': 678,
          'Связанные объекты': 2378,
          Атрибуты: 312,
        },
      },
      {
        id: '103',
        name: 'Австралийская',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
      },
      {
        id: '104',
        name: 'Российская',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
          'Связанные атрибуты': 12,
        },
      },
      {
        id: '105',
        name: 'Мексиканская',
        createDate: new Date(2022, 1, 17),
        updateDate: new Date(2022, 1, 17),
        keywords: [
          'Мстители',
          '2012',
          'фантастика',
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
        data: {
          Атрибуты: 542,
          'Связанные объекты': 12,
        },
      },
    ],
  },
];
export default data;
