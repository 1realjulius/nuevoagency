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
        const {EmailId,SenderName,SenderEmail,SenderMessage,BudgetOption,Birthday,Wedding}:{EmailId: String,SenderName: String,SenderEmail: String,SenderMessage: String,BudgetOption: String,Birthday: String,Wedding: String} = req.body
        const msg = {
            to: 'iamjuliuseghan@icloud.com',
            from: 'support@webncos.com',
        }
    }
}
