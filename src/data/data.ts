const data = {
  classes: [
    {
      id: 1,
      name: 'Фильмы',
      links: 122,
      created: '17.02.2022',
      lastObjectUpdate: '17.02.2022',
      attributes: ['Название', 'Год выпуска', 'Жанры', 'Актеры'],
    },
    {
      id: 2,
      name: 'Актеры',
      links: 190,
      created: '17.02.2022',
      lastObjectUpdate: '17.02.2022',
      attributes: ['Имя', 'Дата рождения', 'Фильмы с участием'],
    },
  ],

  dataSources: [
    {
      id: 101,
      name: 'Кинопоиск',
      linkedClasses: 190,
      linkedDataSources: 1338,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
    },
    {
      id: 102,
      name: 'Википедия',
      linkedClasses: 678,
      linkedDataSources: 2378,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: ['Статьи'],
    },
  ],

  objects: [
    {
      id: 26,
      requestRate: 542,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attribures: [
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
      requestRate: 152,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: [
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
      requestRate: 152,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: [
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
      requestRate: 442,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: [
        'Зендея',
        '1 сентября, 1996',
        'Мегаполис',
        'Дюна 2',
        'Космический джем: Новое поколение',
      ],
    },
    {
      id: 128,
      requestRate: 444,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: [
        'Джейкоб Элорди',
        '26 июня, 1997',
        'Эйфория',
        'Глубокие воды',
        'Два сердца',
      ],
    },
    {
      id: 129,
      requestRate: 322,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: ['Хантер Шафер', '31 декабря, 1999', 'Эйфория'],
    },
  ],
};

export default data;
