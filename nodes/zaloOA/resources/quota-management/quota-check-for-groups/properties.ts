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
    displayName: 'POST /v3.0/oa/quota/group',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Quota Management'],
        operation: ['Quota check for groups'],
      },
    },
  },
  {
    displayName: 'Quota Owner',
    name: 'quota_owner',
    type: 'string',
    default: '',
    description:
      'Quota owner to retrieve OA for Official Account and APP for application',
    routing: {
      request: {
        body: {
          quota_owner: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Quota Management'],
        operation: ['Quota check for groups'],
      },
    },
  },
  {
    displayName: 'Product Type',
    name: 'product_type',
    type: 'options',
    default: 'gmf10',
    description: 'The product type to retrieve',
    options: [
      {
        name: 'gmf10',
        value: 'gmf10',
      },
      {
        name: 'gmf50',
        value: 'gmf50',
      },
      {
        name: 'gmf100',
        value: 'gmf100',
      },
    ],
    routing: {
      request: {
        body: {
          product_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Quota Management'],
        operation: ['Quota check for groups'],
      },
    },
  },
  {
    displayName: 'Quota Type',
    name: 'quota_type',
    type: 'options',
    default: 'sub_quota',
    description: 'The type of quota to retrieve',
    options: [
      {
        name: 'sub_quota',
        value: 'sub_quota',
      },
      {
        name: 'purchase_quota',
        value: 'purchase_quota',
      },
      {
        name: 'reward_quota',
        value: 'reward_quota',
      },
    ],
    routing: {
      request: {
        body: {
          quota_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Quota Management'],
        operation: ['Quota check for groups'],
      },
    },
  },
]
