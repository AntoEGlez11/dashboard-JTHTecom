import { Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardUserComponent } from './components/dashboard/user/dashboard-user/dashboard-user.component';
import { DetalleUsuarioComponent } from './components/dashboard/user/detalle-usuario/detalle-usuario.component';
import { DetalleAsociacionComponent } from './components/dashboard/user/detalle-asociacion/detalle-asociacion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard-home', component: DashboardHomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard-user', component: DashboardUserComponent, canActivate: [AuthGuard] },
    { path: 'data-detalle/:id', component: DetalleUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'detalle-asociacion', component: DetalleAsociacionComponent, canActivate: [AuthGuard] }
];
