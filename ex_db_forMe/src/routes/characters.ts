import express, { Request, Response, Router } from "express";
import Character from "../models/character";

const charactersRouter = Router();
charactersRouter.get("/", async (req: Request, res: Response) => {
  const characters = await Character.findAll();
  res.json(characters);
});


charactersRouter.get("/:id", async (req, res) => {
  const character = await Character.findByPk(req.params.id);
  if (!character) {
    return res.status(404).send('Error Id not found');
  }
  res.json(character);
});



export default charactersRouter;


