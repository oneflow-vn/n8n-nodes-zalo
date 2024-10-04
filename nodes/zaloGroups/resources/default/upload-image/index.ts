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

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Upload Image'

const rawOption: INodePropertyOptions = {
  name: 'Upload Image',
  value: 'Upload Image',
  action: 'Upload Image Default',
  description:
    'Use this API to upload an image. After upload, the image will need to be sent to the user and will be stored on the server for a maximum of 7 days. Quota for the API is 5000 requests per day/week/month. Required permissions: Ability to send messages and notifications via OA. operationId: uploadImage',
  routing: {
    request: {
      method: 'POST',
      url: '=/oa/upload/image',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
