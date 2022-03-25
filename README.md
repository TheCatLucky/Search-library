# `Поиск`

Библиотека поиска, написанная в процессе стажировки в ГНИВЦ.

## Использование

Библиотека предоставляет наружу: 
* компоненты Search и ResultPage
* типы ItemModel и CategoryModel
* mobx class SearchStore

Search принимает 2 обязательных свойства - store и onShowResultClick. Необязательное свойство limit, отвечающее за кол-во элементов в выпадающем списке.


ResultPage можно разместить в любом месте проекта. Обязательные свойства - store и функция-callback onItemClick.

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
