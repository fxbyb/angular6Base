export class ApiResponseResult {
    constructor(
      public IsSuccess: boolean, // 是否成功
      public ResponseCode: number, // 响应代号
      public Message: string, // 业务消息
      public Data: any, // 返回数据
      public Exception: string, // 异常内容
      public Trace: string, // 异常堆栈
      public Total: number //分页总数
    ) {}
  }