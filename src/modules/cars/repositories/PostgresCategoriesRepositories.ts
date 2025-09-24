import type { Category } from "../model/Category";
import type { ICategoriesRepository, ICreateCategoryDTO } from "../repositories/ICategoriesRepository"

class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category | null {
        console.log(name)
        return null
    }
    list(): Category[] {
        return [];
    }
    create({description,name}: ICreateCategoryDTO): void {
        console.log(name, description)
    }
    
}

export {PostgresCategoriesRepository}