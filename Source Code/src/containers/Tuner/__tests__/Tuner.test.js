import Tuner from '../Tuner';

test('computes log2 of 8', () => {
    expect(Tuner.log2(8)).toBe(3);
});

test('computes log2 of 155', () => {
    expect(Tuner.log2(155)).toBe(7.276124405274238);
});

test('compute pos for 25 cents', () => {
    expect(Tuner.computePos(25)).toBe(62.5);
});

test('compute pos for 43 cents', () => {
    expect(Tuner.computePos(43)).toBe(71.5);
});

test('compute cents for base 82.41 (E) and frequency 82', () => {
    expect(Tuner.computeCents(82.41, 82)).toBe(-8.634601685044665);
});

test('compute cents for base 110 (A) and frequency 108.9', () => {
    expect(Tuner.computeCents(110, 108.9)).toBe(-17.399483634137912);
});


