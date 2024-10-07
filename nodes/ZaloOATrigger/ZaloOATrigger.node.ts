import type {
  IHookFunctions,
  IWebhookFunctions,
  IDataObject,
  INodeType,
  INodeTypeDescription,
  IWebhookResponseData,
  JsonObject,
} from 'n8n-workflow'
import {
  NodeConnectionType,
  NodeApiError,
  NodeOperationError,
} from 'n8n-workflow'
import { methods } from './ZaloOATrigger.methods'
import { webhookMethods } from './ZaloOATrigger.webhookMethods'
import { webhook } from './ZaloOATrigger.webhook'

export class ZaloOATrigger implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Github Trigger',
    name: 'githubTrigger',
    icon: { light: 'file:github.svg', dark: 'file:github.dark.svg' },
    group: ['trigger'],
    version: 1,
    subtitle:
      '={{$parameter["owner"] + "/" + $parameter["repository"] + ": " + $parameter["events"].join(", ")}}',
    description: 'Starts the workflow when Github events occur',
    defaults: {
      name: 'Github Trigger',
    },
    inputs: [],
    outputs: [NodeConnectionType.Main],
    credentials: [],
    webhooks: [
      {
        name: 'default',
        httpMethod: 'POST',
        responseMode: 'onReceived',
        path: 'webhook',
      },
    ],
    properties: [],
  }

  webhookMethods = webhookMethods
  methods = methods

  webhook = webhook
}
