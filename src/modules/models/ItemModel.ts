// Модель элемента категории
class ItemModel<ItemsType = any> {
  id: string;

  name: string;

  createDate: Date;

  updateDate: Date;

  keywords?: string[];

  /*
  Данные, который пользователь вводит для отображения
  */
  data?: ItemsType;

  constructor(data: ItemModel) {
    this.id = data.id;
    this.name = data.name;
    this.createDate = data.createDate;
    this.updateDate = data.updateDate;
    this.data = data.data;
  }
}

export default ItemModel;
