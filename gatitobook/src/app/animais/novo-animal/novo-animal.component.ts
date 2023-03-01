import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css'],
})
export class NovoAnimalComponent implements OnInit {
  formularioAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido: number = 0;

  constructor(
    private animaisService: AnimaisService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormAnimal();
  }

  public inicializarFormAnimal(): void {
    this.formularioAnimal = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  public upload(): void {
    console.log('upload');

    const allowComments =
      this.formularioAnimal.get('allowComments')?.value ?? false;

    const description = this.formularioAnimal.get('description')?.value ?? '';

    this.animaisService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => {
          this.router.navigate(['animais']);
        })
      )
      .subscribe(
        (responseEvent: HttpEvent<any>) => {
          if (responseEvent.type === HttpEventType.UploadProgress) {
            const total = responseEvent.total ?? 1;
            this.percentualConcluido = Math.round(
              100 * (responseEvent.loaded / total)
            );
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  gravaArquivo(arquivo: any): void {
    const file = arquivo?.files[0];

    this.file = file;

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}
