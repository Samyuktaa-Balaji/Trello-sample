import {LoginComponent} from './login.component';
import { Router } from '@angular/router';

describe('LoginComponent',() => {
  let fixture: LoginComponent;
  let routerMock: Router;

  beforeEach(() => {
    fixture = new LoginComponent(routerMock);
  });

  describe('Test case',() => {

    test('test case 1',() => {
      expect(fixture.email).toEqual("");
      expect(fixture.password).toEqual("");
      expect(fixture.user_email).toEqual("xyz@cat.com");
      expect(fixture.user_pass).toEqual("1234");
    });

    test('test case 2',() => {
      expect(fixture.checkUser()).toBeTruthy;
    });
  });
});