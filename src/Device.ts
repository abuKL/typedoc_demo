
/**
 * 设备状态
 */
export enum DeviceStatus {
  none,        /* 无设备状态  */
  ready,       /* 设备初始化状态  */
  published,   /* 设备已发布  */
  muted,       /* 设备静默状态  */
}

/**
 * 设备信息管理
 */
export class Device {
  public id:string;                       /**< 设备Id，唯一标识一个设备；产生规则：音频设备为与用户相关唯一号；视频设备nodeid+deviceid(MD5(idd) or mobileid+0(front)1(back)) */
  public name:string;                     /**< 设备名称，应用层可用于设备显示  */
  public status:number;             /**< 设备状态  */

  public getId():string{
    return this.id
  }
}