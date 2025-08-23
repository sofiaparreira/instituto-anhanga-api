import {Request, Response} from "express";
import { PetModel } from "../models/Pet";
import Logger from "../../config/logger";

export async function createPet(req: Request, res: Response) {
    try {
        const body = req.body
        const pet = await PetModel.create(body)
        return res.status(201).json(pet)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}