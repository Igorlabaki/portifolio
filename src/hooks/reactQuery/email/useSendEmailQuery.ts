
import { api } from "@/services/axios";
import { ISendEmailParams } from "@/types/sendEmail";
import { useMutation } from "@tanstack/react-query";


export  function useSendEmailQuery(){
    const {
            data: sendEmail,
            isError: erroSendEmail,
            isLoading: IsSendEmailLoading,
            isSuccess: isSendEmailSuccess,
            mutate: sendEmailMutate
        } = useMutation({
            mutationFn: async (bodyReq: ISendEmailParams) => {
                return   api
                .post("/api/sendEmail", bodyReq)
                .then((resp) => resp.data)
            },
            onSuccess: () => {
                
            }
        }
    )

    return {sendEmail, erroSendEmail, IsSendEmailLoading,isSendEmailSuccess, sendEmailMutate}
}
