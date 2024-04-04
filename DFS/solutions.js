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
  Path Sum
  ***********************************/

 /*******************************
    Flood Fill
  ***********************************/

 /*******************************
    Binary Tree Paths
  ***********************************/


  /*******************************
    Sum of Root To Leaf Binary Numbers
  ***********************************/
