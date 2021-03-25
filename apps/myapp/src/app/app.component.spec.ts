import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent} from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent',() => {
  let fixture:ComponentFixture<AppComponent>;
  let app:AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule, MatToolbarModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('Test Case',() => {

    test('first test case',() => {
      expect(fixture).toBeTruthy;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const p = compiled.querySelector('p');
      expect(p.textContent).toContain("Dashboard");
    });
    
  });
});