// routes.ts - server rest routes.
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/info', (req: Request, res: Response) => {
	res.send({ name: "typescript express server", version: "1.0", date: "January 2018" });
});

export const Routes = router;