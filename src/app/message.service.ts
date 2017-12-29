import { Injectable } from '@angular/core';

/**
 * injected in:
 *   HeroesService
 */
@Injectable()
export class MessageService {
 messages: string[] = [];

 add(message: string) {
   this.messages.push(message);
 }

 clear() {
   this.messages = [];
 }
}
