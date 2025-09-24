import {Router} from 'express';

import {categoriesRoutes} from './categories.routes.js';
import {specificationsRoutes} from './specifications.routes.js'

const router = Router();

router.use("/categories", categoriesRoutes);
router.use('/specifications', specificationsRoutes)


export {router}