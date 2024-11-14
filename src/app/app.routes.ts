import { Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { AuthGuard } from './guards/auth.guard';
import { DetalleUsuarioComponent } from './components/dashboard/dashboard-manager/detalle-usuario/detalle-usuario.component';
import { DetalleAsociacionComponent } from './components/dashboard/dashboard-manager/detalle-asociacion/detalle-asociacion.component';
import { GestionUsuariosComponent } from './components/dashboard/dashboard-home/gestion-usuarios/gestion-usuarios.component';
import { ForgotPasswordComponent } from './components/shared/login/forgot-password/forgot-password.component';
import { EditarPerfilComponent } from './components/shared/header/editar-perfil/editar-perfil.component';
import { DashboardManagerComponent } from './components/dashboard/dashboard-manager/dashboard-manager.component';
import { DashboardUsuarioComponent } from './components/dashboard/dashboard-usuario/dashboard-usuario.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard-home', component: DashboardHomeComponent, canActivate: [AuthGuard], children: [{ path: 'usuarios', component: GestionUsuariosComponent, }
        ]
    },
    { path: 'dashboard-manager', component: DashboardManagerComponent, canActivate: [AuthGuard] },
    { path: 'dashboard-usuario', component: DashboardUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'data-detalle/:id', component: DetalleUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'detalle-asociacion', component: DetalleAsociacionComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'editar-perfil', component: EditarPerfilComponent }

];
