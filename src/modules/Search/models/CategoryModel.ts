import ItemModel from './ItemModel';

/**
 * Модель категории.
 */
class CategoryModel {
  /**
   * Идентификатор категори.
   */
  id: string;

  /**
   * Название категории.
   */
  title: string;

  /**
   * Лого категории.
   */
  logo?: string;

  /**
   * Элементы категории.
   */
  items: ItemModel[];

  constructor(category: CategoryModel) {
    this.logo = category.logo;
    this.id = category.id;
    this.title = category.title;
    this.items = category.items;
  }
}

export default CategoryModel;
