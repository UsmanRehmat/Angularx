import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Event } from '@angular/router/src/events';
import {  HostListener } from '@angular/core';
import {DragableDirective} from 'src/app/dragable.directive';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService : MessageService) {  }
  private messageBox : any;
  ngOnInit() {
 
  }

  // onMouseDown(event : MouseEvent)
  // {
    
  //    console.log("MD  Client X" + event.clientX + " Client Y" + event.target);
    
  // }
  // onMouseEnter(event : MouseEvent)
  // {
  //   console.log("ME Client X" + event.clientX + " Client Y" + event.clientY);
  // }
  // onMouseLeave(event : MouseEvent)
  // {
  //   console.log("ML Client X" + event.clientX + " Client Y" + event.clientY);
  // }

  // @HostListener('document:mouseup',['$event'])
  // onMouseUp(event : MouseEvent)
  // {
  //   console.log("MU Client X" + event.clientX + " Client Y" + event.clientY);
  // }
  // onDrag(event : Event)
  // {
  //    console.log("DS " + event);
    
  // }
  // onDragOver(event : Event)
  // {
  //    console.log("DE  "+ event );
    
  // }

}
