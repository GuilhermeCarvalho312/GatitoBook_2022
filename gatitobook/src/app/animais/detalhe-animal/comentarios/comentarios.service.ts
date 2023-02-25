import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @name buscaComentario
   * @description Busca um comentário específico com base em seu identificador único.
   * @param id O identificador único do animal a ser buscado.
   * @returns {Observable<Comentarios>} Um Observable que emite os comentários.
   */
  public buscaComentario(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  /**
   * @name incluirComentario
   * @description Inclui um comentário específico com base em seu identificador único e no texto digitado pelo usuário.
   * @param id O identificador único do animal a ser buscado.
   * @param commentText O texto do comentário
   * @returns {Observable<Comentario>} Um Observable do comentário.
   */
  public incluirComentario(
    id: number,
    commentText: string
  ): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
