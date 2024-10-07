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

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import { runHooks } from './hooks'

import * as guiZnsVoiJourneyToken from './gui-zns-voi-journey-token'
import * as sendZnsUsingHashPhone from './send-zns-using-hash-phone'
import * as getSampleDataOfATemplate from './get-sample-data-of-a-template'
import * as retrieveCustomerFeedbackInformation from './retrieve-customer-feedback-information'
import * as retrieveCurrentZnsQualityOfOa from './retrieve-current-zns-quality-of-oa'
import * as generateRsaPublicKey from './generate-rsa-public-key'
import * as retrieveRsaPublicKey from './retrieve-rsa-public-key'
import * as sendEncryptedMessage from './send-encrypted-message'
import * as khoiTaoJourneyToken from './khoi-tao-journey-token'
import * as kiemTraJourneyToken from './kiem-tra-journey-token'
import * as retrieveZnsMessageStatus from './retrieve-zns-message-status'
import * as retrieveZnsQuotaInformation from './retrieve-zns-quota-information'
import * as getAllowedZnsContentTypes from './get-allowed-zns-content-types'
import * as layDanhSachTemplate from './lay-danh-sach-template'
import * as getTemplateInformationV1 from './get-template-information-v-1'
import * as getTemplateInformationV2 from './get-template-information-v-2'

const operations: INodePropertyOptions[] = [
  guiZnsVoiJourneyToken.option,
  sendZnsUsingHashPhone.option,
  getSampleDataOfATemplate.option,
  retrieveCustomerFeedbackInformation.option,
  retrieveCurrentZnsQualityOfOa.option,
  generateRsaPublicKey.option,
  retrieveRsaPublicKey.option,
  sendEncryptedMessage.option,
  khoiTaoJourneyToken.option,
  kiemTraJourneyToken.option,
  retrieveZnsMessageStatus.option,
  retrieveZnsQuotaInformation.option,
  getAllowedZnsContentTypes.option,
  layDanhSachTemplate.option,
  getTemplateInformationV1.option,
  getTemplateInformationV2.option,
]

export const name = 'default'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['default'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...guiZnsVoiJourneyToken.properties,
  ...sendZnsUsingHashPhone.properties,
  ...getSampleDataOfATemplate.properties,
  ...retrieveCustomerFeedbackInformation.properties,
  ...retrieveCurrentZnsQualityOfOa.properties,
  ...generateRsaPublicKey.properties,
  ...retrieveRsaPublicKey.properties,
  ...sendEncryptedMessage.properties,
  ...khoiTaoJourneyToken.properties,
  ...kiemTraJourneyToken.properties,
  ...retrieveZnsMessageStatus.properties,
  ...retrieveZnsQuotaInformation.properties,
  ...getAllowedZnsContentTypes.properties,
  ...layDanhSachTemplate.properties,
  ...getTemplateInformationV1.properties,
  ...getTemplateInformationV2.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
