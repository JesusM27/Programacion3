import { Component, OnInit } from '@angular/core';
import { tipousuario } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {

  TUser: any = [];
  user: tipousuario = {
    idtpusuario: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

  Empresalist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    })
  }

  getUser() {
    this.Data.getAll('/tipousuario')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idtpusuario;
    this.Data.save(this.user, '/tipousuario')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/tipousuario')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}