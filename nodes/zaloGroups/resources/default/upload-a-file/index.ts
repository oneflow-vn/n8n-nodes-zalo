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

export const name = 'Upload A File'

const rawOption: INodePropertyOptions = {
  name: 'Upload A File',
  value: 'Upload A File',
  action: 'Upload A File Default',
  description:
    'Use this API endpoint to upload and send files to users. Once uploaded and sent to the user, the file will be stored on the server for a maximum of 7 days. After this period, the user will be notified that the file no longer exists',
  routing: {
    request: {
      method: 'POST',
      url: '=/oa/upload/file',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
