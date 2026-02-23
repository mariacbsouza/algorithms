/**
 * https://leetcode.com/problems/roman-to-integer/
 */

function romanToInt(s: string): number {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = dict[s[i]];
        const next = dict[s[i + 1]] || 0;

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};
