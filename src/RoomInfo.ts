
/**
 * 房间状态枚举
 */
export enum RoomStatus
{
  scheduled,                          /** 已经安排好  */
  opening,                            /** 正在进行中  */
  locked,                             /** 已锁定房间：锁定房间后，新用户无法加入房间  */
  closed,                             /** 已关闭房间  */
};

/**
 * 待加入的房间信息
 */
export class RoomInfo {
  	roomId:string;                         /**< 房间Id */
  	roomName:string;                       /**< 房间名 */
  	appRoomId:string;                      /**< 房间应用层Id */
  roomTopic:string;                      /**< 房间主题 */
  ownerId:string;                         /**< 房间创建者Id */
  	hostId:string;                         /**< 房间主持人Id */
   hostPassword:string;                   /**< 房间主持人密码 */
   confPassword:string;                   /**< 房间密码，必须与主持人密码不同 */
  startTime:number;                      /**< 房间起始时间 */
  duration:number;                       /**< 房间延续时间 */
  bandwidth:number;                      /**< 房间带宽限制 */
  maxAttendee:number;                    /**< 房间最大用户数限制 */
  maxAudio:number;                       /**< 房间最大音频数限制 */
  maxVideo:number;                       /**< 房间最大视频数限制 */
  roomMode:number;                       /**< 房间模式集 */
  enableVoiceActivated:boolean;           /**< 房间开启语音激励*/

  // constructor(userId: string, userName: string, userData: string) {
  //   this.status = UserStatus.IDLE;
  //   this.userId = (userId === null) ? "" : userId
  //   this.userName = (userName === null) ? "" : userName
  //   this.userData = (userData === null) ? "" : userData
  // }
  //
  // getUserStatus():UserStatus{
  //   return this.status
  // }
  //
  // getUserId():string{
  //   return this.userId
  // }
  //
  // getUserName():string{
  //   return this.userName
  // }
  //
  // getUserData():string{
  //   return this.userData
  // }
}