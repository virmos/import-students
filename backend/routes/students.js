import Router from '@koa/router';
import config  from '../utils/config.js';
import StudentsControllers from '../controllers/students.js';

const api = 'students';

const router = new Router()

router.prefix(`/${config.BASE_API}/${api}`);

// GET /api/students
router.get('/', StudentsControllers.find);
router.post('/', StudentsControllers.add);

export default router;