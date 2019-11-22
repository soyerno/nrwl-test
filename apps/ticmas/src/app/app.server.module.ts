import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ShellModule } from './shell/shell.module';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [ { path: 'shell', component: ShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ShellModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  declarations: [],
})
export class AppServerModule {}
