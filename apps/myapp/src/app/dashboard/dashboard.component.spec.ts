import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {of, EMPTY} from 'rxjs';

describe('DashboardComponent', () => {
    let fixture:ComponentFixture<DashboardComponent>;
    let app: DashboardComponent;
    class dialogMock {
        open() { 
            return { 
                afterClosed:() => of(true)
            };
        }
    };
    const matDialog = new dialogMock();
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
        schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
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
})