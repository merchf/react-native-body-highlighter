export type SkinType = 1 | 2 | 3 | 4 | 5 | 6;

export const skinColorMapping:{[key in SkinType]: string[]} = {
    1: ['#f5d6ba', '#d6b099', '#ffead4'],
    2: ['#eabc9a', '#c09a7d', '#ffd3b7'],
    3: ['#d6a887', '#b3876b', '#ffd0a3'],
    4: ['#c2835a', '#9e623e', '#e29f74'],
    5: ['#ae6932', '#8b4f24', '#d08546'],
    6: ['#44231e', '#7d3f36', '#875952'],
};