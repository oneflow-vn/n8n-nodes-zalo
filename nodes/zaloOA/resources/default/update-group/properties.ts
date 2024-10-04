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
    displayName: 'POST /v3.0/oa/group/updateinfo',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description:
      'Access token to allow the application to represent the OA and call the API.',
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
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    type: 'string',
    default: '',
    description: 'ID of the group',
    routing: {
      request: {
        body: {
          group_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Group Name',
    name: 'group_name',
    type: 'string',
    default: '',
    description: 'Name of the group',
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
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Group Avatar',
    name: 'group_avatar',
    type: 'string',
    default: '',
    description: 'Avatar of the group',
    routing: {
      request: {
        body: {
          group_avatar: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Group Description',
    name: 'group_description',
    type: 'string',
    default: '',
    description: 'Description of the group',
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
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Lock Send Msg',
    name: 'lock_send_msg',
    type: 'boolean',
    default: true,
    description:
      "Set the send message functionality of members. 'true': Lock messaging, 'false': Unlock messaging",
    routing: {
      request: {
        body: {
          lock_send_msg: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Join Appr',
    name: 'join_appr',
    type: 'boolean',
    default: true,
    description:
      "Set approval mode for new member. 'true': New member must be approved, 'false': No need to approve new members",
    routing: {
      request: {
        body: {
          join_appr: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Enable Msg History',
    name: 'enable_msg_history',
    type: 'boolean',
    default: true,
    description:
      "Allows new member to read the lastest messages of the group. 'true': Enable reading, 'false': Disable reading",
    routing: {
      request: {
        body: {
          enable_msg_history: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Enable Link Join',
    name: 'enable_link_join',
    type: 'boolean',
    default: true,
    description:
      "Enable/Disable joining the group using a link. 'true': Enable, 'false': Disable",
    routing: {
      request: {
        body: {
          enable_link_join: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
]
