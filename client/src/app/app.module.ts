import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'app/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlRu } from 'app/components/dashboard/matPaginatorIntlRu.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientsTableComponent } from './components/dashboard/clients-table/clients-table.component';
import { ServiceClientsTableComponent } from './components/dashboard/service-clients-table/service-clients-table.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ClientsService } from './services/clients.service';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'client-details/:id', component: ClientDetailComponent, data: { title: 'Подробно о клиенте' }, canActivate: [AuthGuard] },
  { path: 'client-create', component: ClientCreateComponent, data: { title: 'Создание клиента' }, canActivate: [AuthGuard] },
  { path: 'client-edit/:id', component: ClientEditComponent, data: { title: 'Редактирование клиента' }, canActivate: [AuthGuard] },
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
    ClientDetailComponent,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClientsService, ValidateService, AuthService, AuthGuard, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu }],
  bootstrap: [AppComponent]
})
export class AppModule { }
