import { body } from "express-validator"

export const contatoValidation = () => {
    return[
        body("nome")
            .trim()
            .isString().withMessage("Nome inválido")
            .notEmpty().withMessage("O campo 'nome' é obrigatório")
            .isLength({min: 2, max: 100}).withMessage("O nome deve ter entre 5 e 100 caracteres"),
        body("email")
            .notEmpty().withMessage("O campo 'email' é obrigatório")
            .isEmail().withMessage("Email inválido")
            .trim(),
        body("mensagem")
            .notEmpty().withMessage("O campo 'mensagem' é obrigatório")
            .isString().withMessage("Mensagem inválida")
            .isLength({min: 10, max: 600}).withMessage("A mensagem deve ter entre 5 e 600 caracteres"),
        
        
        body("telefone")
            .optional({ checkFalsy: true })
            .isNumeric().withMessage("Telefone inválido, use apenas números")
            .isLength({ min: 11, max: 11 }).withMessage("O telefone deve ter entre 8 e 15 números")
        

    ]
}