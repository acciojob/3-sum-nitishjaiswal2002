function threeSum(arr, target) {
  //your code here
	 if (arr.length < 3) return null;

    arr.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // Found exact match, return sum immediately
                return sum;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
