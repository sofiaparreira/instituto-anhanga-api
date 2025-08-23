import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface EnviaContatoBody {
    nome: string;
    email: string;
    telefone?: string;
    mensagem: string;
}

export async function enviaContato(req: Request<{}, {}, EnviaContatoBody>, res: Response) {
    try {
        const { nome, email, telefone, mensagem } = req.body;

        if (!nome || !email || !mensagem) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ADM,
                pass: process.env.PASSWORD_ADM
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_ADM,
            replyTo: email,
            to: process.env.CONTACT_EMAIL,
            subject: `Contato via site: ${nome}`,
            html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.2; color: #747474ff;">
      <h3 style="color: #346424; padding: 8px; border-bottom:2px solid #d3d3d3ff; font-size:18px">Mensagem de contato - site</h3>
   <div style="background-color: #F8F8F8; padding: 8px 16px; border-radius:6px">
     <p><strong style="color: #346424">Nome:</strong> <span style="color: #222222ff">${nome}</span></p>
      <p><strong style="color: #346424">Email:</strong><span style="color: #222222ff"> ${email}</span></p>
      <p><strong style="color: #346424">Telefone:</strong> <span style="color: #222222ff">${telefone || "não informado"}</span></p>
   </div>
     
      <p style="color: #346424"><strong>Mensagem:</strong></p>
      <p style="padding: 16px; background: #F8F8F8; border-radius: 6px; color: #222222ff">${mensagem}</p>
    </div>
  `
        };


        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Mensagem enviada com sucesso!" });

    } catch (error: any) {
        console.error("Erro ao enviar e-mail:", error.message);
        return res.status(500).json({ error: "Erro ao enviar a mensagem" });
    }
}
