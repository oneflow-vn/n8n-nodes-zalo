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
    displayName: 'POST /oa/message',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Multiple Message Sending Options Via Zalo Oa Api'],
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
            displayName: 'Target',
            type: 'fixedCollection',
            default: {},
            description: '',
            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'Ages',
                    type: 'string',
                    default: '0',
                    description: '',
                    name: 'ages',
                  },
                  {
                    displayName: 'Gender',
                    type: 'string',
                    default: '0',
                    description: '',
                    name: 'gender',
                  },
                  {
                    displayName: 'Locations',
                    type: 'string',
                    default: '4',
                    description: '',
                    name: 'locations',
                  },
                  {
                    displayName: 'Cities',
                    type: 'string',
                    default: '4',
                    description: '',
                    name: 'cities',
                  },
                  {
                    displayName: 'Platform',
                    type: 'string',
                    default: '1',
                    description: '',
                    name: 'platform',
                  },
                ],
              },
            ],
            name: 'target',
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
        operation: ['Multiple Message Sending Options Via Zalo Oa Api'],
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
                                    default: 'article',
                                    description: '',
                                    name: 'media_type',
                                  },
                                  {
                                    displayName: 'Attachment Id',
                                    type: 'string',
                                    default: 'bd5ea46bb32e5a0033f',
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
        operation: ['Multiple Message Sending Options Via Zalo Oa Api'],
      },
    },
  },
]
