Here's a JavaScript solution using a depth-first search approach:

```javascript
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function flatten(root) {
    if (root === null) return;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
}

let prev = null;

// Test the function
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);

let node = root;
while (node !== null) {
    console.log(node.val);
    node = node.right;
}
```

This script first defines a TreeNode class for creating binary tree nodes. Then it defines the flatten function which recursively flattens the binary tree in-place. The flatten function uses a global variable prev to keep track of the previous node in the flattened list. Finally, the script creates a binary tree and flattens it, then prints out the values of the flattened list.