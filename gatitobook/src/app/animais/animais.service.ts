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
   * @name listaDoUsuario
   * @description Retorna uma lista de animais do usuário com base no nome do usuário.
   * @param nomeDoUsuario O nome do usuário cujos animais serão listados.
   * @returns Um Observable que emite uma lista de animais do usuário.
   */
  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
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

  /**
   * @name curtir
   * @description cria um objeto FormData e adiciona os valores dos parâmetros como pares chave-valor no objeto FormData.
   * @param descricao uma string que representa uma descrição do arquivo que será enviado
   * @param permiteComentario valor booleano que indica se os usuários podem comentar o arquivo após o envio
   * @param arquivo objeto do tipo File que representa o arquivo a ser enviado
   * @returns {void}
   */
  public upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
