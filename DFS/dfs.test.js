import { maxDepth } from './solutions';
import { TreeNode, buildTreeFromArray } from './problemSetUp';

describe('Given the root of a binary tree, return its maximum depth.', () => {

    test('returns the correct depth of a binary tree', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        let depth; // Declare `depth` outside the try block
        expect(maxDepth(root)).toBe(3);
      });

      test('returns 0 for an empty tree', () => {
        expect(maxDepth(null)).toBe(0);
      });

      test('returns the correct depth for the tree [3,9,20,null,null,15,7]', () => {
        const treeArray = [3,9,20,null,null,15,7];
        const root = buildTreeFromArray(treeArray);
        expect(maxDepth(root)).toBe(3); // The depth of the given tree is 3
      })

      test('returns the correct depth of a binary tree', ()=> {
        const treeArray = [1,null,2];
        const root = buildTreeFromArray(treeArray);
        expect(maxDepth(root)).toBe(2)
      })


})
