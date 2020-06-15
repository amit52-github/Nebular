import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnergyComponent } from 'src/app/pages/energy/energy.component';
import { AlarmsComponent } from 'src/app/pages/alarms/alarms.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
import { TrendsComponent } from 'src/app/pages/trends/trends.component';
import { EquipmentComponent } from 'src/app/pages/equipment/equipment.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'equipment', component: EquipmentComponent},
  { path: 'energy', component: EnergyComponent },
  { path: 'alarms', component: AlarmsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'trends', component: TrendsComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
] 
  }];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
