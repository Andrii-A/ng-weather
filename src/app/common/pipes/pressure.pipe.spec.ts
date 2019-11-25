import { PressurePipe } from './pressure.pipe';

describe('PressurePipe', () => {
  const pipe = new PressurePipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert to atm if no scale', () => {
    expect(pipe.transform(1000)).toBe('0.99 atm');
  });

  it('should convert to mmHg metric scale', () => {
    expect(pipe.transform(1000, 'metric')).toBe('750.1 mmHg');
  });

  it('should convert to inHg if imperial scale', () => {
    expect(pipe.transform(1000, 'imperial')).toBe('29.53 inHg');
  });

});
