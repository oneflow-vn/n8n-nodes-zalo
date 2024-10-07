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

import * as layDanhSachThanhVienChoDuyet from './lay-danh-sach-thanh-vien-cho-duyet'
import * as acceptNewMemberIntoAGroup from './accept-new-member-into-a-group'
import * as rejectsAPendingMembershipInviteFromAGroup from './rejects-a-pending-membership-invite-from-a-group'
import * as layDanhSachThanhVienNhom from './lay-danh-sach-thanh-vien-nhom'
import * as addsAdminsToAGroup from './adds-admins-to-a-group'
import * as deleteSubgroup from './delete-subgroup'
import * as disbandingAGroup from './disbanding-a-group'
import * as fetchTheListOfOaManagedGroups from './fetch-the-list-of-oa-managed-groups'
import * as getAListOfRecentGroupMessages from './get-a-list-of-recent-group-messages'
import * as retrieveGroupConversationInformation from './retrieve-group-conversation-information'
import * as guiTinNhanNhomDangSticker from './gui-tin-nhan-nhom-dang-sticker'
import * as sendAGroupMessage from './send-a-group-message'
import * as taoNhomMoi from './tao-nhom-moi'
import * as retrieveInformationAboutAGroup from './retrieve-information-about-a-group'
import * as updateGroup from './update-group'
import * as updateGroupChatService from './update-group-chat-service'
import * as inviteInterestedPeopleToGroup from './invite-interested-people-to-group'

const operations: INodePropertyOptions[] = [
  layDanhSachThanhVienChoDuyet.option,
  acceptNewMemberIntoAGroup.option,
  rejectsAPendingMembershipInviteFromAGroup.option,
  layDanhSachThanhVienNhom.option,
  addsAdminsToAGroup.option,
  deleteSubgroup.option,
  disbandingAGroup.option,
  fetchTheListOfOaManagedGroups.option,
  getAListOfRecentGroupMessages.option,
  retrieveGroupConversationInformation.option,
  guiTinNhanNhomDangSticker.option,
  sendAGroupMessage.option,
  taoNhomMoi.option,
  retrieveInformationAboutAGroup.option,
  updateGroup.option,
  updateGroupChatService.option,
  inviteInterestedPeopleToGroup.option,
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
  ...layDanhSachThanhVienChoDuyet.properties,
  ...acceptNewMemberIntoAGroup.properties,
  ...rejectsAPendingMembershipInviteFromAGroup.properties,
  ...layDanhSachThanhVienNhom.properties,
  ...addsAdminsToAGroup.properties,
  ...deleteSubgroup.properties,
  ...disbandingAGroup.properties,
  ...fetchTheListOfOaManagedGroups.properties,
  ...getAListOfRecentGroupMessages.properties,
  ...retrieveGroupConversationInformation.properties,
  ...guiTinNhanNhomDangSticker.properties,
  ...sendAGroupMessage.properties,
  ...taoNhomMoi.properties,
  ...retrieveInformationAboutAGroup.properties,
  ...updateGroup.properties,
  ...updateGroupChatService.properties,
  ...inviteInterestedPeopleToGroup.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
