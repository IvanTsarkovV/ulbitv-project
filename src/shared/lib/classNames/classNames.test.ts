import { classNames } from './classNames';
import { describe, expect, it } from '@jest/globals';

describe('classNames', () => {
  it('with one param', async () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  it('with additional params', async () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  it('with mods params', async () => {
    expect(classNames('someClass', { hovered: true, closed: false }, ['class1'])).toBe('someClass class1 hovered');
  });
});
