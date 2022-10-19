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
        const {senderID,
            senderName,
            senderEmail,
            senderMessage,
            eventType,
            eventBudget,}= req.body
        const msg = {
            to: 'iamjuliuseghan@icloud.com',
            from: 'support@webncos.com',
            subject:`Nuevo Agency Message from ${senderID}`,
            text:`
            Client Name : ${senderName}\r\n 
            Client Email : ${senderEmail}\r\n
            Client Interest : ${eventType}\r\n
            Client Budget : ${eventBudget}\r\n
            Client Message : ${senderMessage}`,
            html:`
            Client Name : ${senderName}\r\n 
            Client Email : ${senderEmail}\r\n
            Client Interest : ${eventType}\r\n
            Client Budget : ${eventBudget}\r\n
            Client Message : ${senderMessage}`,
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
