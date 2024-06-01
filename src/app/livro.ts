export class Livro {
  codigo: number;
  codEditora?: number | string;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo: number, codEditora: number | string, titulo: string, resumo: string, autores: string[]) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
  }
}
