import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
 
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 
  /**
   * it is public messageService since it will bind to the template; i.e., 
   * messages.component.html 
   * 
   */
  constructor(public messageService: MessageService) {}
 
  ngOnInit() {
  }
 
}