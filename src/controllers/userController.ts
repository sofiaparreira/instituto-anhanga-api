import { Request, Response } from "express";
import { UserModel } from "../models/User";
import Logger from "../../config/logger";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface LoginRequestBody {
    email: string;
    senha: string;
}

export async function login(req: Request<{}, {}, LoginRequestBody>, res: Response) {
    try {
        const { email, senha } = req.body;

        // Busca o usuário pelo email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        // Verifica a senha (precisa ser hash no banco)
        const isMatch = await bcrypt.compare(senha, user.senha!);
        if (!isMatch) {
            return res.status(400).json({ error: "Senha incorreta" });
        }

        // Cria token JWT
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || "segredo",
            { expiresIn: "2h" }
        );

        return res.status(200).json({
            message: "Login realizado",
            token
        });

    } catch (error: any) {
        Logger.error(`Erro no login: ${error.message}`);
        return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" });
    }
}


// interface RegisterRequestBody {
//   email: string;
//   senha: string;
// }

// export async function register(req: Request<{}, {}, RegisterRequestBody>, res: Response) {
//   try {
//     const { email, senha } = req.body;

//     // Verifica se já existe usuário
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Usuário já existe" });
//     }

//     // Gera hash da senha
//     const senhaHash = await bcrypt.hash(senha, 10);

//     // Cria o usuário
//     const user = new UserModel({
//       email,
//       senha: senhaHash
//     });

//     await user.save();

//     return res.status(201).json({ message: "Usuário criado com sucesso" });

//   } catch (error: any) {
//     Logger.error(`Erro ao registrar usuário: ${error.message}`);
//     return res.status(500).json({ error: "Erro no sistema, entre em contato com o suporte" });
//   }
// }
