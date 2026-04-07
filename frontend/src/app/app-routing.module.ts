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

// EDIT COMPONENTS IMPORTS
import { EmpresaEditComponent } from './Components/empresa-edit/empresa-edit.component';
import { ProveedorEditComponent } from './Components/proveedor-edit/proveedor-edit.component';
import { AreasTrabajoEditComponent } from './Components/areas-trabajo-edit/areas-trabajo-edit.component';
import { ClientesEditComponent } from './Components/clientes-edit/clientes-edit.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { FormapagoEditComponent } from './Components/formapago-edit/formapago-edit.component';
import { ProductoEditComponent } from './Components/producto-edit/producto-edit.component';
import { SucursalesEditComponent } from './Components/sucursales-edit/sucursales-edit.component';
import { TipoproductoEditComponent } from './Components/tipoproducto-edit/tipoproducto-edit.component';
import { TipousuarioEditComponent } from './Components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './Components/usuario-edit/usuario-edit.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';

const routes: Routes = [


    {
    path: 'navegacion',
    component :NavegacionComponent
  },
  {
    path: 'empresa',
    component :EmpresaComponent
  },
  {
    path: 'empresa/edit/:id',
    component :EmpresaEditComponent
  },

  {
    path: 'proveedor',
    component :ProveedorComponent
  },
  {
    path: 'proveedor/edit/:id',
    component :ProveedorEditComponent
  },

  {
    path: 'areas_trabajo',
    component :AreasTrabajoComponent
  },
  {
    path: 'areas_trabajo/edit/:id',
    component :AreasTrabajoEditComponent
  },

  {
    path: 'clientes',
    component :ClientesComponent
  },
  {
    path: 'clientes/edit/:id',
    component :ClientesEditComponent
  },

  {
    path: 'empleados',
    component :EmpleadosComponent
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent
  },

  {
    path: 'formapago',
    component :FormapagoComponent
  },
  {
    path: 'formapago/edit/:id',
    component :FormapagoEditComponent
  },

  {
    path: 'producto',
    component :ProductoComponent
  },
  {
    path: 'producto/edit/:id',
    component :ProductoEditComponent
  },

  {
    path: 'sucursales',
    component :SucursalesComponent
  },
  {
    path: 'sucursales/edit/:id',
    component :SucursalesEditComponent
  },

  {
    path: 'tipoproducto',
    component :TipoproductoComponent
  },
  {
    path: 'tipoproducto/edit/:id',
    component :TipoproductoEditComponent
  },

  {
    path: 'tipousuario',
    component :TipousuarioComponent
  },
  {
    path: 'tipousuario/edit/:id',
    component :TipousuarioEditComponent
  },

  {
    path: 'usuario',
    component :UsuarioComponent
  },
  {
    path: 'usuario/edit/:id',
    component :UsuarioEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }