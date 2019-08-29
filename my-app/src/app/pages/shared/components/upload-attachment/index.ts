import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { FileItem, FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';
import { CoreService } from '@shared/services/core.service';
import { NzMessageService } from 'ng-zorro-antd';
import { StorageManager } from "@shared/utils/storage";
// import { 'AUDIT_ATTACH_LIST' } from "@shared/constants/global";

@Component({
  selector: "cmb-upload-attachment",
  templateUrl: "./index.html",
  styleUrls: ["./index.less"]
})
export class UploadAttachmentComponent implements OnInit {

  uploader: FileUploader = null;
  @Input() fileMaxSize: number = 20; // 文件最大值,默认单位MB
  @Input() fileType: any = ['docx','xlsx','pptx','png','jpg','tif','jpeg','gif','mp3','mp4','pdf','wav']; // 文件类型默认支持docx，xlsx，支持其他需传入
  @Input() multiple = false; // 支持多文件上传
  @Input() dropzone: boolean = false; // 支持文件拖拽上传
  @Input() uploadUrl: string = 'attachment/upload'; // 上传文件Api
  @Input() progress: boolean = true; // 是否显示进度条,默认显示
  @Input() options: any; // 上传附加参数({projectId:'xxx',relateItemId:'xxx',dccTypeCode: 'notice'})
  @Output() duringUpload = new EventEmitter<any>();

  seeMoveAll: boolean = true;
  isUploading: boolean = false;
  constructor(
    protected core: CoreService,
    protected msg: NzMessageService) {
  }

  ngOnInit() {
    this.uploader = new FileUploader({
      // url:`${this.core.baseLogicApiUrl}/api/${this.uploadUrl}`,
      url: 'http://localhost:8080/upload',
      method: "POST",
      itemAlias: "uploadFile",
      autoUpload: false
    });
    this.registerUploaderEvents();
  }

  clearFiles() {
    StorageManager.remove('AUDIT_ATTACH_LIST');
  }

  get uploadFileCount() {
    //大小过滤
    let first = this.uploader.queue.length;
    this.uploader.queue = this.uploader.queue.filter(item => (item._file.size < this.fileMaxSize*1024*1024)&&(item._file.size > 0));
    let last = this.uploader.queue.length;
    (first != last) && this.msg.error(`所选文件不可为空文件，且不可超过最大上传${this.fileMaxSize}MB限制`);
    //类型过滤
    this.uploader.queue = this.uploader.queue.filter(item => this.fileType.indexOf(item._file.name.split('.')[item._file.name.split('.').length-1].toLowerCase()) > -1);
    let lastNotLeast = this.uploader.queue.length;
    (last != lastNotLeast) && this.msg.error(`支持${this.fileType}类型的文件`);
    return this.uploader.queue.length;
  }

  get uploadFileText() {
    return this.dropzone ? "拖拽上传文件" : "选择上传文件";
  }

  selectFiles(event) {
    console.log(event);
    event.target.parentElement.firstElementChild.click();
  }

  private registerUploaderEvents() {
    this.uploader.onAfterAddingFile = () => {
      if (!this.multiple && this.uploadFileCount > 1) {
        this.uploader.removeFromQueue(this.uploader.queue[0]);
      }
    };

    this.uploader.onBuildItemForm = (fileItem: FileItem, form: any) => {
      fileItem.withCredentials = false;
      this.appendUploadParams(this.options, form);
    };

    this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.coolDown(this.uploader.queue);
      if (status === 200) {
        // 上传文件后获取服务器返回的数据
        try {
          const result = JSON.parse(response);
          console.log(result);
         if (result.IsSuccess) {
            const attachments = StorageManager.get('AUDIT_ATTACH_LIST') || [];
            attachments.push(result.Data[0]);
            StorageManager.set('AUDIT_ATTACH_LIST', attachments);
          } else {
            this.msg.error(`上传失败:${result['Message']}`);
            item.isError = true;
            item.isSuccess = false;
            return false;
          }
        } catch (e) {
          this.msg.error(`上传失败:${response['Message']||response}`);
          return false;
        }
      }
      console.info(`上传成功:${response} for ${item.file.name}, status ${status}`);
    };

    this.uploader.onErrorItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.coolDown(this.uploader.queue);
      if (status !== 200) {
        // 上传文件后获取服务器返回的数据
        let result;
        try {
          result = JSON.parse(response);
        } catch (e) {
          this.msg.error(`上传失败:${response||response}`);
          return false;
        }
      }
      console.info(`上传失败:${response} for ${item.file.name}, status ${status}`);
    };
  }

  private appendUploadParams(options: any, form: any) {
    if (options) {
      for (const prop in options) {
        prop && form.append(prop, options[prop]);
      }
    }
  }

  uploadInit() {
    this.uploader.queue = [];
    this.uploader.progress = 0;
    this.seeMoveAll = true;
    this.duringUpload.emit('end');
    this.isUploading = false;
  }

  upload(item) {
    debugger
    this.seeMoveAll = false;
    item.upload();
    this.duringUpload.emit('start');
    this.isUploading = true;
  }

  uploadAll() {
    this.uploader.queue.map(item => {
      // item.seeMove = false;
      return item
    });
    this.seeMoveAll = false;
    this.uploader.uploadAll();
    this.duringUpload.emit('start');
    this.isUploading = true;
  }

  coolDown(arr){
    let result = true;
    if(arr && arr.length>0){
      arr.forEach(item => {item['isReady'] && (result = false);})
    }
    if(result) {
      this.duringUpload.emit('end');
      this.isUploading = false;
    }
  }
}
