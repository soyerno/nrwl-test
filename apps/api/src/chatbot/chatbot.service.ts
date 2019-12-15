import { Injectable, HttpStatus } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import axios from 'axios';
const googleAuth = require('google-oauth-jwt');

const credentials = require('./service-account.json');

export type User = any;

@Injectable()
export class ChatBotService {
  constructor() {}

  async getToken() {
    return new Promise(resolve => {
      googleAuth.authenticate(
        {
          email: credentials.client_email,
          key: credentials.private_key,
          scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/dialogflow']
        },
        (err, token) => {
          Logger.log(err, token);
          return resolve({ token });
        }
      );
    });
  }

  async sendDialogue(info, res) {
    let data = {
      queryInput: {
        // event: {
        //   name: 'USER_ONBOARDING',
        //   languageCode: 'en-US'
        // },
        text: {
          text: info.queryInput.text.text ,
          languageCode: info.queryInput.text.languageCode,
          // sessionId: info.sessionId
        }
      }
      // query: info.queryInput.text.text,
      // lang: info.queryInput.text.languageCode,
      // sessionId: info.sessionId
    };

    const baseURL: string =
      'https://dialogflow.googleapis.com/v2/projects/ticmassupport-xrpheq/agent/sessions/' +
      info.sessionId +
      ':detectIntent?key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM';
    const resToken: any = await this.getToken();
    return axios
      .post(`${baseURL}`, data, {
        headers: {
          Authorization: `Bearer ${resToken.token}`,
          'Content-Type': 'application/json; charset=utf=8'
        }
      })
      .then(response => {
        return res.status(HttpStatus.OK).send({
          fulfillmentText: response.data.result.fulfillment.speech
        });
      })
      .catch(reason => {
        console.log(reason.response.data);
        return res.status(HttpStatus.OK).send({
          fulfillmentText: 'We are facing some errors. Please try again later.'
        });
      });
  }
}
