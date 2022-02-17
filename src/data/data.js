const data = {
  classes: [
    {
      id: 1,
      type: "Class",
      name: "Фильмы",
      links: 122,
      objects: [
        {
          id: 26,
          type: "Object",
          requestRate: 542,
          attribures: {
            name: "Мстители",
            year: "2012",
            genres: ["фантастика"],
            actors: [
              "Мэтт Дэймон",
              "Бен Аффлек",
              "Стеллан Скарсгард"
            ]
          }
        },
        {
          id: 29,
          type: "Object",
          requestRate: 152,
          attributes: {
            name: "Умница Уилл Хантинг",
            year: "1997",
            genres: ["драма", "мелодрама"],
            actors: [
              "Мэтт Дэймон",
              "Бен Аффлек",
              "Стеллан Скарсгард"
            ]
          }
        },
        {
          id: 30,
          type: "Object",
          requestRate: 152,
          attributes: {
            name: "Эйфория",
            year: "2019",
            genres: ["драма"],
            actors: [
              "Зендея",
              "антер Шафер",
              "Джейкоб Элорди"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      type: "Class",
      name: "Актеры",
      links: 190,
      objects: [
        {
          id: 127,
          type: "Object",
          requestRate: 442,
          attributes: {
            name: "Зендея",
            birthDate: "1 сентября, 1996",
            movies: [
              "Мегаполис",
              "Дюна 2",
              "Космический джем: Новое поколение"
            ]
          }
        },
        {
          id: 128,
          type: "Object",
          requestRate: 442,
          attributes: {
            name: "Джейкоб Элорди",
            birthDate: "26 июня, 1997",
            movies: [
              "Эйфория",
              "Глубокие воды",
              "Два сердца"
            ]
          }
        },
        {
          id: 129,
          type: "Object",
          requestRate: 322,
          attributes: {
            name: "Хантер Шафер",
            birthDate: "31 декабря, 1999",
            movies: [
              "Эйфория"
            ]
          }
        }
      ]
    }
  ],
  dataSources: [
    {
      id: 3,
      type: "DataSource",
      name: "Кинопоиск",
      linkedClasses: 190,
      linkedDataSources: 1338,
      attributes: {
        movies: "Фильмы",
        actors: "Актеры",
        writers: "Сценаристы",
        tsSeries: "Сериалы"
      }
    },
    {
      id: 4,
      type: "DataSource",
      name: "Википедия",
      linkedClasses: 678,
      linkedDataSources: 2378,
      attributes: {
        articles: "Статьи"
      }
    }
  ]
}
  


export default data