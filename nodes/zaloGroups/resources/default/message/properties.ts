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
    displayName: 'POST /message',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Message'],
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
            displayName: 'Anonymous Id',
            type: 'string',
            default: '',
            description: 'Id representing anonymous user',
            name: 'anonymous_id',
          },
          {
            displayName: 'Conversation Id',
            type: 'string',
            default: '',
            description: 'Id of the conversation',
            name: 'conversation_id',
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
        operation: ['Message'],
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
                    default: '',
                    description: 'Attachment type must be: type = template',
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
                            default: '',
                            description:
                              'Template type for image attachment should be: template_type = media',
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
                                    default: '',
                                    description:
                                      'Media type, supported values: image',
                                    name: 'media_type',
                                  },
                                  {
                                    displayName: 'Url',
                                    type: 'string',
                                    default: '',
                                    description:
                                      'Path to the image. Supported format: jpg and png. Maximum size: 1MB',
                                    name: 'url',
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
        operation: ['Message'],
      },
    },
  },
]
