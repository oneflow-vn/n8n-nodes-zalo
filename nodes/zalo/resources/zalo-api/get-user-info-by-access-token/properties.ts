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
        resource: ['Zalo API'],
        operation: ['Get user info by access token'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    description: undefined,
    default:
      '12Qc7-LNvae19weLwb3dGG4aenlbJ-uTUqp-8jvPxtX1MV0jyNN_65flmng-KjicNYJ_3yKNsZn92_WJgm7xIqW8-6BQFki-Gnh8FFyDwYPsCjKomqNXD5bGynVm9k1CIb3ZSC1iv7vWUjXV-bB9LcT7_Nc1CRr-6nwWVemqjdOz4x9BcJwoRIqKyLlJFE9KJ1MdUj8TfrTcDuHvW1cTSnyNc2UR0Bex4HUdPV5ZksH1R_fPmtZ9Udz7_KR6STzTO6xpOjLnv3vn3UGmmolW5rO3tWomD_m2CDD5TMpZJU13',
    type: 'string',
    routing: {
      request: {
        headers: {
          access_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Zalo API'],
        operation: ['Get user info by access token'],
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
        resource: ['Zalo API'],
        operation: ['Get user info by access token'],
      },
    },
  },
]
