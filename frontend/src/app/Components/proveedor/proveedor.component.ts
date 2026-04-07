import { Component, OnInit } from '@angular/core';
import { proveedor } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  TUser: any = [];
  user: proveedor = {
    idprov: null,
    idempresa: null,
    proveedor: null,
    direccion: null,
    telefono: null,
    responsable: null,
    fecha_creacion: null,
    observaciones: null,
    estado: 'Activo'
  }

  Empresalist: any;

  constructor(private Data: DataService) { }

ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
  }

    getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data:any)=>{
      this.Empresalist=data;
    })
  }

  getUser() {
    this.Data.getAll('/proveedor')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor(){
    delete this.user.idprov;
    this.Data.save(this.user,'/proveedor')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number){
    this.Data.delete(id, '/proveedor')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}