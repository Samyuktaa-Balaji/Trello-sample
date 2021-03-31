import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AddTaskComponent } from '../add-task/add-task.component';

describe('DashboardComponent', () => {
    let fixture:ComponentFixture<DashboardComponent>;
    let app: DashboardComponent;
    let mockDialogConfig:MatDialogConfig;
    let mockDialog:any;
    class MatDialogMock {
        open() {
         return {
           afterClosed: () => of(true)
         };
       }
     }
    let mockTodo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];
    let mockDone = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];
    let mockDoing = [
        'Cooking',
        'Washing'
    ];
    let mockQA = [
        'Mom review',
        'Dog cleanliness'
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [DashboardComponent],
        imports: [MatDialogModule, BrowserDynamicTestingModule, FormsModule],
        providers: [
            { provide: MatDialog, useValue: new MatDialogMock() },
            { provide: MatDialogConfig, useValue: {} }
        ],
        schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
        mockDialogConfig = TestBed.get(MatDialogConfig);
        mockDialog = fixture.debugElement.injector.get(MatDialog);
    });

    test('test case 1', () => {
        expect(app).toBeTruthy();
        expect(mockTodo).toMatchObject(app.todo);
        expect(mockDoing).toMatchObject(app.doing);
        expect(mockQA).toMatchObject(app.qa);
        expect(mockDone).toMatchObject(app.done);
    });

    test('test case 2', () => {
        spyOn(app, 'OnCreate');
        fixture.detectChanges();
        const button = fixture.debugElement.nativeElement.querySelector('#add-task');
        button.click();
        expect(app.OnCreate).toHaveBeenCalled();
    });

    test('test case 3',() => {
        mockDialogConfig.width = '31%';
        mockDialogConfig.data = "";
        expect(mockDialogConfig.disableClose).toBeFalsy;
        expect(mockDialogConfig.autoFocus).toBeTruthy;
        expect(mockDialogConfig.width).toEqual('31%');
        expect(mockDialogConfig.data).toEqual("");
        const mockdialogRef = mockDialog.open(AddTaskComponent, mockDialogConfig);
        const spy = spyOn(mockDialog, 'open').and.callThrough().and.returnValue({
            afterClosed: () => of(true)
        });
        app.OnCreate();
        expect(spy).toHaveBeenCalled();
    });

    test('test case 4',() => {
        spyOn(app, 'edit');
        fixture.detectChanges();
        const button = fixture.debugElement.nativeElement.querySelector('#edit');
        button.click();
        expect(app.edit).toHaveBeenCalled();
    });

    test('test case 5',() => {
        let t:string = "Hello";
        mockDialogConfig.width = '31%';
        mockDialogConfig.data = "";
        expect(mockDialogConfig.disableClose).toBeFalsy;
        expect(mockDialogConfig.autoFocus).toBeTruthy;
        expect(mockDialogConfig.width).toEqual('31%');
        expect(mockDialogConfig.data).toEqual("");
        const mockdialogRef = mockDialog.open(AddTaskComponent, mockDialogConfig);
        const spy = spyOn(mockDialog, 'open').and.callThrough().and.returnValue({
            afterClosed: () => of(true)
        });
        app.edit(t);
        expect(spy).toHaveBeenCalled();
    });

    test('test case 6',() => {
        let t:string = "Get to work";
        spyOn(app, 'delete');
        fixture.detectChanges();
        const button = fixture.debugElement.nativeElement.querySelector('#delete');
        button.click();
        expect(app.delete).toHaveBeenCalled();
        app.delete(t);
        expect(app.todo.indexOf(t)).toEqual(0);
        expect(app.todo.splice(app.todo.indexOf(t),1)).toEqual(mockTodo.splice(mockTodo.indexOf(t),1));
    });
})