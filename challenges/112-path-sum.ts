/**
 * https://leetcode.com/problems/path-sum/
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null && root.val === targetSum) {
        return true;
    }

    const newTargetSum = targetSum - root.val;
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
};
