import { Pipe, PipeTransform, Directive, NgModule, } from '@angular/core';


// ------------ MOCK PIPES

@Pipe({ name: 'temp' })
export class MockTempPipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}


@Pipe({ name: 'pressure' })
export class MockPressurePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}


@Pipe({ name: 'speed' })
export class MockSpeedPipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}






// ------------ MOCK DIRECTIVES

@Directive({
  selector: '[formGroup]',
  inputs: [ 'formGroup' ]
})
export class MockformGroupDirective {
}

@Directive({
  selector: '[formControl]',
  inputs: [ 'formControl' ]
})
export class MockFormControlDirective {
}




const allDeps = [
  MockTempPipe,
  MockPressurePipe,
  MockSpeedPipe,

  MockformGroupDirective,
  MockFormControlDirective,
];


@NgModule({
  declarations: allDeps,
  exports: allDeps
})
export class TestHelperModule {
}

