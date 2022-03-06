// Модель категории
class DataModel<DataType = any> {
  id: string;

  title: string;

  /*
  Данные, который пользователь вводит для отображения
  */
  items?: DataType;

  constructor(items: DataModel) {
    this.id = items.id;
    this.title = items.title;
    this.items = items.items;
  }
}

export default DataModel;
