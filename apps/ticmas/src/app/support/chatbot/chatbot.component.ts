import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatBotService } from './chatbot.service';

const dialogflowURL = '/chatbot';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  messages = [];
  loading = false;

  // Random ID to maintain session with server
  sessionId = Math.random()
    .toString(36)
    .slice(-5);

  constructor(private http: HttpClient, private cbService: ChatBotService) {}

  ngOnInit() {
    this.addBotMessage('Hello Hernan, How can I help you? ');
  }

  handleUserMessage(event) {
    console.log(event);
    const text = event.message;
    this.addUserMessage(text);

    this.loading = true;

    const request = {
      // sessionId: this.sessionId,
      queryInput: {
        // event: {
        //   name: 'USER_ONBOARDING',
        //   languageCode: 'en-US'
        // },
        text: {
          text,
          languageCode: 'en-US'
        }
      }
    };

    // Make an HTTP Request
    this.http.post<any>(
      dialogflowURL,
      {
        sessionId: this.sessionId,
        queryInput: {
          // event: {
          //   name: 'USER_ONBOARDING',
          //   languageCode: 'en-US'
          // },
          text: {
            text,
            languageCode: 'en-US'
          }
        }
      }
    )
    // this.cbService.sendMesage(request)
    .subscribe((res: any) => {
      console.log(res);
      this.addBotMessage(res.fulfillmentText);
      this.loading = false;
    });
  }

  // Helpers

  addUserMessage(text) {
    this.messages.push({
      text,
      sender: 'You',
      reply: true,
      date: new Date()
    });
  }

  addBotMessage(text) {
    this.messages.push({
      text,
      sender: 'Juan',
      avatar: '/assets/bot.jpg',
      date: new Date()
    });
  }
}
