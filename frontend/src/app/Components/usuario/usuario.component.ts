import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  TUser: any = [];
  user: usuario = {
    userid: null,
    idempresa: null,
    idsuc: null,
    idtpusuario: null,
    idemp: null,
    usuario: null,
    clave: null,
    estado: 'Activo'
  }

  Empresalist: any;
  Sucursallist: any;
  Tpusuariolist: any;
  Empleadolist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
    this.getDropListSucursales();
    this.getDropListTipousuario();
    this.getDropListEmpleados();
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    })
  }

  getDropListSucursales() {
    this.Data.getDropListSucursales().subscribe((data: any) => {
      this.Sucursallist = data;
    })
  }

  getDropListTipousuario() {
    this.Data.getDropListTipousuario().subscribe((data: any) => {
      this.Tpusuariolist = data;
    })
  }

  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data: any) => {
      this.Empleadolist = data;
    })
  }

  getUser() {
    this.Data.getAll('/usuario')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.userid;
    this.Data.save(this.user, '/usuario')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/usuario')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
} 