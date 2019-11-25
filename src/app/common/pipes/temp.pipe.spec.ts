import { TempPipe } from './temp.pipe';

describe('TempPipe', () => {
  const pipe = new TempPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same value (default unit is °K) if no scale', () => {
    expect(pipe.transform(300)).toBe('300°K');
  });

  it('should convert to °C metric scale', () => {
    expect(pipe.transform(300, 'metric')).toBe('26.9°C');
  });

  it('should convert to °F if imperial scale', () => {
    expect(pipe.transform(300, 'imperial')).toBe('80.3°F');
  });
});
