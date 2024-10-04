import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './zaloGroups.properties'
import { methods } from './zaloGroups.methods'

export class zaloGroups implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zalo Groups',
    name: 'zaloGroups',
    icon: 'file:zalo.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Zalo Groups API',
    defaults: {
      name: 'Zalo Groups',
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
