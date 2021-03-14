import { Router } from 'express';
import { ExampleController } from './example.controller';

export const exampleRoute = Router();
const exampleController = new ExampleController();

exampleRoute.get('/:id', exampleController.getPerson);

exampleRoute.get('/:name/:age', (req, res) => {
  const person = {
    name: req.params.name,
    age: req.params.age,
  };
  return res.send(person).status(200).end();
});
