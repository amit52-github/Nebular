import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { EquipmentComponent } from 'src/app/pages/equipment/equipment.component';
import { EnergyComponent } from 'src/app/pages/energy/energy.component';
import { AlarmsComponent } from 'src/app/pages/alarms/alarms.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
import { TrendsComponent } from 'src/app/pages/trends/trends.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbActionsModule, NbSearchModule, NbUserModule, NbContextMenuModule, NbIconModule, NbCardModule, NbSidebarService, NbMenuService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';




@NgModule({
  declarations: [
    DashboardComponent,
    EquipmentComponent,
    EnergyComponent,
    AlarmsComponent,
    ReportsComponent,
    TrendsComponent,
    LayoutComponent
    
    
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSidebarModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    NbIconModule,
    NbCardModule,
    
    NbEvaIconsModule,
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
  ],
 
})
export class LayoutModule { }
