import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Comentarios } from './comentario';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;
  nomeUsuario!: Observable<Usuario>;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.nomeUsuario = this.usuarioService.retornaUsuario();
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  /**
   * @name gravar
   * @description Grava o comentário com base no parâmetro 'comentario' do form. E depois de gravar exibe uma mensagem de sucesso para o usuário.
   * @returns {void}
   */
  public gravar(): void {
    const textoComentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .incluirComentario(this.id, textoComentario)
      .pipe(
        switchMap(() => this.comentariosService.buscaComentario(this.id)),
        tap(() => {
          this.comentarioForm.reset();
          alert(`${this.nomeUsuario},seu comentário foi salvo!`);
        })
      );
  }
}
