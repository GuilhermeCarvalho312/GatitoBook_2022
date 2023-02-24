import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private acvtivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicializa o componente ao obter o ID do animal da rota e carregar o animal correspondente
    this.animalId = this.acvtivatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  /**
   * Envia uma requisição HTTP do tipo POST para curtir uma foto de um animal.
   * Se a requisição for bem-sucedida, recarrega os dados do animal.
   */
  public curtir() {
    this.animaisService.curtir(this.animalId).subscribe((responseCurtida) => {
      if (responseCurtida) {
        this.animal$ = this.animaisService.buscaPorId(this.animalId);
      }
    });
  }

  /**
   * Envia uma requisição HTTP do tipo DELETE para excluir um animal.
   * Se a requisição for bem-sucedida, redireciona para a página de animais.
   * @returns um Observable que emite a resposta da requisição.
   */
  public excluir() {
    this.animaisService.excluirAnimal(this.animalId).subscribe(
      (response) => {
        console.log('response excluir: ', response);
        this.router.navigate(['/animais/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
