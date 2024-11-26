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
import { ComprarPaqueteComponent } from './components/dashboard/dashboard-usuario/comprar-paquete/comprar-paquete.component';
import { GraficosAdminComponent } from './components/dashboard/dashboard-home/graficos-admin/graficos-admin.component';
import { ReportesComponent } from './components/dashboard/dashboard-home/reportes/reportes.component';
import { DashboardClienteComponent } from './components/dashboard/dashboard-cliente/dashboard-cliente.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard-home', 
        component: DashboardHomeComponent,
        children: [ // Rutas hijas para dashboard-home
          { path: 'inicio', component: GraficosAdminComponent }, // Componente principal de Inicio
          { path: 'usuarios', component: GestionUsuariosComponent }, // Componente para Usuarios
          { path: 'reportes', component: ReportesComponent }, // Componente para Reportes
        ]
      },
    { path: 'dashboard-manager', component: DashboardManagerComponent },
    { path: 'dashboard-cliente', component: DashboardClienteComponent },
    { path: 'dashboard-usuario', component: DashboardUsuarioComponent },
    { path: 'data-detalle/:id', component: DetalleUsuarioComponent },
    { path: 'detalle-asociacion', component: DetalleAsociacionComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'editar-perfil', component: EditarPerfilComponent },
    { path: 'comprar-paquete', component: ComprarPaqueteComponent }
];
