import {LoginComponent} from './login.component';
import { Router } from '@angular/router';

describe('LoginComponent',() => {
  let fixture: LoginComponent;
  let routerMock: Router;

  beforeEach(() => {
    fixture = new LoginComponent(routerMock);
  });

  describe('Test case',() => {
    test('first test case',() => {
      expect(fixture.email).toEqual("");
      expect(fixture.password).toEqual("");
      expect(fixture.user_email).toEqual("Samyuktaa.Balaji@cat.com");
      expect(fixture.user_pass).toEqual("123456789");
    });
  });
});