import type { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { methods } from './ZaloTrigger.methods'
import { webhookMethods } from './ZaloTrigger.webhookMethods'
import { webhook } from './ZaloTrigger.webhook'
import { properties } from './ZaloTrigger.properties'

export class ZaloTrigger implements INodeType {
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
    outputs: ['main'],
    credentials: [],
    webhooks: [
      {
        name: 'default',
        httpMethod: 'POST',
        responseMode: 'onReceived',
        path: 'webhook',
      },
    ],
    properties,
  }

  webhookMethods = webhookMethods
  methods = methods

  webhook = webhook
}
