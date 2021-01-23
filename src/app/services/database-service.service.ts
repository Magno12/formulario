import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  dataBaseNome: string = 'relacao.db'
  db: SQLiteObject

  constructor(private sqLite: SQLite) { }

  public async openDataBase() {
    try {
      this.db = await this.sqLite.create(
        { name: this.dataBaseNome, location: 'default' })
      this.createDatabase();
    } catch (error) {
      console.log('erro open database')
    }
  }

  private createDatabase() {
    this.createTabelaSql(this.db);
    this.insertDados(this.db);
  }

  createTabelaSql(db: SQLiteObject) {
    db.sqlBatch(
      [
        ['CREATE TABLE categoria IF NOT EXISTS (idCategoria INteger PRIMARY KEY AUTOINCREMENT, descricao varchar(50))'],
        ['CREATE TABLE status IF NOT EXISTS (idStatus integer PRIMARY KEY autoincrement, nome varchar(30))'],
        ['CREATE TABLE categoria IF NOT EXISTS (idCategoria INteger PRIMARY KEY AUTOINCREMENT, descricao varchar(50))']
      ]);
  }

  insertDados(db: SQLiteObject) {
    db.sqlBatch(
      [
        ['insert into categoria(descricao) values ("CASA"),("LASER")'],
        ['insert into status(nome) VALUES ("PAGO"), ("A SER PAGO")'],
        ['INSERT INTO contas(descricao,valor,fkcategoria,fkstatus) VALUES ("Alugue",500.00,1,2),("Compras",100.00,1,2)']
      ]);
  }

  executeSql(sql: string, parmas?: any[]) {
    return this.db.executeSql(sql, parmas)
  }

  //passa um array de objetos
  executeSqlTransacao(sqlStatements: any[]) {
    return this.db.transaction((tx) => {
      sqlStatements.forEach((sqlStatement: any) => {
        tx.executeSql(sqlStatement.sql, sqlStatement.data)
      });
    })
  }

}
