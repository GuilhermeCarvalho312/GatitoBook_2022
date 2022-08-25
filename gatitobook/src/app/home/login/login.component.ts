import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private authService: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (response) => {
       this.router.navigate(['animais']);
      },
      (err) => {
        alert('Usuário ou senha invalida!');
        console.error(err);
      }
    );
  }
}
