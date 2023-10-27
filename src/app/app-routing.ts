import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[LoginComponent, AboutusComponent,ContactusComponent,HomeComponent];