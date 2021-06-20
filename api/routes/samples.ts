import { Router } from 'express'
import SampleController from "../controllers/sampleController";

const router: Router = Router();

const controller: SampleController = new SampleController();

router.get('/sample/hey', controller.sayHey);
router.post('/sample/echo', controller.echo);

export default router
