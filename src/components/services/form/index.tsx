"use client"
import toast from 'react-hot-toast';
import { shakeAnimation } from "@/consts/animations";
import UseSendEmailHookForm from "@/hooks/formHooks/sendEmailFormHooks"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {FaCheck} from "react-icons/fa"
import {IoIosArrowDown} from "react-icons/io"
import SelectItemComponent from './selectItem';

interface ServiceFormProps{
  title: string;
}

export  function ServiceFormComponent({title}:ServiceFormProps) {
  const {register,handleOnSubmit,handleSubmit,errors,IsSendEmailLoading,isSendEmailSuccess,setValue,trigger,watch} = UseSendEmailHookForm()

  const controlsNameInput = useAnimation();
  const controlsEmailInput = useAnimation();
  const controlsMessageInput = useAnimation();

  useEffect(() => {
   if(errors.email?.message){
    controlsEmailInput.start(shakeAnimation)
   }
   if(errors.name?.message){
    controlsNameInput.start(shakeAnimation)
   }
   if(errors.message?.message){
    controlsMessageInput.start(shakeAnimation)
   }
  }, [errors])

  useEffect(() => {
    if(isSendEmailSuccess){
      toast.success("Email sent successfully! We'll be in touch shortly.", {
        duration: 3000,
      })
    }
  }, [isSendEmailSuccess])

  return (
    <form className="h-[581px] w-[550px]" onSubmit={handleSubmit(handleOnSubmit)}>
    <p className="text-custom-yellow text-[12px]  leading-[16px]">{title}</p>
    <div className="flex flex-col gap-y-[8px] mt-[48px] w-full" >
      <motion.input animate={controlsNameInput}  {...register("name")} type="text" className={`bg-custom-gray-medium px-[25px] w-full py-[16px] text-white text-[12px] placeholder:text-white  outline-none  ${errors.name ? "border-[2px] border-red-800" : "text-custom-white"} `} placeholder="Name"/>
      <motion.input animate={controlsEmailInput} {...register("email")} type="text" className={`bg-custom-gray-medium px-[25px]  w-full py-[16px] text-white text-[12px] placeholder:text-white outline-none ${errors.email ? " border-[2px] border-red-800" : "text-custom-white"} `} placeholder="E-mail" />
      <SelectItemComponent
          watch={watch}
          field={"service"}
          trigger={trigger}
          setValue={setValue}
          errors={!!errors.service}
          listOptions={["UX Design","UI Design","Research","Brand Design"]}
        />
    </div>
    <motion.textarea  animate={controlsMessageInput} {...register("message")} className={`mt-[24px] bg-custom-gray-medium px-[25px] h-[167px] w-full py-[16px] text-custom-white text-[12px] placeholder:text-white outline-none ${errors.message ? "border-[2px] border-red-800" : "text-custom-white"}  `}placeholder="Leave a message" />
    <button disabled={isSendEmailSuccess || IsSendEmailLoading ?  true : false} className={`text-[12px] mt-[32px]  py-[16px] w-full font-bold   duration-300 ${IsSendEmailLoading && "animate-pulse"} ${isSendEmailSuccess ? "bg-custom-yellow" : "bg-custom-white active:scale-95 hover:brightness-75"} duration-300`} type="submit">{IsSendEmailLoading ? "SENDING..." : isSendEmailSuccess ? <span className="flex w-full justify-center items-center gap-x-[10px]"><FaCheck size={18}/><p>CONTACT SENT</p></span> : "SEND "}</button>
  </form>
  )
}
