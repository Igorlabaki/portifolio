import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { SendEmailFormData } from '@/zod/types/sendEmailFormZodType';
import { sendEmailSchema } from '@/zod/schemas/sendEmail';
import { useSendEmailQuery } from '../reactQuery/email/useSendEmailQuery';

export default function UseSendEmailHookForm() {
  const {sendEmailMutate,IsSendEmailLoading,isSendEmailSuccess} = useSendEmailQuery()
  const {
    watch,
    reset,
    trigger,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailSchema),
  });

  async function handleOnSubmit(data: {name: string, email:string, message:string, service: string}) {
    sendEmailMutate(data)
  }

  return {
    watch,
    reset,
    errors,
    trigger,
    register,
    setValue,
    handleSubmit,
    handleOnSubmit,
    IsSendEmailLoading,
    isSendEmailSuccess
  };
}
