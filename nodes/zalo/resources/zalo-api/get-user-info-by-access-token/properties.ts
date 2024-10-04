/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /v2.0/me',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Zalo Api'],
        operation: ['Get User Info By Access Token'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    description: undefined,
    default: '={{$credentials.oauthTokenData.accessToken}}',
    type: 'hidden',
    routing: {
      request: {
        headers: {
          access_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Zalo Api'],
        operation: ['Get User Info By Access Token'],
      },
    },
  },
  {
    displayName: 'Fields',
    name: 'fields',
    description: undefined,
    default: 'id,name,birthday,picture',
    type: 'string',
    routing: {
      request: {
        qs: {
          fields: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Zalo Api'],
        operation: ['Get User Info By Access Token'],
      },
    },
  },
]
