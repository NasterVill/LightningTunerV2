import * as musicData from '../';

test('getFrequency for note E', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[0])).toBe(82.4068892282175);
});

test('getFrequency for note A', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[1])).toBe(110);
});

test('getFrequency for note D', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[2])).toBe(146.8323839587038);
});

test('getFrequency for note G', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[3])).toBe(195.99771799087463);
});

test('getFrequency for note B', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[4])).toBe(246.94165062806206);
});

test('getFrequency for note Eh', () => {
    expect(musicData.getFrequency(musicData.getDefaultTunings().STANDARD.notes[5])).toBe(329.6275569128699);
});
