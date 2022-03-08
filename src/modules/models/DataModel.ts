// Модель категории
class DataModel<DataType = any> {
  id: string;

  title: string;

  logo?: string;

  /*
  Данные, который пользователь вводит для отображения
  */
  items?: DataType;

  constructor(items: DataModel) {
    this.logo = items.logo;
    this.id = items.id;
    this.title = items.title;
    this.items = items.items;
  }
}

export default DataModel;
