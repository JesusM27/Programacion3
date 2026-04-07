import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AreasTrabajoComponent } from './Components/areas-trabajo/areas-trabajo.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { SucursalesComponent } from './Components/sucursales/sucursales.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { TipousuarioComponent } from './Components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { TipoproductoComponent } from './Components/tipoproducto/tipoproducto.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { FormapagoComponent } from './Components/formapago/formapago.component';
import { FormsModule } from '@angular/forms';
import { EmpresaEditComponent } from './Components/empresa-edit/empresa-edit.component';
import { ProveedorEditComponent } from './Components/proveedor-edit/proveedor-edit.component';
import { AreasTrabajoEditComponent } from './Components/areas-trabajo-edit/areas-trabajo-edit.component';
import { ClientesEditComponent } from './Components/clientes-edit/clientes-edit.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { SucursalesEditComponent } from './Components/sucursales-edit/sucursales-edit.component';
import { TipousuarioEditComponent } from './Components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './Components/usuario-edit/usuario-edit.component';
import { TipoproductoEditComponent } from './Components/tipoproducto-edit/tipoproducto-edit.component';
import { ProductoEditComponent } from './Components/producto-edit/producto-edit.component';
import { FormapagoEditComponent } from './Components/formapago-edit/formapago-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ProveedorComponent,
    AreasTrabajoComponent,
    ClientesComponent,
    SucursalesComponent,
    EmpleadosComponent,
    TipousuarioComponent,
    UsuarioComponent,
    TipoproductoComponent,
    ProductoComponent,
    FormapagoComponent,
    EmpresaEditComponent,
    ProveedorEditComponent,
    AreasTrabajoEditComponent,
    ClientesEditComponent,
    EmpleadosEditComponent,
    SucursalesEditComponent,
    TipousuarioEditComponent,
    UsuarioEditComponent,
    TipoproductoEditComponent,
    ProductoEditComponent,
    FormapagoEditComponent,
    NavegacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
        MatButtonModule,
    MatMenuModule    

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
