/**
 * 用户状态枚举
 */
export enum UserStatus {
  MICROPHONE_HAS = 0x80000000,  /*拥有麦克风设置位*/
  MICROPHONE_ON = 0x40000000,   /*麦克风打开设置位*/
  CAMERA_HAS = 0x20000000,      /*拥有摄像头设置位*/
  CAMERA_ON = 0x10000000,       /*摄像头打开设置位*/
  SCREEN_ON = 0x2000000,        /*屏幕窗口共享设置位*/
  IDLE = 0x00
}

/**
 * 用户信息载体
 */
export class User {
  public status: UserStatus // 用户状态集合
  public userId: string     // 用户Id，应用层可设置
  public userName: string   // 用户名称，应用层设置
  public userAgent: string  // 用户设备信息：harmony、iOS、Android
  public userData: string   // 用户数据，应用层设置

  constructor(userId: string, userName: string, userData: string) {
    this.status = UserStatus.IDLE;
    this.userId = (userId === null) ? "" : userId
    this.userName = (userName === null) ? "" : userName
    this.userData = (userData === null) ? "" : userData
  }

  /**
   * 获取用户状态
   * @returns 用户状态
   */
  getUserStatus(): UserStatus {
    return this.status
  }

  /**
   * 获取用户id
   * @returns 用户id
   */
  getUserId(): string {
    return this.userId
  }

  /**
   * 获取用户名称
   * @returns 用户名称
   */
  getUserName(): string {
    return this.userName
  }

  /**
   * 获取用户数据
   * @returns 数据载体
   */
  getUserData(): string {
    return this.userData
  }


}