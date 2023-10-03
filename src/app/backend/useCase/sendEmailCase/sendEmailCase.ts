import { ISendEmailParams } from "@/types/sendEmail";
import nodemailer from "nodemailer"



class SendEmailCase {
    async execute( {email,message,name,service} : ISendEmailParams ){

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'igorlabakig@gmail.com', // Seu endereço de e-mail
              pass: process.env.EMAIL_PASSWORD, // Sua senha de e-mail
            },
        });
        
        const mailOptions = {
            from: 'igorlabakig@gmail.com',
            to:     "igorlabakig@gmail.com",
            subject: 'Work',
            html: `
            <body style="background-color: black; color: white; font-family: Arial, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1>Resposta de Contato</h1>
                    <p>Segue abaixo as informações recebidas:</p>
                    <ul>
                        <li><strong>Nome:</strong> ${name}</li>
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Tipo de Serviço:</strong> ${service}</li>
                        <li><strong>Mensagem:</strong> ${message}</li>
                    </ul>
                </div>
            </body>
            `,
        };
        
        // Envia o e-mail
        await transporter.sendMail(mailOptions); 
    }
}

export {SendEmailCase}  
