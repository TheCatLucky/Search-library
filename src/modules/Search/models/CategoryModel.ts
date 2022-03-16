import ItemModel from './ItemModel';

/**
 * Модель категории.
 */
class CategoryModel {
  /**
   * Идентификатор категори.
   */
  id: number;

  /**
   * Название категории.
   */
  title: string;

  /**
   * Лого категории.
   */
  logo: string;

  /**
   * Элементы категории.
   */
  items: ItemModel[];

  constructor(category: CategoryModel) {
    this.id = category.id;
    this.title = category.title;
    this.logo = category.logo;
    this.items = category.items;
  }
}

export default CategoryModel;
