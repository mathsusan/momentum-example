import { Directive, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  constructor() { }
  @HostBinding('class.fileover') fileOver: boolean;

  @Output() fileDropped = new EventEmitter<any>();

  // Dragover Listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }


  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const file = evt.dataTransfer.files[0];
    if (file) {
      this.fileDropped.emit(file);
    }
  }

}
