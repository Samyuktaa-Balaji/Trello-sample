import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AddTaskComponent', () => {
  let fixture: ComponentFixture<AddTaskComponent>;
  let app: AddTaskComponent;
  const dialogMock = {
    close: () => { }
   };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [MatDialogModule, BrowserDynamicTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('test case 1', () => {
    expect(app).toBeTruthy();
  });

  test('test case 2', () => {
    spyOn(app, 'submit');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('#dialog-button');
    button.click();
    expect(app.submit).toHaveBeenCalled();
  });

  test('test case 3', () => {
    let spy = spyOn(app.dialogRef, 'close').and.callThrough();
    app.submit();
    expect(spy).toHaveBeenCalled();
  });
});
