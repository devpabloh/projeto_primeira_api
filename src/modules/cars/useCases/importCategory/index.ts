import { ImportCategoryController } from "./ImportCategoryController.js";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase.js";


const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export {importCategoryController}