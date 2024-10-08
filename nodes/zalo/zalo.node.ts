import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './Zalo.properties'
import { methods } from './Zalo.methods'

export class Zalo implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zalo',
    name: 'zalo',
    icon: 'file:zalo.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Zalo API',
    defaults: {
      name: 'Zalo',
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
      baseURL: 'https://graph.zalo.me',
    },

    properties,
  }

  methods = methods
}
