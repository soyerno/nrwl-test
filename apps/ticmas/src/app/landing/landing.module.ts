import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared';
import { ShellModule } from '../shell/shell.module';
import { LandingRoutingModule } from './landing.router.module';

@NgModule({
  imports: [CommonModule, SharedModule, ShellModule, LandingRoutingModule],
  declarations: [LandingComponent]
})
export class LandingModule {}
