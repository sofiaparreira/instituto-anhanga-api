import {Request, Response} from "express";
import { PetModel } from "../models/Pet";
import Logger from "../../config/logger";

export async function createPet(req: Request, res: Response) {
    try {
        const body = req.body
        const pet = await PetModel.create(body)
        return res.status(201).json(pet)
    } catch (e: any) {
        Logger.error(`Erro no sistema ao criar pet: ${e.message}`)
    }
}

export async function getPetById (req:Request, res:Response) {
    try {
        const id = req.params.id;
        const pet = await PetModel.findById(id);

        if(!pet){
            return res.status(404).json({error: "Pet não encontrado"})
        }
        return res.status(200).json(pet)
    } catch (e:any) {
         Logger.error(`Erro no sistema ao get by id pet: ${e.message}`)
    }
}


