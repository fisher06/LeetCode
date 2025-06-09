// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Wei XIE
// Date   : 2025-06-09

function lengthOfLongestSubstring(s: string): number {
    const seen = new Set<String>();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++
        }

        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength
};
