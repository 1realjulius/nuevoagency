// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST'){
        const form = JSON.parse(req.body)
        const formEvent = JSON.stringify(form.eventType)
        console.log(formEvent)
         const msg = {
             to: 'iamjuliuseghan@icloud.com',
             from: 'support@webncos.com',
             subject:`Nuevo Agency Message from ${form.senderID}`,
             text:`
             Client Name : ${form.senderName}\r\n 
             Client Email : ${form.senderEmail}\r\n
             Client Interest : ${form.eventType}\r\n
             Client Budget : ${form.eventBudget}\r\n
             Client Message : ${form.senderMessage}`,
             html:`
             Client Name : ${form.senderName}\r\n 
             Client Email : ${form.senderEmail}\r\n
             Client Interest : ${form.eventType}\r\n
             Client Budget : ${form.eventBudget}\r\n
             Client Message : ${form.senderMessage}`,
         }
         try {
             await sgMail.send(msg)
             res.status(200).json({success: true})
         }
         catch(error){
             console.log(error)
             res.status(200).json({success: false})
         }
    }
}
