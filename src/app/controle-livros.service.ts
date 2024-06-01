import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
 providedIn: 'root'
})
export class ControleLivrosService {
 livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Título do Livro 1', resumo: 'Resumo do Livro 1', autores: ["Autor 1", "Autor 2"]},
    { codigo: 2, codEditora: 2, titulo: 'Título do Livro 2', resumo: 'Resumo do Livro 2', autores: ["Autor 3", "Autor 4"]},
    { codigo: 3, codEditora: 3, titulo: 'Título do Livro 3', resumo: 'Resumo do Livro 3', autores: ["Autor 5", "Autor 6"]}
 ];

 constructor() { }


 obterLivros(): Livro[] {
  return this.livros;
  }

  incluir(novoLivro: Livro): void {
    let proximoCodigo = this.livros.length + 1;

    const codigoExiste = this.livros.some(libro => libro.codigo === proximoCodigo);

    if (codigoExiste) {
      while (this.livros.some(libro => libro.codigo === proximoCodigo)) {
        proximoCodigo++;
      }
    }

    novoLivro.codigo = proximoCodigo;
    novoLivro.autores = `${novoLivro.autores}`.split('\n')

    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

