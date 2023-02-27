import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comentario, Comentarios } from './comentario';
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
  nomeUsuario!: string;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarComentarios();
    this.inicializarFormulario();
  }

  /**
   * @name inicializarComentarios
   * @description Inicializa os comentários buscando-os no servidor e extraindo o nome do usuário do primeiro comentário.
   * @returns {void}
   */
  private inicializarComentarios(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
    this.comentarios$.subscribe((responseComentarios) => {
      this.nomeUsuario = responseComentarios[0].userName;
    });
  }

  /**
   * @name inicializarFormulario
   * @description Inicializa o formulário de comentários com as validações necessárias.
   * @returns {void}
   */
  private inicializarFormulario(): void {
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
          alert(`${this.nomeUsuario}, seu comentário foi salvo!`);
        })
      );
  }
}
