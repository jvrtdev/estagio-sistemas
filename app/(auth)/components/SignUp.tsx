"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { formFieldsRegister, RegisterSchema } from "@/schema/RegisterSchema"

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nome: "",
      data_nasc: "",
      email: "",
      cpf: "",
      sexo: "",
    },
  })

  const handleSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      toast({
        title: "Informações cadastradas!",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data)}</code>
          </pre>
        ),
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Cadastro</h1>
        <p className=""></p>
      </div>
      <form className="" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="space-y-2">
          {formFieldsRegister.map(({ name, type, placeholder, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">{label}</FormLabel>
                  <FormControl>
                    <Input {...field} type={type} placeholder={placeholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name="sexo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu sexo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="mt-3 text-white text-md    leading-[24px] font-semibold text-center w-full py-2 rounded-md"
          type="submit"
        >
          Registrar
        </Button>
      </form>
    </Form>
  )
}
{
  /* <div className="grid gap-4 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Your name here" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Birth data</Label>
          <Input id="name" type="text" placeholder="Your name here" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required className="bg-none" />
        </div>
        <Button type="submit" className="w-full rounded-md">
          Login
        </Button>
      </div> */
}
