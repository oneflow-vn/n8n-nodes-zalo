import { INodeProperties } from 'n8n-workflow'

export const resources = [
  {
    displayName: 'Default',
    name: 'Default',
    value: 'default',
    description: 'Default Resource',
    events: [
      {
        name: 'Sự kiện người dùng gửi vị trí',
        value: 'user_send_location',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_location',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn hình ảnh',
        value: 'user_send_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn liên kết',
        value: 'user_send_link',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_link',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn text',
        value: 'user_send_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn sticker',
        value: 'user_send_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn gif',
        value: 'user_send_gif',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_gif',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện tin nhắn đã được nhận',
        value: 'user_received_message',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_received_message',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng đã đọc tin nhắn',
        value: 'user_seen_message',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_seen_message',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn voice',
        value: 'user_send_audio',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_audio',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng quan tâm Official Account',
        value: 'follow',
        filters: [
          {
            match: {
              body: {
                event_name: 'follow',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng bỏ quan tâm Official Account',
        value: 'unfollow',
        filters: [
          {
            match: {
              body: {
                event_name: 'unfollow',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng chia sẻ thông tin',
        value: 'user_submit_info',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_submit_info',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện đơn hàng được tạo',
        value: 'shop_has_order',
        filters: [
          {
            match: {
              body: {
                event_name: 'shop_has_order',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn text',
        value: 'oa_send_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn hình ảnh',
        value: 'oa_send_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn tương tác',
        value: 'oa_send_list',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_list',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn gif',
        value: 'oa_send_gif',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_gif',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn video',
        value: 'user_send_video',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_video',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện các nhãn của Official Account được cập nhật',
        value: 'add_user_to_tag',
        filters: [
          {
            match: {
              body: {
                event_name: 'add_user_to_tag',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn đính kèm file',
        value: 'user_send_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn đính kèm file',
        value: 'oa_send_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng click nút “Nhắn tin” trên Official Account',
        value: 'user_click_chatnow',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_click_chatnow',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng thả biểu tượng cảm xúc lên tin nhắn',
        value: 'user_reacted_message',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_reacted_message',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA thả biểu tượng cảm xúc lên tin nhắn',
        value: 'oa_reacted_message',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_reacted_message',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn sticker',
        value: 'oa_send_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi yêu cầu thực hiện cuộc gọi đến người dùng / yêu cầu đã hết hạn',
        value: 'oa_send_consent',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_consent',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng trả lời yêu cầu thực hiện cuộc gọi từ OA',
        value: 'user_reply_consent',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_reply_consent',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn text',
        value: 'anonymous_send_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'anonymous_send_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn hình ảnh',
        value: 'anonymous_send_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'anonymous_send_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn file',
        value: 'anonymous_send_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'anonymous_send_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn sticker',
        value: 'anonymous_send_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'anonymous_send_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn text đến người dùng ẩn danh',
        value: 'oa_send_anonymous_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_anonymous_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn hình ảnh đến người dùng ẩn danh',
        value: 'oa_send_anonymous_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_anonymous_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn file đến người dùng ẩn danh',
        value: 'oa_send_anonymous_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_anonymous_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn sticker đến người dùng ẩn danh',
        value: 'oa_send_anonymous_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_anonymous_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA kết thúc cuộc gọi đến người dùng',
        value: 'oa_call_user',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_call_user',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng kết thúc cuộc gọi đến OA',
        value: 'user_call_oa',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_call_oa',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn template',
        value: 'oa_send_template',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_template',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi danh thiếp',
        value: 'user_send_business_card',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_business_card',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng phản hồi template đánh giá dịch vụ',
        value: 'user_feedback',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_feedback',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo về thay đổi hạn mức gửi ZNS',
        value: 'change_oa_daily_quota',
        filters: [
          {
            match: {
              body: {
                event_name: 'change_oa_daily_quota',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo thay đổi về loại nội dung ZNS có thể gửi',
        value: 'change_oa_template_tags',
        filters: [
          {
            match: {
              body: {
                event_name: 'change_oa_template_tags',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo thay đổi về chất lượng gửi của mẫu tin ZNS',
        value: 'change_template_quality',
        filters: [
          {
            match: {
              body: {
                event_name: 'change_template_quality',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo thay đổi quota mẫu ZNS rủi ro',
        value: 'change_template_quota',
        filters: [
          {
            match: {
              body: {
                event_name: 'change_template_quota',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo Journey hết hạn',
        value: 'event_journey_time_out',
        filters: [
          {
            match: {
              body: {
                event_name: 'event_journey_time_out',
              },
            },
          },
        ],
      },
      {
        name: 'Thông báo Journey được tính phí',
        value: 'event_journey_acknowledged',
        filters: [
          {
            match: {
              body: {
                event_name: 'event_journey_acknowledged',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng nhận thông báo ZNS',
        value: 'user_received_message',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_received_message',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện tạo nhóm OA',
        value: 'create_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'create_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện thành viên mới tham gia nhóm',
        value: 'user_join_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_join_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện thành viên mới yêu cầu tham gia nhóm',
        value: 'user_request_join_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_request_join_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện duyệt thành viên',
        value: 'react_request_join_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'react_request_join_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện reject thành viên',
        value: 'reject_request_join_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'reject_request_join_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện thêm phó nhóm',
        value: 'add_group_admin',
        filters: [
          {
            match: {
              body: {
                event_name: 'add_group_admin',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện xóa phó nhóm',
        value: 'remove_group_admin',
        filters: [
          {
            match: {
              body: {
                event_name: 'remove_group_admin',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện cập nhật thông tin nhóm',
        value: 'update_group_info',
        filters: [
          {
            match: {
              body: {
                event_name: 'update_group_info',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện rời nhóm',
        value: 'user_out_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_out_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện giải tán nhóm',
        value: 'disperse_group',
        filters: [
          {
            match: {
              body: {
                event_name: 'disperse_group',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn văn bản tới nhóm',
        value: 'oa_send_group_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn hình ảnh tới nhóm',
        value: 'oa_send_group_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn liên kết tới nhóm',
        value: 'oa_send_group_link',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_link',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn âm thanh tới nhóm',
        value: 'oa_send_group_audio',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_audio',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn vị trí tới nhóm',
        value: 'oa_send_group_location',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_location',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn video tới nhóm',
        value: 'oa_send_group_video',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_video',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn danh thiếp tới nhóm',
        value: 'oa_send_group_business_card',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_business_card',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn sticker tới nhóm',
        value: 'oa_send_group_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn gif tới nhóm',
        value: 'oa_send_group_gif',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_gif',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện OA gửi tin nhắn file tới nhóm',
        value: 'oa_send_group_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'oa_send_group_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn văn bản tới nhóm',
        value: 'user_send_group_text',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_text',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn hình ảnh tới nhóm',
        value: 'user_send_group_image',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_image',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn liên kết tới nhóm',
        value: 'user_send_group_link',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_link',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn âm thanh tới nhóm',
        value: 'user_send_group_audio',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_audio',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn vị trí tới nhóm',
        value: 'user_send_group_location',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_location',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn video tới nhóm',
        value: 'user_send_group_video',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_video',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn danh thiếp tới nhóm',
        value: 'user_send_group_business_card',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_business_card',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn sticker tới nhóm',
        value: 'user_send_group_sticker',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_sticker',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn gif tới nhóm',
        value: 'user_send_group_gif',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_gif',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn file tới nhóm',
        value: 'user_send_group_file',
        filters: [
          {
            match: {
              body: {
                event_name: 'user_send_group_file',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện thay đổi trạng thái Template ZNS',
        value: 'change_template_status',
        filters: [
          {
            match: {
              body: {
                event_name: 'change_template_status',
              },
            },
          },
        ],
      },
      {
        name: 'Sự kiện hủy quyền giữa ứng dụng và Official Account',
        value: 'permission_revoked',
        filters: [
          {
            match: {
              body: {
                event_name: 'permission_revoked',
              },
            },
          },
        ],
      },
    ],
  },
]

export const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  options: [
    {
      name: 'Default',
      value: 'Default',
    },
  ],
  default: 'Default',
}

export const events: INodeProperties[] = [
  {
    displayName: 'Event',
    name: 'event',
    type: 'options',
    options: [
      {
        name: 'Sự kiện người dùng gửi vị trí',
        value: 'user_send_location',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn hình ảnh',
        value: 'user_send_image',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn liên kết',
        value: 'user_send_link',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn text',
        value: 'user_send_text',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn sticker',
        value: 'user_send_sticker',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn gif',
        value: 'user_send_gif',
      },
      {
        name: 'Sự kiện tin nhắn đã được nhận',
        value: 'user_received_message',
      },
      {
        name: 'Sự kiện người dùng đã đọc tin nhắn',
        value: 'user_seen_message',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn voice',
        value: 'user_send_audio',
      },
      {
        name: 'Sự kiện người dùng quan tâm Official Account',
        value: 'follow',
      },
      {
        name: 'Sự kiện người dùng bỏ quan tâm Official Account',
        value: 'unfollow',
      },
      {
        name: 'Sự kiện người dùng chia sẻ thông tin',
        value: 'user_submit_info',
      },
      {
        name: 'Sự kiện đơn hàng được tạo',
        value: 'shop_has_order',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn text',
        value: 'oa_send_text',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn hình ảnh',
        value: 'oa_send_image',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn tương tác',
        value: 'oa_send_list',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn gif',
        value: 'oa_send_gif',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn video',
        value: 'user_send_video',
      },
      {
        name: 'Sự kiện các nhãn của Official Account được cập nhật',
        value: 'add_user_to_tag',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn đính kèm file',
        value: 'user_send_file',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn đính kèm file',
        value: 'oa_send_file',
      },
      {
        name: 'Sự kiện người dùng click nút “Nhắn tin” trên Official Account',
        value: 'user_click_chatnow',
      },
      {
        name: 'Sự kiện người dùng thả biểu tượng cảm xúc lên tin nhắn',
        value: 'user_reacted_message',
      },
      {
        name: 'Sự kiện OA thả biểu tượng cảm xúc lên tin nhắn',
        value: 'oa_reacted_message',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn sticker',
        value: 'oa_send_sticker',
      },
      {
        name: 'Sự kiện OA gửi yêu cầu thực hiện cuộc gọi đến người dùng / yêu cầu đã hết hạn',
        value: 'oa_send_consent',
      },
      {
        name: 'Sự kiện người dùng trả lời yêu cầu thực hiện cuộc gọi từ OA',
        value: 'user_reply_consent',
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn text',
        value: 'anonymous_send_text',
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn hình ảnh',
        value: 'anonymous_send_image',
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn file',
        value: 'anonymous_send_file',
      },
      {
        name: 'Sự kiện người dùng ẩn danh gửi tin nhắn sticker',
        value: 'anonymous_send_sticker',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn text đến người dùng ẩn danh',
        value: 'oa_send_anonymous_text',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn hình ảnh đến người dùng ẩn danh',
        value: 'oa_send_anonymous_image',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn file đến người dùng ẩn danh',
        value: 'oa_send_anonymous_file',
      },
      {
        name: 'Sự kiện Official Account gửi tin nhắn sticker đến người dùng ẩn danh',
        value: 'oa_send_anonymous_sticker',
      },
      {
        name: 'Sự kiện OA kết thúc cuộc gọi đến người dùng',
        value: 'oa_call_user',
      },
      {
        name: 'Sự kiện người dùng kết thúc cuộc gọi đến OA',
        value: 'user_call_oa',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn template',
        value: 'oa_send_template',
      },
      {
        name: 'Sự kiện người dùng gửi danh thiếp',
        value: 'user_send_business_card',
      },
      {
        name: 'Sự kiện người dùng phản hồi template đánh giá dịch vụ',
        value: 'user_feedback',
      },
      {
        name: 'Thông báo về thay đổi hạn mức gửi ZNS',
        value: 'change_oa_daily_quota',
      },
      {
        name: 'Thông báo thay đổi về loại nội dung ZNS có thể gửi',
        value: 'change_oa_template_tags',
      },
      {
        name: 'Thông báo thay đổi về chất lượng gửi của mẫu tin ZNS',
        value: 'change_template_quality',
      },
      {
        name: 'Thông báo thay đổi quota mẫu ZNS rủi ro',
        value: 'change_template_quota',
      },
      {
        name: 'Thông báo Journey hết hạn',
        value: 'event_journey_time_out',
      },
      {
        name: 'Thông báo Journey được tính phí',
        value: 'event_journey_acknowledged',
      },
      {
        name: 'Sự kiện người dùng nhận thông báo ZNS',
        value: 'user_received_message',
      },
      {
        name: 'Sự kiện tạo nhóm OA',
        value: 'create_group',
      },
      {
        name: 'Sự kiện thành viên mới tham gia nhóm',
        value: 'user_join_group',
      },
      {
        name: 'Sự kiện thành viên mới yêu cầu tham gia nhóm',
        value: 'user_request_join_group',
      },
      {
        name: 'Sự kiện duyệt thành viên',
        value: 'react_request_join_group',
      },
      {
        name: 'Sự kiện reject thành viên',
        value: 'reject_request_join_group',
      },
      {
        name: 'Sự kiện thêm phó nhóm',
        value: 'add_group_admin',
      },
      {
        name: 'Sự kiện xóa phó nhóm',
        value: 'remove_group_admin',
      },
      {
        name: 'Sự kiện cập nhật thông tin nhóm',
        value: 'update_group_info',
      },
      {
        name: 'Sự kiện rời nhóm',
        value: 'user_out_group',
      },
      {
        name: 'Sự kiện giải tán nhóm',
        value: 'disperse_group',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn văn bản tới nhóm',
        value: 'oa_send_group_text',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn hình ảnh tới nhóm',
        value: 'oa_send_group_image',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn liên kết tới nhóm',
        value: 'oa_send_group_link',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn âm thanh tới nhóm',
        value: 'oa_send_group_audio',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn vị trí tới nhóm',
        value: 'oa_send_group_location',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn video tới nhóm',
        value: 'oa_send_group_video',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn danh thiếp tới nhóm',
        value: 'oa_send_group_business_card',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn sticker tới nhóm',
        value: 'oa_send_group_sticker',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn gif tới nhóm',
        value: 'oa_send_group_gif',
      },
      {
        name: 'Sự kiện OA gửi tin nhắn file tới nhóm',
        value: 'oa_send_group_file',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn văn bản tới nhóm',
        value: 'user_send_group_text',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn hình ảnh tới nhóm',
        value: 'user_send_group_image',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn liên kết tới nhóm',
        value: 'user_send_group_link',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn âm thanh tới nhóm',
        value: 'user_send_group_audio',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn vị trí tới nhóm',
        value: 'user_send_group_location',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn video tới nhóm',
        value: 'user_send_group_video',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn danh thiếp tới nhóm',
        value: 'user_send_group_business_card',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn sticker tới nhóm',
        value: 'user_send_group_sticker',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn gif tới nhóm',
        value: 'user_send_group_gif',
      },
      {
        name: 'Sự kiện người dùng gửi tin nhắn file tới nhóm',
        value: 'user_send_group_file',
      },
      {
        name: 'Sự kiện thay đổi trạng thái Template ZNS',
        value: 'change_template_status',
      },
      {
        name: 'Sự kiện hủy quyền giữa ứng dụng và Official Account',
        value: 'permission_revoked',
      },
    ],
    default: 'user_send_location',
    displayOptions: {
      show: {
        resource: ['default'],
      },
    },
  },
]

export const properties: INodeProperties[] = [resourceSelect, ...events]
