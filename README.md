# `Расширенный поиск`

## Использование

Можно указать лимит выводимых данных. По умолчанию 10.

```js
import {
  ItemModel,
  ResultPage,
  Search,
  SearchStore,
  CategoryModel,
} from "../../modules/search";

const data: CategoryModel[] = [
  {
    id: 1,
    title: "Объекты",
    logo: "../assets/Object.svg",
    items: [
      {
        id: 1,
        name: "Объект ППО 154/748",
        created: new Date(2000, 1, 1),
        updated: new Date(2000, 1, 1),
        frequency: 0,
        keywords: ["Список", "Ключевых", "Слов"],
        data: [
          {
            name: "Атрибуты",
            value: 12,
          },
          {
            name: "Связанные объекты",
            value: 135,
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
      <Search store={store} onShowResultClick={setShowResultPage} limit={10} />
      {showResultPage && <ResultPage store={store} onItemClick={handleClick} />}
    </section>
  );
};

export default App;
```
