import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import Client from "pixela-node";

import { MackerelWebhookRequest } from "../lib/mackerel/webhook";

export const run: Handler =
  async (event: APIGatewayEvent, context: Context, callback: Callback) => {
    
    const apiResponse = { statusCode: 200 }

    const reqBody: MackerelWebhookRequest
      = JSON.parse(event.body) as MackerelWebhookRequest

    if (reqBody.alert.status === 'ok') {
      callback(null, apiResponse)
      return
    }

    const pixela = new Client()
    pixela.username = process.env.PIXELA_USER
    pixela.token = process.env.PIXELA_TOKEN

    const response
      = await pixela.incrementPixel(process.env.PIXELA_GRAPH_ID).catch(e => callback(e, apiResponse))

    callback(null, apiResponse)
  }
