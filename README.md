# `Расширенный поиск`

## Использование

Можно указать лимит выводимых данных. По умолчанию 10.

```js
import { Search, SearchStore } from "название библиотеки";

const data = [
  {
    id: "1",
    title: "Назваение объекта",
    logo: "Путь к логотипу",
    items: [
      {
        id: "1",
        name: "Название сущности объекта",
        created: new Date(2000, 1, 1),
        updated: new Date(2000, 1, 1),
        keywords: ["Ключевые слова"],
        data: {
          "Названия дополнительных данных сущности": 1,
        },
      },
    ],
  },
];

const store = new SearchStore(data);

<section>
  <Search store={store} limit={10} />
</section>;
```
