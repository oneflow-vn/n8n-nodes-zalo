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
    displayName: 'POST /v3.0/oa/group/message',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['G I Tin Nh N Nh M D Ng Sticker'],
      },
    },
  },
  {
    displayName: 'Recipient',
    required: true,
    name: 'recipient',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Group Id',
            type: 'string',
            default: '',
            description: 'ID của nhóm',
            name: 'group_id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          recipient: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['G I Tin Nh N Nh M D Ng Sticker'],
      },
    },
  },
  {
    displayName: 'Message',
    required: true,
    name: 'message',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Attachment',
            type: 'fixedCollection',
            default: {},
            description: '',
            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'Type',
                    type: 'string',
                    default: 'template',
                    description: '',
                    name: 'type',
                  },
                  {
                    displayName: 'Payload',
                    type: 'fixedCollection',
                    default: {},
                    description: '',
                    options: [
                      {
                        displayName: 'Items',
                        name: 'items',
                        values: [
                          {
                            displayName: 'Template Type',
                            type: 'string',
                            default: 'media',
                            description: '',
                            name: 'template_type',
                          },
                          {
                            displayName: 'Elements',
                            type: 'fixedCollection',
                            default: [],
                            typeOptions: {
                              multipleValues: true,
                            },
                            name: 'elements',
                            description: '',
                            placeholder: 'Add item',
                            options: [
                              {
                                displayName: 'Items',
                                name: 'items',
                                values: [
                                  {
                                    displayName: 'Media Type',
                                    type: 'string',
                                    default: 'sticker',
                                    description: '',
                                    name: 'media_type',
                                  },
                                  {
                                    displayName: 'Attachment Id',
                                    type: 'string',
                                    default: 'bfe458bf64fa8da4d4eb',
                                    description: '',
                                    name: 'attachment_id',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    name: 'payload',
                  },
                ],
              },
            ],
            name: 'attachment',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          message: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['G I Tin Nh N Nh M D Ng Sticker'],
      },
    },
  },
]
