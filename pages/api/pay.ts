// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, CreatePaymentResponse, Environment } from 'square';
import { randomUUID } from 'crypto';
BigInt.prototype.toJSON = function () { return this.toString() };

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_SANDBOX_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatePaymentResponse>
) {
  if(req.method === 'POST') {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'GBP',
        amount: BigInt(100),
      }
    })
    console.log(result)
    res.status(200).json(result)
  }
}
