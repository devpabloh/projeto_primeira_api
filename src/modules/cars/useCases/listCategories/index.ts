import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository.js";
import { ListCategoriesController } from "./ListCategoriesContoller.js";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase.js";


const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};