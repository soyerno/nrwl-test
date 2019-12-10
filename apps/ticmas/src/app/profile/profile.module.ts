import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';
import { ShellModule } from '../shell/shell.module';
import { ProfileRoutingModule } from './profile.router.module';

@NgModule({
  imports: [CommonModule, SharedModule, ShellModule, ProfileRoutingModule],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
