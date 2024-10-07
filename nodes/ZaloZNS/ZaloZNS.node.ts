import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './ZaloZNS.properties'
import { methods } from './ZaloZNS.methods'

export class ZaloZNS implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zalo ZNS',
    name: 'zaloZns',
    icon: 'file:zalo.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Zalo ZNS API',
    defaults: {
      name: 'Zalo ZNS',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Zalo Oath2 API',
        name: 'zaloOath2Api',
        required: true,
      },
    ],

    requestDefaults: {
      headers: {
        'Content-Type': 'application/json',
        access_token: '={{$credentials.oauthTokenData.accessToken}}',
      },
      baseURL: 'https://business.openapi.zalo.me',
    },

    properties,
  }

  methods = methods
}
