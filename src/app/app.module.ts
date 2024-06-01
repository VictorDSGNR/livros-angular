import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Certifique-se de que o caminho esteja correto
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Importe o componente standalone aqui
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  
})
export class AppModule { }
