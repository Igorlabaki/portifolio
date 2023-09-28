"use client"

export  function ServiceFormComponent() {
  return (
    <form className="h-[481px] w-[610px]" onSubmit={(e) => e.preventDefault()}>
    <p className="text-custom-yellow text-[12px]  leading-[16px]">Feel free to reach out to me to discuss customization and the creation of your project</p>
    <div className="flex flex-col gap-y-[8px] mt-[48px]">
      <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="Name" />
      <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="E-mail" />
      <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="Interested in the service:" />
    </div>
    <textarea className="mt-[24px] bg-custom-gray-medium px-[25px] h-[167px] w-full py-[16px] text-custom-white text-[12px]" placeholder="Leave a message" />
    <button className="text-[12px] mt-[32px] bg-custom-white py-[16px] w-full font-bold active:scale-95 hover:brightness-75 duration-300" type="submit">SEND</button>
  </form>
  )
}
