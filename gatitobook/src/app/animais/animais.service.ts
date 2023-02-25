import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  /**
   * @name listaDoUsuarios
   * @description Retorna uma lista de animais do usuário com base no nome do usuário.
   * @param nomeDoUsuario O nome do usuário cujos animais serão listados.
   * @returns Um Observable que emite uma lista de animais do usuário.
   */
  public listaDoUsuarios(nomeDoUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  /**
   * @name buscaPorId
   * @description Busca um animal específico com base em seu identificador único.
   * @param id O identificador único do animal a ser buscado.
   * @returns Um Observable que emite o animal encontrado.
   */
  public buscaPorId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  /**
   * @name excluirAnimal
   * @description Exclui um animal específico com base em seu identificador único.
   * @param id O identificador único do animal a ser excluído.
   * @returns Um Observable que emite o animal excluído.
   */
  public excluirAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  /**
   * @name curtir
   * @description Faz uma requisição HTTP do tipo POST para curtir uma foto de um animal.
   * @param id O identificador único da foto do animal que será curtida.
   * @returns Um Observable que emite um booleano `true` em caso de sucesso ou um booleano `false` caso a foto já tenha sido curtida anteriormente.
   */
  public curtir(id: number): Observable<boolean> {
    return this.httpClient
      .post(
        `${API}/photos/${id}/like`,
        {},
        {
          observe: 'response',
        }
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }
}
