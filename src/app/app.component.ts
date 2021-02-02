import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDF_test';
  public userArray: Market_Price[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/actuals-da-market-prices.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              let str=row[0].split('-')[0];
              let dt =new Date(str.substring(0,5)+'-'+str.substring(5,7)+'-'+str.substring(7,9));
              this.userArray.push(new Market_Price( dt,row[1],row[2],row[3] ,row[4] ,row[5], row[6], row[7],row[8],row[9]));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }
}


export class Market_Price {
  FirstOrderedOn: Date;
  be: String;
  ch: String;
  cz: String;
  de_at: String;
  dk1: String;
  dk2: String;
  es: String;
  fr: String;
  nl: String;

  constructor(dates: Date, be: String, ch: String, cz: String, de_at: String, dk1: String, dk2: String,
    es: String, fr: String, nl: String) {
    this.FirstOrderedOn =dates;
    this.be = be;
    this.ch = ch;
    this.cz = cz;
    this.de_at = de_at;
    this.dk1 = dk1;
    this.dk2 = dk2;
    this.es = es;
    this.fr = fr;
    this.nl = nl;
  }
}