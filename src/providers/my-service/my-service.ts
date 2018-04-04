import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {
  

  constructor(public http: HttpClient) {
  }



/*
Create a service that has a public function called wuTangIs(), that returns a string with the value "For the Children".
Successfully write a unit test for wuTangIs()
Level 2 (PRIDE and LUNCH)
*/

wuTangis(){
  return "For the Children";
}


/*
In the same service have a public funtion called myFavoriteBand(), that calls a http get endpoint which will return a string.
Successfully write a unit test for myFavoriteBand(), mocking out the http call.
Level 3 (Take Tariq's personal money in a DISRESPECTFUL mannor)
*/

myFavoriteBand(){

}
/*
In the same service have a public funtion called newBandILIke(value) , that accepts a String as a parameter, and calls a post endpoint.
Succesfully write a unit test for newBandILIke(value) and mock out the http call.*/

}