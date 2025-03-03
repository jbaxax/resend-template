"use server";

import { z } from "zod";
import { formSchema } from "./schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {

    try {
        const {  error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [emailFormData.email],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: emailFormData.firstName }) as ReactElement,
          });
        
          if(error){
            throw error;
          }
    }catch(e){
        throw e;
    }
    
}
