import { SpeedPipe } from './speed.pipe';

describe('SpeedPipe', () => {
  const pipe = new SpeedPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same value (default units are meter/s) if no scale', () => {
    expect(pipe.transform(10)).toBe('10 meter/s');
  });

  it('should convert to meter/s metric scale', () => {
    expect(pipe.transform(10, 'metric')).toBe('10.0 meter/s');
  });

  it('should convert to miles/h if imperial scale', () => {
    expect(pipe.transform(10, 'imperial')).toBe('22.4 miles/h');
  });
});
