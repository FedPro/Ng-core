import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighLight = new EventEmitter();


  constructor() {
    //console.log('Highlighted Directive');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover', ['$event'])
    mouseOver($event: any){
      this.isHighlighted = true;
      this.toggleHighLight.emit(this.isHighlighted);
    }

  @HostListener('mouseleave')
    mouseLeave(){
      this.isHighlighted = false;
      this.toggleHighLight.emit(this.isHighlighted);
    }
  
  }
