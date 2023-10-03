
import { sendEmailFactory } from "@/app/backend/useCase/sendEmailCase/sendEmailFactory";
import { ISendEmailParams } from "@/types/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
  const res = await req.json()

  const data : ISendEmailParams = res

  const sendPersonalizadoEmail  = await sendEmailFactory().handle(data)

  return NextResponse.json( {sendPersonalizadoEmail} ); 
}