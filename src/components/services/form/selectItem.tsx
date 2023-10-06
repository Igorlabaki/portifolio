"use client"
import { shakeAnimation } from '@/consts/animations';
import UseSendEmailHookForm from '@/hooks/formHooks/sendEmailFormHooks';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'

import {
  FieldValues,
  Path as PathGeneric,
  PathValue as PathValueGeneric,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";
import { IoIosArrowDown } from 'react-icons/io';


interface SelectItemProps<T extends FieldValues> {
  field?: string;
  errors: boolean;
  fieldList?: string[];
  listOptions: string[];
  watch: UseFormWatch<T>;
  trigger: UseFormTrigger<T>;
  setValue: UseFormSetValue<T>;
}

export default function SelectItemComponent<T extends FieldValues>({ field,watch,trigger,setValue,errors,listOptions }: SelectItemProps<T>) {
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false)
  const filedWatch = watch(field as PathGeneric<T>);
  const controlsServiceInput = useAnimation();

  useEffect(() => {
    if (filedWatch) {
      trigger(field as PathGeneric<T>);
    }
  }, [filedWatch, trigger, field]);

  useEffect(() => {
    if (errors) {
     controlsServiceInput.start(shakeAnimation)
    }
  }, [])
  
  return (
    <motion.div className={`w-full flex flex-col gap-y-1 relative`} animate={controlsServiceInput}>
      <motion.div onClick={() => setSelectIsOpen(!selectIsOpen)}  className={`flex justify-between 
      bg-custom-gray-medium px-[25px] w-full py-[16px] text-white   text-[12px] placeholder:text-white ${errors ? "border-[2px] border-red-800" : "text-custom-white border-0"}`}>
        <p>{filedWatch ? filedWatch : "Interested in the service"}</p>
        <IoIosArrowDown className={`${selectIsOpen ? "rotate-180" : "rotate-0"} duration-300 text-[20px] cursor-pointer`}/> 
      </motion.div>
      <motion.div className={`bg-custom-gray-medium w-full z-50 top-10 overflow-hidden shadow-md absolute flex flex-col justify-start items-start
        ${errors && !selectIsOpen ? "border-0" : errors && selectIsOpen ? "border-b-[2px] border-l-[2px] border-r-[2px] border-red-800" :  "text-custom-white border-0"}`} 
        initial={{height: 0}} animate={{height: selectIsOpen ? "176px" : "0"}} transition={{duration: 0.5}
      }>
      {
        listOptions.map((item: any, index: number) => {
          return(
            <p
              key={index}
              className='bg-custom-gray-medium px-[25px] w-full text-start py-[16px] text-white text-[12px] cursor-pointer hover:brightness-[.88]'
              onClick={() => {
                setValue(
                  field as PathGeneric<T>,
                  item as PathValueGeneric<T, PathGeneric<T>>
                );
                setSelectIsOpen(false);
              }}
            >
            {item}
          </p>
        )
        })
      } 
      </motion.div>
  </motion.div>
  );
}
