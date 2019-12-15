import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatBotService {
  private accessToken: any;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  public getToken() {
    this.http.get('/chatbot')
    .subscribe((res: any) => {
      console.log(res);
      this.accessToken = res.token;
    });
  }

  public sendMesage(request) {
    console.log(request);
    var config = {
      headers: {
        Authorization: 'Bearer ' + this.accessToken,
        'Content-Type': 'application/json; charset=utf-8'
      }
    };

    return this.http.post(
      'https://dialogflow.googleapis.com/v2/projects/newagent-dhorpm/agent/sessions/' +
        request.sessionId +
        ':detectIntent',
      request,
      config
    );
  }
}
