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
    displayName: 'POST /api/v1/groups/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
  {
    displayName: 'Accept',
    name: 'accept',
    description: undefined,
    default: '*/*',
    type: 'string',
    routing: {
      request: {
        headers: {
          accept: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
  {
    displayName: 'Current User Id',
    name: 'current_user_id',
    description: undefined,
    default: '1150533156686834759',
    type: 'number',
    routing: {
      request: {
        headers: {
          current_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'Content-Type',
    description: undefined,
    default: 'application/json',
    type: 'string',
    routing: {
      request: {
        headers: {
          'Content-Type': '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'groupId',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          groupId: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
  {
    displayName: 'Members',
    name: 'members',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Avatarurl',
            type: 'string',
            default: '',
            description: '',
            name: 'avatarUrl',
          },
          {
            displayName: 'Id',
            type: 'number',
            default: 0,
            description: '',
            name: 'id',
          },
          {
            displayName: 'Name',
            type: 'string',
            default: '',
            description: '',
            name: 'name',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          members: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Groups'],
        operation: ['Add Members To Group'],
      },
    },
  },
]
