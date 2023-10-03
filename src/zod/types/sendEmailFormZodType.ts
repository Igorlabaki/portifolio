

import { z } from 'zod';
import { sendEmailSchema } from '../schemas/sendEmail';

export type SendEmailFormData = z.infer<typeof sendEmailSchema>;
