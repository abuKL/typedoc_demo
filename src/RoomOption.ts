/**
 * 房间选项
 */
export enum RoomOption {
  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示接收到视频数据后不解码直接丢弃，一般用于模拟客服端做并发测试。
   * 默认值为false，设置为true后将丢弃该房间所有接收到的视频数据，必须在join调用之前设置才有效。
   */
  ro_video_drop_data = 0,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示接收到音频数据后不解码直接丢弃，一般用于模拟客服端做并发测试。
   * 默认值为false，设置为true后将丢弃该房间所有接收到的音频数据，必须在join调用之前设置才有效。
   */
  ro_audio_drop_data = 1,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示音视频是否启用DTLS加密，DTLS加密数据更加安全，但是会加重Server
   * 的负担，在UDP丢包严重的网络环境下，媒体链接需要的时间会更多（30%丢包，链接时间10s-40s）。
   * 默认值为true，使用的是DTLS加密方式，必须在join调用之前设置才有效。
   */
  ro_media_use_dtls = 2,

  /**
   * 类型为int32, 字符类型为"3" or "2"等数字字符：设置每次断线后重连次数。系统默认为重连3次，如需改变需要应用层自己设置。在join之前或者之后设置都有效。
   */
  ro_room_reconnect_times = 3,

  /**
   * 值类型为uint32,  字符类型为"3000" or "5000" ：设置链接超时时间，单位毫秒，必须是正数，系统默认是5000毫秒。在join之前或者之后设置都有效。
   */
  ro_room_connect_timeout = 4,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示是否自动订阅音频,true 自动订阅，false 不自动订阅，默认为true
   */
  ro_audio_auto_subscribe = 5,

  /**
   * 值类型为string, 音频编码算法：字符类型为"isac" or "opus" or "pcmu"：分别表示isac语音编码 、 opus音乐编码、pcmu音乐编码；缺省为"isac"。必须在join调用之前设置才有效。
   */
  ro_audio_option_codec = 6,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示房间中混音数据回调是否缓冲为1024sample后回调：缓冲(true)和不缓冲（false），缺省为缓冲。在join之前或者之后设置都有效。
   */
  ro_audio_mixerdata_callback_buffered = 7,

  /**
   * 值类型为枚举CameraType, 字符类型为"front" or "back"：表示前后置摄像头模式时房间中默认使用的摄像头：前置(front)和后置（back），缺省为前置。必须在join调用之前设置才有效。
   */
  ro_video_default_camera = 8,

  /**
   * 值类型为int32, 字符类型为"true" or "false"：在重连失败之后是否尝试自动重新加入房间，系统默认为true。在join之前或者之后设置都有效。
   */
  ro_room_auto_rejoin = 9,

  /**
   * 值类型为int32, 单位为毫秒，字符类型为"60000"（60秒后超时不再重连） or "-1"（一直重连）等数字字符：设置断线重连失败后自动重连超时时间，在启用ro_room_auto_rejoin为true后有效。
   * 系统默认为服务器返回时间，此时间可在后台配置，如果都失败将通过onConnectionStatus接口返回cs_connectFailed状态。在join之前或者之后设置都有效。
   */
  ro_room_rejoin_times = 10,

  /**
   * 值类型为String, 房间中各种选项（根据字符枚举）立即应用。当前字符枚举有："audio_options"：Engine中设置的音频选项应用如aec，agc等。
   */
  ro_room_options_apply = 11,

  /**
   * 值类型为FakeVideoCapturer.FourccType中的枚举值, 字符类型为枚举值字符串，目前支持一下："I420" "YV12" "NV21" "NV12"：表示房间中合屏数据回调的格式。缺省为 "I420"
   */
  ro_video_mixerdata_callback_format = 12,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：设置信令消息走websocket通道，默认是走tcp连接，系统默认为false。
   */
  ro_websocket_channel = 14,

  /**
   * 信令加密，类型bool，字符串 "true" or "false", 默认使用加密 true
   */
  ro_signal_crpyto = 15,

  /**
   * 类型String ,客户设置自定义的mcu地址，默认不需要设置,格式“url:port”or"ip:port"
   */
  ro_custom_mcu_address = 100,
}
