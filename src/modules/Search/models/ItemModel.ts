// Модель элемента категории
class ItemModel<ItemsType = any> {
  id: string;

  name: string;

  create: Date;

  update: Date;

  keywords?: string[];

  /**
   *Данные, который пользователь вводит для отображения
   */
  data?: ItemsType;

  constructor(data: ItemModel) {
    this.id = data.id;
    this.name = data.name;
    this.create = data.create;
    this.update = data.update;
    this.data = data.data;
  }
}

export default ItemModel;
