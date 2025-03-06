import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GroupService} from './services/group.service';
import {RoleService} from './services/role.service';
import { AppComponent } from './app.component';
import {RoleListComponent} from './components/role-list/role-list.component';
import {GroupListComponent} from './components/group-list/group-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoleListComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GroupService,
    RoleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
