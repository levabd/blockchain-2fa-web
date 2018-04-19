import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientComponent } from './components/client/client.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { MaterialModule } from 'app/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlRu } from 'app/components/dashboard/matPaginatorIntlRu.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsDataComponent } from './components/clients-data/clients-data.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ServiceClientsTableComponent } from './components/service-clients-table/service-clients-table.component';

const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientComponent, data: { title: 'Список клиентов' }},
  {path: 'client-details/:id', component: ClientDetailComponent, data: { title: 'Подробно о клиенте' }},
  {path: 'client-create', component: ClientCreateComponent, data: { title: 'Создание клиента' }},
  {path: 'client-edit/:id', component: ClientEditComponent, data: { title: 'Редактирование клиента' } },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ClientComponent,
    ClientDetailComponent,
    ClientsDataComponent,
    ClientsTableComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ServiceClientsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}],
  bootstrap: [AppComponent]
})
export class AppModule { }
