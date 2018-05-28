import { Directive,ElementRef,HostListener,Renderer  } from '@angular/core';


@Directive({
  selector: '[appDragable]'
})
export class DragableDirective {
   private pos1 = 0;
   private pos2 = 0;
   private pos3 = 0;
   private pos4 = 0;

  constructor(private el:ElementRef, private renderer : Renderer)
  {
  }

  public elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    this.renderer.setElementStyle(this.el.nativeElement,'top',(this.el.nativeElement.offsetTop - this.pos2) + "px");
    // set the element's new position:
    this.el.nativeElement.style.top = (this.el.nativeElement.offsetTop - this.pos2) + "px";
    this.el.nativeElement.style.left = (this.el.nativeElement.offsetLeft - this.pos1) + "px";
  }

   public closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
  public dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove =this.elementDrag;
  }
  @HostListener('mousedown',['$event'])
  OnMouseDown(event : MouseEvent)
  {
    this.dragMouseDown(event);
  }
  
}
