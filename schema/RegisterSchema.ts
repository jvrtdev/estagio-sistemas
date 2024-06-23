import * as z from "zod"

type FieldName = "nome" | "data_nasc" | "email" | "cpf" 

export const formFieldsRegister: {
  name: FieldName
  type: string
  placeholder: string
  label: string
}[] = [
  { name: "nome", type: "text", placeholder: "Digite seu nome", label: "Nome" },
  { name: "data_nasc", type: "date", placeholder: "DD/MM/AA", label: "Data" },
  {
    name: "email",
    type: "email",
    placeholder: "Digite seu email",
    label: "Email",
  },
  { name: "cpf", type: "text", placeholder: "Digite seu CPF", label: "CPF   " },
]

export const RegisterSchema = z.object({
  nome: z.string().min(3, {
    message: "Por favor insira um nome válido",
  }),
  data_nasc: z.string().refine(
    (value) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(value)) return false
      const [year, month, day] = value.split("-").map(Number)
      if (month < 1 || month > 12 || day < 1 || day > 31) return false
      return true
    },
    {
      message: "Por favor insira uma data válida no formato YYYY-MM-DD",
    },
  ),
  email: z
    .string()
    .email("formato de email invalido")
    .min(1, { message: "email obrigatorio" }),
  cpf: z.string().max(14, { message: "Formato de CPF inválido" }),
  sexo: z.string().min(1, { message: "Campo obrigatorio" }),
})
