import type { Category } from "../modules/cars/model/Category.js";
import {ICategoriesRepository, type ICreateCategoryDTO} from "./ICategoriesRepository.ts"

class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category {
        console.log(name)
        return null
    }
    list(): Category[] {
        return null
    }
    create({description,name}: ICreateCategoryDTO): void {
        console.log(name, description)
    }
    
}

export {PostgresCategoriesRepository}