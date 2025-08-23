import {body} from "express-validator";

export const petBodyValidation = () => {
    return [
        body("nome")
            .trim()
            .isString().withMessage("Campo 'nome' inválido")
            .notEmpty().withMessage("O campo 'nome' é obrigatório")
            .isLength({min: 2, max: 30}).withMessage("O campo 'nome' deve ter entre 2 e 30 caracteres"),
        
        body("tipo")
            .trim()
            .notEmpty().withMessage("Selecione se o animal é cachorro ou gato")
            .isIn(["Cachorro", "Gato"]).withMessage("O tipo deve ser 'Cachorro' ou 'Gato'"),
        
        body("sexo")
            .notEmpty()
            .withMessage("O campo 'sexo' é obrigatório")
            .isIn(["Macho", "Fêmea"])
            .withMessage("O campo 'sexo' deve ser 'Macho' ou 'Fêmea'"),
        
        body("idade")
            .notEmpty().withMessage("O campo 'idade' é obrigatório")
            .isInt({min: 0, max: 30}).withMessage("O campo 'idade' deve ser um número válido"),

        body("idadeUnidade")
            .notEmpty().withMessage("Selecione qual a unidade da idade (anos, meses, semanas)")
            .isIn(["anos", "meses", "semanas"]),
            

        body("porte")
            .notEmpty().withMessage("O campo 'porte' é obrigatório")
            .isIn(["pequeno", "médio", "grande"]).withMessage("O campo 'porte' deve ser 'pequeno', 'médio' ou 'grande'"),

        body("isCastrado")
            .notEmpty().withMessage("Selecione se o animal é castrado")
            .isBoolean().withMessage("O campo 'castrado' deve ser verdadeiro ou falso"),

         body("isVacinado")
            .notEmpty().withMessage("Selecione se o animal é vacinado")
            .isBoolean().withMessage("O campo 'vacinado' deve ser verdadeiro ou falso"),

         body("isVermifugado")
            .notEmpty().withMessage("Selecione se o animal é vermifugado")
            .isBoolean().withMessage("O campo 'vermifugado' deve ser verdadeiro ou falso"),

        body("descricao")
            .optional()
            .isLength({max: 1000}).withMessage("A descrição deve ter no máximo 1000 caracteres"),
        
        body("fotoUrl")
            .notEmpty().withMessage("O campo 'foto' é obrigatório")
            .isURL().withMessage("O campo 'foto' deve conter uma URL válida")
           
    ]
}