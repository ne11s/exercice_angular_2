import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  index:number = 1
  @Output() sendIndex = new EventEmitter<number>()
  changeIndex(nextIndex: boolean):void{
    if (nextIndex) {
      this.index = this.index+1
    } else {
      this.index = this.index > 1 ? this.index-1:1
    }
    this.sendIndex.emit(this.index)
  }
}
