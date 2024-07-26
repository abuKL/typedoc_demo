import { Device } from './Device';

/**
 * 设备相机类型
 */
export enum CameraType {
  UNKNOWN = 0, /* 未知类型  */
  FRONT = 1,  /* 前置摄像头  */
  BACK = 2    /* 后置摄像头  */
}

/**
 * 相机管理
 */
export class Camera extends Device{
  type: number; /* 应用层对设备设置的数据，可用于表示视频权重等, 应用层开发可用  */
  level: number; /* 应用层对设备设置的数据，可用于表示视频权重等, 应用层开发可用  */
  description: string; /* 应用层对设备的描述，应用层开发可用  */
  deviceQualities: number; /* 视频设备质量类型集：摄像头通知时包含摄像头支持的视频质量集合  */
  publishedQualities: number; /* 视频发布质量类型集：设备发布时包含的发布视频的质量集合 */
}