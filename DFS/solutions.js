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
  733. Flood Fill
    https://leetcode.com/problems/flood-fill/description/

    You are also given three integers sr, sc, and color.
    You should perform a flood fill on the image starting
    from the pixel image[sr][sc].

    To perform a flood fill, consider the starting pixel,
    plus any pixels connected 4-directionally to the starting
    pixel of the same color as the starting pixel, plus any
    pixels connected 4-directionally to those pixels (also with
    the same color), and so on. Replace the color of all of
    the aforementioned pixels with color.
  ***********************************/
    var floodFill = function(image, sr, sc, color) {
      // 1) can only change blocks that are same color as [sr,sc] (OGColor)
      let ogColor = image[sr][sc];
      let stack = [[sr, sc]];
      while(stack.length){

          // get the next set of coordinates
          let [cr, cc] = stack.pop();
          if(image[cr][cc] === color) continue;

          // add directions into stack if qualifying

          if(cr >= 1 && image[cr-1][cc] === ogColor) stack.push([cr-1, cc])
          if(cr+1 < image.length && image[cr+1][cc] === ogColor) stack.push([cr+1, cc])
          if(cc >= 1 && image[cr][cc-1] === ogColor) stack.push([cr, cc-1])
          if(cc+1 < image[cr].length && image[cr][cc+1] === ogColor) stack.push([cr, cc+1])

          // change this spot on the image
          image[cr][cc] = color
      }
      return image;

  };


 /*******************************
    Binary Tree Paths
    https://leetcode.com/problems/binary-tree-paths/description/
  ***********************************/



  /*******************************
    Sum of Root To Leaf Binary Numbers
  ***********************************/
  