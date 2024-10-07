import { IDataObject, IWebhookResponseData } from 'n8n-workflow'
import { IWebhookFunctions } from 'n8n-workflow'

function isRequestMatchingEvents (
  req: any,
  resource: string,
  events: string[]
): boolean {
  if (req.resource !== resource) {
    return false
  }

  if (!req.events) {
    return false
  }

  for (const event of events) {
    if (!req.events.includes(event)) {
      return false
    }
  }

  return true
}

export async function webhook (
  this: IWebhookFunctions
): Promise<IWebhookResponseData> {
  const req = this.getRequestObject()
  const resource = this.getNodeParameter('resource', '') as string
  const events = this.getNodeParameter('events', []) as string[]

  if (events.length === 0) {
    return {}
  }

  const isMatching = isRequestMatchingEvents(req, resource, events)

  if (!isMatching) {
    return {}
  }

  const returnData: IDataObject[] = []
  returnData.push(req)

  return {
    workflowData: [this.helpers.returnJsonArray(returnData)],
  }
}
