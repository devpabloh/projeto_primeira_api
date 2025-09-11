import { Router } from "express";
import {CategoriesRepository} from "../modules/cars/repositories/CategoriesRepository.js"
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase.js";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response)=>{
    
})

categoriesRoutes.get("/", (request,response)=>{
    const all = categoriesRepository.list()

    return response.json(all)
})

export {categoriesRoutes}