import type { Category } from "../../../cars/model/Category.js";
import type { ICategoriesRepository } from "../../repositories/ICategoriesRepository.js";

class ListCategoriesUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute(): Category[]{
        const categories = this.categoriesRepository.list()

        return categories;
    }
}

export {ListCategoriesUseCase};