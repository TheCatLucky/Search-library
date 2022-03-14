/**
 * Модель элемента категории.
 */
class ItemModel {
  /**
   * Идентификатор элемента категории.
   */
  id: number;

  /**
   * Название элемента, по которому проводится обычный поиск
   */
  name: string;

  /**
   * Дата создания элемента категории.
   */
  created: Date;

  /**
   * Дата изменения элемента категории.
   */
  updated: Date;

  /**
   * Частота выбора элемента категории.
   */
  frequency: number;

  /**
   * Ключевые слова, для более детального поиска.
   */
  keywords?: string[];

  /**
   * Лого элемента категории.
   */
  logo?: string;

  /**
   * Ссылка для перехода на элемент.
   */
  link?: string;

  /**
   * Данные, который пользователь вводит для отображения.
   */
  data: {
    name: string;
    value: number;
  }[];

  constructor(data: ItemModel) {
    this.id = data.id;
    this.name = data.name;
    this.created = data.created;
    this.updated = data.updated;
    this.frequency = data.frequency;
    this.data = data.data;
  }
}

export default ItemModel;
