"use client"

import { shakeAnimation } from "@/consts/animations";
import UseSendEmailHookForm from "@/hooks/formHooks/sendEmailFormHooks"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export  function ServiceFormComponent() {
  const {register,handleOnSubmit,handleSubmit,errors,IsSendEmailLoading} = UseSendEmailHookForm()
  const controlsNameInput = useAnimation();
  const controlsEmailInput = useAnimation();
  const controlsMessageInput = useAnimation();
  const controlsServiceInput = useAnimation();

  useEffect(() => {
   if(errors.email){
    controlsEmailInput.start(shakeAnimation)
   }
   if(errors.name){
    controlsNameInput.start(shakeAnimation)
   }
   if(errors.service){
    controlsServiceInput.start(shakeAnimation)
   }
   if(errors.message){
    controlsMessageInput.start(shakeAnimation)
   }
  }, [errors])

  return (
    <form className="h-[481px] w-[610px]" onSubmit={handleSubmit(handleOnSubmit)}>
    <p className="text-custom-yellow text-[12px]  leading-[16px]">Feel free to reach out to me to discuss customization and the creation of your project</p>
    <div className="flex flex-col gap-y-[8px] mt-[48px]">
      <motion.input animate={controlsNameInput}  {...register("name")} type="text" className={`bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]  outline-none  ${errors.name ? "border-[2px] border-red-800" : "text-custom-white"} `} placeholder="Name"/>
      <motion.input animate={controlsEmailInput} {...register("email")} type="text" className={`bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px] outline-none ${errors.email ? " border-[2px] border-red-800" : "text-custom-white"} `} placeholder="E-mail" />
      <motion.input animate={controlsServiceInput} {...register("service")} type="text" className={`bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px] outline-none ${errors.service ? "border-[2px] border-red-800" : "text-custom-white"} `} placeholder="Interested in the service:" />
    </div>
    <motion.textarea  animate={controlsMessageInput} {...register("message")} className={`mt-[24px] bg-custom-gray-medium px-[25px] h-[167px] w-full py-[16px] text-custom-white text-[12px] outline-none ${errors.message ? "border-[2px] border-red-800" : "text-custom-white"}  `}placeholder="Leave a message" />
    <button className={`text-[12px] mt-[32px] bg-custom-white py-[16px] w-full font-bold active:scale-95 hover:brightness-75 duration-300 ${IsSendEmailLoading && "animate-pulse"}`} type="submit">{IsSendEmailLoading ? "SENDING..." : "SEND "}</button>
  </form>
  )
}
