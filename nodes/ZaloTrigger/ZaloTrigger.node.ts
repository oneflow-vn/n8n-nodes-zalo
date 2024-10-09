import type { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { methods } from './ZaloTrigger.methods'
import { webhookMethods } from './ZaloTrigger.webhookMethods'
import { webhook } from './ZaloTrigger.webhook'
import { properties } from './ZaloTrigger.properties'

export class ZaloTrigger implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zalo Trigger',
    name: 'zaloTrigger',
    icon: 'file:zalo.svg',
    group: ['trigger'],
    version: 1,
    subtitle:
      '={{$parameter["resource"] + ": " + $parameter["event"].join(", ")}}',
    description: 'Zalo Triggers',
    defaults: {
      name: 'Zalo Trigger',
    },
    inputs: [],
    outputs: ['main'],
    credentials: [],
    webhooks: [
      {
        name: 'default',
        httpMethod: 'POST',
        responseMode: 'onReceived',
        path: 'zalo',
      },
    ],
    properties,
  }

  webhookMethods = webhookMethods
  methods = methods

  webhook = webhook
}
