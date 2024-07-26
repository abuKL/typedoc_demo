/**
 * 引擎选项
 */
export enum EngineOption {
  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示摄像头使用模式：前后置摄像头模式(true)和多摄像头模式（false）。
   * 多摄像头模式：本机的所有摄像头将展现在房间中；可以同时预览发布多个摄像头；桌面端本地应用和网页端应用多采用此种方式。
   * 前后置摄像头模式：本机的前后置摄像头将作为一个摄像头展现在房间中；同一时刻只能打开一个摄像头；普通移动端采用此种方式。
   */
  eo_camera_mode_frontback = 0,

  /**
   * 值类型为CameraCapability, 字符类型为"{\"width\":640,\"height\":480,\"maxFPS\":10}"：表示摄像头缺省采集参数。当前系统默认的采集
   * 参数为：windows桌面版和web网页版{640，480，10}；android/ios移动版{320，240，10}。
   */
  eo_camera_capability_default = 1,

  /**
   * 值类型为VideoQuality, 字符类型为"low" or "normal" or "high"：表示摄像头发布缺省采用的视频质量，与camera_capability_default的设置相互影响。
   * 当前系统默认的采集参数为：windows桌面版和web网页版 普通质量；android/ios移动版 流畅质量。
   */
  eo_video_quality_publish_default = 2,

  /**
   * 值类型为VideoRatio, 字符类型为"4_3" or "16_9" or "cif"：表示视频缺省宽高比。
   * 当前系统默认的采集参数为：4:3。
   */
  eo_video_ration_default = 3,

  /**
   * 值类型为VideoQuality, 字符类型为"low" or "normal" or "high"：表示订阅视频缺省采用的视频质量。
   * 当前系统默认的采集参数为：windows桌面版和web网页版 普通质量；android/ios移动版 流畅质量。
   */
  eo_video_quality_subscribe_default = 4,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示视频发布时缺省是否采用多流。
   * 当前系统默认的采集参数为：false。
   */
  eo_video_publish_svc_default = 5,

  /**
   * 值类型为VideoCodec, 字符类型为"h264"，"vp8"：表示视频编码优先采用h264，vp8编解码。
   * 当前系统默认参数值为：vp8。
   */
  eo_video_codec_priority = 6,

  /** 值类型为String：表示演示直播和录制的服务器地址，只能获取。*/
  eo_demo_urlbase_liverecord = 7,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示房间中数据通道用的网络连接类型：TCP优先(true)和UDP优先（false），
   * 缺省为UDP优先。
   */
  eo_data_channel_tcp_priority = 8,
  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示启用或不启用，建议局域网或者简单的环境不使用代理。
   * 当前系统默认参数值为：true。
   */
  eo_network_proxy = 9,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示启用或不启用视频分辨率16字节严格对齐模式；在16字节对齐模式下，分辨率的宽和高都会向对齐的分辨率靠，
   * 如1080-->1088,540-->544,180-->176等，有些硬件设备（某些android手机）只支持16字节对齐的硬件编解码，android上可以考虑开启此选项来做更好的设备兼容性和编码效率。
   * 当前系统默认参数值为：false。
   */
  eo_video_resolution_16balign = 10,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示视频publish或preview时设置的分辨率根据输入视频旋转角度变换宽高：变换宽高(true)和不变换宽高严格按设置分辨率裁剪拉伸（false），
   * 缺省为不变换宽高严格按设置分辨率裁剪拉伸。
   */
  eo_video_swapwh_by_rotation = 11,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示是否优先使用硬件编解码：优先使用硬件编解码(true)和优先使用软件编解码（false），
   * 缺省为硬件编解码优先。
   */
  eo_video_codec_hw_priority = 12,

  /**
   * android系统可用；值类型为int, 取值：[30, 400]; 字符类型数值字符串如"50"：表示AEC延时下限，用于回音消除。
   * 缺省为 80； 回音消除算法与设备的麦克风和扬声器距离，及会场大小都有关系，有可能需要特别调试。
   */
  eo_audio_aec_LowLatencyModeDelayEstimate = 13,

  /**
   * android系统可用；值类型为int, 取值：[30, 400]; 字符类型数值字符串如"50"：表示AEC延时上限，用于回音消除。
   * 缺省为 160； 回音消除算法与设备的麦克风和扬声器距离，及会场大小都有关系，有可能需要特别调试。
   */
  eo_audio_aec_HighLatencyModeDelayEstimate = 14,

  /**
   * 值类型为float, 取值：[0.1, 10.0]; 字符类型数值字符串如"2.0"：表示语音播放时的增益倍数。
   * 缺省为 1.0。
   */
  eo_audio_agc_PlayoutGainMultipleValue = 15,

  /**
   * 值类型为float, 取值：[0.1, 10.0]; 字符类型数值字符串如"2.0"：表示语音采集后的增益倍数。
   * 缺省为 1.0。值设置过大会导致声音失真。
   */
  eo_audio_agc_RecordGainMultipleValue = 16,

