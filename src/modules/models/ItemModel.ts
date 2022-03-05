// Модель класса
class ItemModel<DataType = any> {
  id: string;

  name: string;

  createDate: Date;

  updateDate: Date;

  keywords?: string[];

  data?: DataType;

  constructor(data: ItemModel) {
    this.id = data.id;
    this.name = data.name;
    this.createDate = data.createDate;
    this.updateDate = data.updateDate;
    this.data = data.data;
  }
}

export default ItemModel;
