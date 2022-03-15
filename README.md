# `Расширенный поиск`

## Использование

Можно указать лимит выводимых данных. По умолчанию 10.

```js
import {
  ItemModel,
  ResultPage,
  Search,
  SearchStore,
} from "../../modules/search";

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
        frequency: 0,
        keywords: ["Ключевые слова"],
        data: [
          {
            name: "Название атрибута",
            value: 1,
          },
        ],
      },
    ],
  },
];

const store = new SearchStore(data);

const App = () => {
  const [showResultPage, setShowResultPage] = useState(false);

  const handleClick = (item: ItemModel) => {
    //Функция, которая будет выполнятся при клике на результат поиска
  };

  return (
    <section>
      <Search store={store} limit={10} showResultPage={setShowResultPage} />
      {showResultPage && <ResultPage store={store} onItemClick={handleClick} />}
    </section>
  );
};

export default App;
```
