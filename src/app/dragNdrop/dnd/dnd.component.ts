import { Component, ElementRef, ViewChild} from '@angular/core';

export interface IfileInfo {
  name: '';
  progress: number;
  size: number;
}
@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent  {
  public fileuploaded = false;
  public file: IfileInfo;

  constructor() {
    this.file = {
      name: '',
      progress: 0,
      size: 0
    };
  }

  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;

  public onFileDropped($event) {
    this.prepareFile($event);
  }

  public fileBrowseHandler(file) {
    this.prepareFile(file);
  }

  public deleteFile() {
    this.file = {
      name: '',
      progress: 0,
      size: 0
    };
    this.fileuploaded = false;
  }

  public prepareFile(file: IfileInfo) {
    // TODO: SUSAN add checks for file size and format here somewhere
    file.progress = 0;
    this.file.name = file.name;
    this.fileuploaded = true;
    this.fileDropEl.nativeElement.value = '';
  }
}
