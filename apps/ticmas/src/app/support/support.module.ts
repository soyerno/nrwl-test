import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SharedModule } from '../shared';
import { ShellModule } from '../shell/shell.module';
import { SupportRoutingModule } from './support.router.module';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NbSpinnerModule, NbChatModule } from '@nebular/theme';
import { ChatBotService } from './chatbot/chatbot.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShellModule,
    SupportRoutingModule,
    NbChatModule,
    NbSpinnerModule
  ],
  providers:[
    ChatBotService
  ],
  declarations: [SupportComponent, ChatbotComponent]
})
export class SupportModule {}
