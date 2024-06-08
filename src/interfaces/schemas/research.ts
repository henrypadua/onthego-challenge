import * as z from 'zod'

export const schemaResearch = z.object({
  research: z.string().min(1, 'Campo obrigatório'),
})
