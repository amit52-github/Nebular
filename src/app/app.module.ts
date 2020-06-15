import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbMenuModule, NbSidebarModule, NbActionsModule, NbSearchModule, NbUserModule, NbContextMenuModule, NbIconModule, NbCardModule, NbLayoutModule, NbSidebarService, NbMenuService} from '@nebular/theme';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    
    
    
    
  
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
