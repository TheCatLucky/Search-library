const data = {
  classes: [
    {
      id: 1,
      name: 'Фильмы',
      links: 122,
      created: '17.02.2022',
      lastObjectUpdate: '17.02.2022',
      attributes: {
        name: 'Название',
        year: 'Год выпуска',
        genres: 'Жанры',
        actors: 'Актеры',
      },
    },
    {
      id: 2,
      name: 'Актеры',
      links: 190,
      created: '17.02.2022',
      lastObjectUpdate: '17.02.2022',
      attributes: {
        name: 'Имя',
        birthDate: 'Дата рождения',
        movies: 'Фильмы с участием',
      },
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
      attributes: {
        movies: 'Фильмы',
        actors: 'Актеры',
        writers: 'Сценаристы',
        tsSeries: 'Сериалы',
      },
    },
    {
      id: 102,
      name: 'Википедия',
      linkedClasses: 678,
      linkedDataSources: 2378,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        articles: 'Статьи',
      },
    },
  ],

  objects: [
    {
      id: 26,
      requestRate: 542,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attribures: {
        name: 'Мстители',
        year: '2012',
        genres: ['фантастика'],
        actors: [
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
      },
    },
    {
      id: 29,
      requestRate: 152,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        name: 'Умница Уилл Хантинг',
        year: '1997',
        genres: ['драма', 'мелодрама'],
        actors: [
          'Мэтт Дэймон',
          'Бен Аффлек',
          'Стеллан Скарсгард',
        ],
      },
    },
    {
      id: 30,
      requestRate: 152,
      linkedObjects: 12,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        name: 'Эйфория',
        year: '2019',
        genres: ['драма'],
        actors: [
          'Зендея',
          'антер Шафер',
          'Джейкоб Элорди',
        ],
      },
    },
    {
      id: 127,
      requestRate: 442,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        name: 'Зендея',
        birthDate: '1 сентября, 1996',
        movies: [
          'Мегаполис',
          'Дюна 2',
          'Космический джем: Новое поколение',
        ],
      },
    },
    {
      id: 128,
      requestRate: 444,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        name: 'Джейкоб Элорди',
        birthDate: '26 июня, 1997',
        movies: [
          'Эйфория',
          'Глубокие воды',
          'Два сердца',
        ],
      },
    },
    {
      id: 129,
      requestRate: 322,
      linkedObjects: 15,
      created: '17.02.2022',
      lastUpdate: '17.02.2022',
      attributes: {
        name: 'Хантер Шафер',
        birthDate: '31 декабря, 1999',
        movies: [
          'Эйфория',
        ],
      },
    },
  ],
};

export default data;
