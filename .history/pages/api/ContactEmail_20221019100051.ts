// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST'){
        const {EmailId,SenderName,SenderEmail,SenderMessage,BudgetOption,Birthday,Wedding}
        :{EmailId: String,SenderName: String,SenderEmail: String,SenderMessage: String,BudgetOption: String,Birthday: String,Wedding: String} = req.body
        const msg = {
            to: 'iamjuliuseghan@icloud.com',
            from: 'support@webncos.com',
            subject:`Nuevo Agency Message from ${EmailId}`,
            text:`
            Client Name : ${SenderName}\r\n 
            Client Email : ${SenderEmail}\r\n
            Client Interest : ${Birthday}, ${Wedding}\r\n
            Client Budget : ${BudgetOption}\r\n
            Client Message : ${SenderMessage}`,
            html:`
            Client Name : ${SenderName}<br/> 
            Client Email : ${SenderEmail}<br/>
            Client Interest : ${Birthday}, ${Wedding}<br/>
            Client Budget : ${BudgetOption}<br/>
            Client Message : ${SenderMessage}`,
        }
    }
}
