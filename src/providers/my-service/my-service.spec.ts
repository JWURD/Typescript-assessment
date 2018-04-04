
import { isString } from 'util';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MyServiceProvider } from './my-service';

describe('My Service', () => {
    let myService: MyServiceProvider;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MyServiceProvider]
        });
        myService = TestBed.get(MyServiceProvider);
        httpMock = TestBed.get(HttpTestingController);

    });


    it('should return a string', () => {

        let result = myService.wuTangis();

        expect(isString(result)).toBeTruthy;
        expect(result.length).toBeGreaterThan(0);
    });
    it('should return a string of fav band', () => {
       
        myService.myFavoriteBand(1).subscribe((data: any) =>   {
           expect(data.name).toBe('Luke Skywalker');
           });
           
           const req = httpMock.expectOne(`http://replace.with.api/anything/1`, 'call to api');
       expect(req.request.method).toBe('GET');
    
 req.flush({
       name: 'Luke Skywalker'
     });
   
     httpMock.verify();
   });
 
   it('should post the correct data', () => {
    myService.newBandILIke('theBand' ).subscribe((data: any) => {
      expect(data.value).toBe('theBand');
    });
  
    const req = httpMock.expectOne(`http://replace.with.api/anything`, 'post to api');
    expect(req.request.method).toBe('POST');
  
    req.flush({
      value: 'theBand'
    });
  
    httpMock.verify();
  });




    
});
