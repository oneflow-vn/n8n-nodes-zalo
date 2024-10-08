import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './ZaloOA.properties'
import { methods } from './ZaloOA.methods'

export class ZaloOA implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zalo OA',
    name: 'zaloOa',
    icon: 'file:zalo.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Zalo OA API',
    defaults: {
      name: 'Zalo OA',
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
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: 'https://openapi.zalo.me',
    },

    properties,
  }

  methods = methods
}
