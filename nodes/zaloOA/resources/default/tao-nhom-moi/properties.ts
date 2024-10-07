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
    displayName: 'POST /v3.0/oa/group/creategroupwithoa',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Tao nhom moi'],
      },
    },
  },
  {
    displayName: 'Group Name',
    name: 'group_name',
    type: 'string',
    default: '',
    description: 'T n nh m',
    routing: {
      request: {
        body: {
          group_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Tao nhom moi'],
      },
    },
  },
  {
    displayName: 'Group Description',
    name: 'group_description',
    type: 'string',
    default: '',
    description: 'M t nh m',
    routing: {
      request: {
        body: {
          group_description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Tao nhom moi'],
      },
    },
  },
  {
    displayName: 'Asset Id',
    name: 'asset_id',
    type: 'string',
    default: '',
    description: 'ID g i GMF s d ng l m d ch v ho t ng c a Nh m',
    routing: {
      request: {
        body: {
          asset_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Tao nhom moi'],
      },
    },
  },
  {
    displayName: 'Member User Ids',
    name: 'member_user_ids',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: 'Danh s ch c c user trong nh m',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Item',
            name: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          member_user_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Tao nhom moi'],
      },
    },
  },
]
