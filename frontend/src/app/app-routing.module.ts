import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component'; 
import { AreasTrabajoComponent } from './Components/areas-trabajo/areas-trabajo.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { FormapagoComponent } from './Components/formapago/formapago.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { SucursalesComponent } from './Components/sucursales/sucursales.component';
import { TipoproductoComponent } from './Components/tipoproducto/tipoproducto.component';
import { TipousuarioComponent } from './Components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

// EDIT COMPONENTS

const routes: Routes = [

  {
    path: 'empresa',
    component :EmpresaComponent
  },
  {
    path: 'proveedor',
    component :ProveedorComponent
  },
  {
    path: 'areas_trabajo',
    component :AreasTrabajoComponent
  },
  {
    path: 'clientes',
    component :ClientesComponent
  },
  {
    path: 'empleados',
    component :EmpleadosComponent
  },
  {
    path: 'formapago',
    component :FormapagoComponent
  },
  {
    path: 'producto',
    component :ProductoComponent
  },
  {
    path: 'sucursales',
    component :SucursalesComponent
  },
  {
    path: 'tipoproducto',
    component :TipoproductoComponent
  },
  {
    path: 'tipousuario',
    component :TipousuarioComponent
  },
  {
    path: 'usuario',
    component :UsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }