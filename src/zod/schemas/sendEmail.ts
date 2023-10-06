import { z } from 'zod';

export const sendEmailSchema = z.object({
  name: z
    .string({
      required_error: 'Este campo e obrigatorio!',
    }).nonempty('Este campo e obrigatorio!'),
  email: z.string({
    required_error: 'Este campo e obrigatorio!',
  }).nonempty('Este campo e obrigatorio!'),
  service: z.string({
    required_error: 'Este campo e obrigatorio!',
  }).nonempty('Este campo e obrigatorio!'),
  message: z
    .string({
      required_error: 'Este campo e obrigatorio!',
    })
    .nonempty('Este campo e obrigatorio!'),
});
