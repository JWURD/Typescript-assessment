import {MyServiceProvider} from './my-service';
import { isString } from 'util';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

let myService = null;
 
describe('My Service', () => {
 
    beforeEach(() => {
      //myService = new MyServiceProvider();
    });
 
    it('should return a string', () => {
 
            let result = myService.wuTangis();
 
            expect(isString(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    );
