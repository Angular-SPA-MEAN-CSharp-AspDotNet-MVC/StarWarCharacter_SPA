import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const  httpOptions = {
//   headers: new HttpHeaders({ 
//     'Access-Control-Allow-Origin':'*',
//     'Authorization':'authkey',
//     'userid':'1'
//   })
// };


//.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")

@Injectable({
  providedIn: 'root'
})
export class GetCharacterListService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://swapi.co/api/people';

  getCharacterData(): Observable <string> {

    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin':'https://swapi.co/api/*', "Access-Control-Allow-Methods": "GET",'Content-Type': 'text/plain'});  
    return this.http.get('https://swapi.co/api/people/1', {responseType: 'text', headers});  


    //console.log("Here");
    //return this.http.get(`http://swapi.co/api/people/1`); // hard code for testing only
      //.map((response: Response) => {
        //console.log(response.json());
       // return response.json();
      //});
  }
  
}