  /**
   * 值类型为int, 取值：[0, 500]; 字符类型数值字符串如"50"：表示AEC估计延时，用于回音消除。
   * 缺省为 0； 回音消除算法与设备的麦克风和扬声器距离，及会场大小都有关系，有可能需要特别调试。
   * | delay | in ms between AnalyzeReverseStream() receiving a far-end frame and
   * ProcessStream() receiving a near-end frame containing the corresponding echo.
   * On the client-side this can be expressed as
   * delay = (t_render - t_analyze) + (t_process - t_capture)
   */
  eo_audio_aec_AudioDelayOffset = 17,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示启用或不启用, 一般情况下都需要回音消除算法，当需要录制音乐的时候，建议关闭。
   * 当前系统默认参数值为：true。
   */
  eo_audio_aec_Enable = 18,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示在回音消除时启用或不启用延时消除算法，此算法较耗费cpu，但效果会较好，移动端缺省不启用，如果特殊需要就启用。
   * 当前系统默认参数值为：false。
   */
  eo_audio_aec_DAEcho_Enable = 19,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示在音频采集时是否使用噪音抑制，抑制后会消除部分噪音。
   * 当前系统默认参数值为：true。
   */
  eo_audio_noiseSuppression_Enable = 20,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示在音频采集时是否启用自动增益，增益打开后会自动调整麦克风采集音频大小。
   * 当前系统默认参数值为：true。
   */
  eo_audio_autoGainControl_Enable = 21,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示在音频采集时是否启用高通滤波，一些尖锐的声音会被过滤掉。
   * 当前系统默认参数值为：false。
   */
  eo_audio_highpassFilter_Enable = 22,

  /**
   * 值类型为json String：设置分布式集群部署中加房间时mcu服务器的分配路由参数。
   * 取值格式如下：{"ip_tag":"local","idc_code":""}
   * ip_tag  对应于 rtc_node_addr 中的tag标志，用于区分同一台服务器的多网卡地址，可以自定义，然后在参数中传入。举例的话，比如 'local','internal','dianxin','liantong'
   * idc_code 对应于 rtc_node 中的 idc_code标志，用于区分不同的服务器，唯一，可以自定义。比如北京服务器设置为'beijing'，杭州的设置为'hangzhou'，然后在参数中传入，用于定位到服务器。
   */
  eo_mcu_cluster_route_params = 23,

  /** 值类型为String：表示媒体服务器IP映射后对应的映射IP，通过连接此IP和相关端口可以与真实媒体服务器通讯。*/
  eo_media_connproxy_ip = 24,

  /** 值类型为int,字符类型数值字符串如"8050"：表示媒体服务器端口映射后对应的映射端口，通过连接映射IP和此I端口可以与真实媒体服务器通讯。*/
  eo_media_connproxy_port = 25,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示是否优先使用硬件编码：优先使用硬件编码(true)和优先使用软件编码（false），
   * 缺省为硬件编码优先。
   */
  eo_video_codec_hw_encode = 26,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示是否优先使用硬件解码：优先使用硬件解码(true)和优先使用软件解码（false），
   * 缺省为硬件解码优先。
   */
  eo_video_codec_hw_decode = 27,

  /**
   * 值类型为bool, 字符类型为"true" or "false"：表示在导入视频时的渲染attachRender时，是否采用导入视频直接渲染还是经过拉伸的视频再渲染。
   * 当前系统默认参数值为：false。
   */
  eo_video_renderusecapture = 28,

  /**
   * 值类型为int, 取值：[0, 3]; 字符类型数值字符串如"1"：表示在使用噪音抑制时的音频噪音程度，数字越大抑制越厉害。
   * 当前系统默认参数值为：2。
   */
  eo_audio_noiseSuppression_Level = 29,

  /**
   * 调试时使用：是否录制本地音频，类型bool ，字符串 "true" or "false",加会之前调用,生成文件在日志文件目录下。
   * 当前系统默认参数值为：false，
   */
  eo_dump_audio_pcm_record = 30,

  /** 对低分辨率视频不支持机型的设置选项，“true” 代表不支持，“false” 代表支持 */
  eo_video_resolution_lowNoSupported = 31,

  /** 这个参数主要是安卓系统系统下使用，值类型为int 值范围是[1，2，3] 默认是3，如果值为3，接受到帧数除以3后的数量来渲染。*/
  eo_video_localrender_lowfps = 32,

  /** 是否开启多流，类型bool，字符串 "true" or "false"，系统默认false，不开启。 */
  eo_video_enable_simulcast = 33,

  /** 值类型为bool，是否改变发布视频质量（分辨率和码流），字符类型为"true" or "false"：默认是true */
  eo_auto_change_resolution = 101,

  /** 下面的选项预留测试使用，分别表示字符串，整形等自定义参数，一直放在最后 */
  eo_test_rtc_string_1 = 2000,

  eo_test_rtc_int_1 = 2001,

  /** 值类型为String：表示设备的硬件标识号，sdk内部使用。 */
  eo_internal_hardware_identifier = 2002,

  /** 值类型为bool, 字符类型为"true" or "false"：当编码器码率超过设置的码率时，通过丢弃一部分数据帧，尽量避免码率变化过大而引起网络堵塞；系统默认为false */
  eo_auto_drop_frame = 2005,

  /** 值类型为int, 系统默认为1倍，静态码流和动态码流一致：eo_auto_drop_frame 被启用后，为了平滑码率会丢掉部分视频帧，该参数可以限制丢帧模块输出码流上限，为静态码流的多少倍。 */
  eo_auto_drop_frame_limit_bitrate_times = 2006,

  /** 值类型为int, 系统默认为-1：eo_auto_drop_frame 被启用后，为了平滑码率会丢掉部分视频帧，该参数可以限制丢帧模块最小输出帧率。 */
  eo_auto_drop_frame_min_framerate = 2007,

  /** 值类型为bool, 字符类型为"true" or "false"：表示当前设备是否支持h264的硬件编解码。 */
  eo_video_codec_support_h264hw = 3000,

  /** 值类型为bool, 字符类型为"true" or "false"：表示当前设备是否支持h264的硬件编解码。 */
  eo_video_codec_support_h265hw = 3001
}
