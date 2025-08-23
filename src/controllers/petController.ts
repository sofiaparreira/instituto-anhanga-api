import { Request, Response } from "express";
import { PetModel } from "../models/Pet";
import Logger from "../../config/logger";

export async function createPet(req: Request, res: Response) {
    try {
        const body = req.body
        const pet = await PetModel.create(body)
        return res.status(201).json(pet)
    } catch (e: any) {
        Logger.error(`Erro no sistema ao criar pet: ${e.message}`)
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" })

    }
}

export async function getPetById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const pet = await PetModel.findById(id);

        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado" })
        }
        return res.status(200).json(pet)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" })

    }
}

export async function getAllPets(req: Request, res: Response) {
    try {
        const pet = await PetModel.find()
        return res.status(200).json(pet)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" })

    }
}

export async function deletePet(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const pet = await PetModel.findById(id);

        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado" })
        }

        await pet.deleteOne()
        return res.status(200).json({msg: "Pet excluido com sucesso"})

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" })

    }
}


export async function updatePet (req:Request, res:Response) {
    try {
        const id = req.params.id;
        const body = req.body
        const pet = await PetModel.findById(id)
        if(!pet){
            return res.status(404).json({error: "Pet não encontrado"})
        }

        await PetModel.updateOne({ _id: id}, body)
        return res.status(200).json(body);

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" })

    }
}