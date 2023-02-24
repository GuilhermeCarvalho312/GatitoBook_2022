import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
})
export class AutenticacaoModule {}


// Esse código é um exemplo de como registrar um interceptor em um módulo em Angular 11. Ele mostra como você pode registrar um interceptor chamado AutenticacaoInterceptor usando a API HTTP_INTERCEPTORS fornecida pelo Angular.

// O código começa com algumas importações necessárias, incluindo o decorator NgModule, o módulo CommonModule, o objeto HTTP_INTERCEPTORS e a classe AutenticacaoInterceptor.

// Em seguida, ele define um novo módulo chamado AutenticacaoModule. O módulo não tem nenhum componente declarado (por isso não há nada dentro do array declarations), mas ele importa o CommonModule.

// A propriedade providers do decorator NgModule é usada para registrar o interceptor. É adicionado um objeto à propriedade providers que fornece informações sobre o interceptor. Este objeto tem três propriedades:

// provide: O objeto HTTP_INTERCEPTORS é fornecido como um valor. Essa propriedade informa ao Angular que estamos registrando um interceptor.

// useClass: A classe AutenticacaoInterceptor é definida como a classe que deve ser usada como o interceptor.

// multi: A propriedade multi é definida como true para indicar que estamos registrando mais de um interceptor.

// Isso significa que estamos registrando um interceptor chamado AutenticacaoInterceptor usando a API HTTP_INTERCEPTORS. Quando a aplicação é executada, o Angular usará automaticamente esse interceptor para todas as solicitações HTTP.

// Em resumo, este código é um exemplo de como registrar um interceptor em um módulo Angular 11. Ele mostra como você pode usar a API HTTP_INTERCEPTORS para registrar o interceptor e como definir as propriedades provide, useClass e multi.
