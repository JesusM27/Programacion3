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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
