import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
//   {path:"",component:LayoutComponent,
//   children:[
//     path:"",loadChildren:""
//   ]
// }
  {
    path: "pages",
    loadChildren:()=> import('./layout/layout/layout.module')
   .then(m=>m.LayoutModule)
  },
   {path:"login", component:LoginComponent},
   { path: ' ', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];
const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
