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
    displayName: 'POST /oa/message/transaction',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Gui Tin Giao Dich'],
      },
    },
  },
  {
    displayName: 'Recipient',
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
            displayName: 'User Id',
            type: 'string',
            default: '5373093274852641073',
            description: '',
            name: 'user_id',
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
        operation: ['Gui Tin Giao Dich'],
      },
    },
  },
  {
    displayName: 'Message',
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
                            default: 'transaction_order',
                            description: '',
                            name: 'template_type',
                          },
                          {
                            displayName: 'Language',
                            type: 'string',
                            default: 'VI',
                            description: '',
                            name: 'language',
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
                                    displayName: 'Attachment Id',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'attachment_id',
                                  },
                                  {
                                    displayName: 'Type',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'type',
                                  },
                                  {
                                    displayName: 'Content',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'content',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            displayName: 'Buttons',
                            type: 'fixedCollection',
                            default: [],
                            typeOptions: {
                              multipleValues: true,
                            },
                            name: 'buttons',
                            description: '',
                            placeholder: 'Add item',
                            options: [
                              {
                                displayName: 'Items',
                                name: 'items',
                                values: [
                                  {
                                    displayName: 'Title',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'title',
                                  },
                                  {
                                    displayName: 'Image Icon',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'image_icon',
                                  },
                                  {
                                    displayName: 'Type',
                                    type: 'string',
                                    default: '',
                                    description: '',
                                    name: 'type',
                                  },
                                  {
                                    displayName: 'Payload',
                                    type: 'json',
                                    default: '{}',
                                    description: '',
                                    name: 'payload',
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
        operation: ['Gui Tin Giao Dich'],
      },
    },
  },
]
