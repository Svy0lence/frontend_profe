import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Clusuario } from 'src/app/models/clusuario';
import { SerusuarioService } from 'src/app/services/serusuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private usuarioService: SerusuarioService, private router: Router){
  }
  
  login(){
    const auth: any = {
      usuario: this.usuario.value as string,
      password: this.password.value as string,
    }
    console.log(auth)
    this.usuarioService.getUserByUser(auth).subscribe(
      result => {
        if(result == true){
          alert('autenticacion exitosa '+result)
          this.router.navigate(['/app']);
        }
        else alert('no se autentico correctamente '+result);
        
        console.log(result)
      }, error => {
        alert(error)
        console.log(error)
    });
    
  }

}
