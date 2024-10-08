import { IDataObject, IWebhookResponseData } from 'n8n-workflow'
import { IWebhookFunctions } from 'n8n-workflow'
import { resources } from './ZaloTrigger.properties'
import { GenericValue } from 'n8n-workflow'

function isMatch (
  req: any,
  match: null | object | IDataObject | GenericValue[] | IDataObject[]
): boolean {
  // Loop through each key in the `match` object
  for (const key in match) {
    // Check if the `match` key exists in `req`
    if (!(key in req)) {
      return false // If the key doesn't exist in `req`, it's not a match
    }

    const reqValue = req[key]
    const matchValue = (match as IDataObject)[key]

    // If the value is an object, recursively check for a match
    if (typeof matchValue === 'object' && matchValue !== null) {
      if (typeof reqValue !== 'object' || !isMatch(reqValue, matchValue)) {
        return false
      }
    } else {
      // For primitive types, check if the values are equal
      if (reqValue !== matchValue) {
        return false
      }
    }
  }

  // If all keys in `match` have matching key-value pairs in `req`, return true
  return true
}

function filterMatchingRequest (req: any, filters: IDataObject[]): boolean {
  let isMatched = false

  for (const filter of filters) {
    const { match } = filter

    if (typeof match === 'object') {
      isMatched = isMatch(req, match)
    }
  }

  return isMatched
}

function getRequestMatchingEvents (
  req: any,
  resourceName: string,
  eventName: string
) {
  const resource = resources.find((resource) => resource.name === resourceName)

  if (!resource) {
    return null
  }

  if (!resource.events) {
    return null
  }

  const resourceEvent = resource?.events.find(
    (event) => event.name === eventName
  )

  if (!resourceEvent) {
    return null
  }

  if (resourceEvent.filters) {
    const isMatching = filterMatchingRequest(req, resourceEvent.filters)

    if (isMatching) {
      return null
    }
  }

  return req
}

export async function webhook (
  this: IWebhookFunctions
): Promise<IWebhookResponseData> {
  const req = this.getRequestObject()
  const resource = this.getNodeParameter('resource', '') as string
  const event = this.getNodeParameter('event', '') as string

  if (!event) {
    return {}
  }

  const matchingEvent = getRequestMatchingEvents(req, resource, event)

  if (!matchingEvent) {
    return {}
  }

  const returnData: IDataObject[] = []
  returnData.push(req as unknown as IDataObject)

  return {
    workflowData: [this.helpers.returnJsonArray(returnData)],
  }
}
