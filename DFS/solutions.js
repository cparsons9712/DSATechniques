/********************************
  104. Maximum Depth of Binary Tree

    https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest
    path from the root node down to the farthest leaf node.
 **********************************/
    var maxDepth = function(root) {
      if (!root) return 0;
      let stack = [[root, 1]];
      let deepestDepth = 0;
      while (stack.length){
          let [curr, currDepth] = stack.pop();
          if (curr){
              deepestDepth = Math.max(currDepth, deepestDepth)
              if (curr.left) stack.push([curr.left, currDepth + 1])
              if(curr.right) stack.push([curr.right, currDepth + 1])
          }
      }
      return deepestDepth
  };

 /*******************************
  112. Path Sum

    https://leetcode.com/problems/path-sum/description/

    Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
  ***********************************/
    var hasPathSum = function(root, targetSum) {
      if (!root) return false;
      const stack = [[root, root.val]];
      while(stack.length){
          let [curr, currSum] = stack.pop();

          if(!curr.left && !curr.right){
              if(targetSum === currSum) return true
          }
          if(curr.left) stack.push([curr.left, currSum + curr.left.val])
          if(curr.right) stack.push([curr.right, currSum + curr.right.val])
      }
      return false
  };


 /*******************************
    Flood Fill
  ***********************************/

 /*******************************
    Binary Tree Paths
  ***********************************/


  /*******************************
    Sum of Root To Leaf Binary Numbers
  ***********************************/
