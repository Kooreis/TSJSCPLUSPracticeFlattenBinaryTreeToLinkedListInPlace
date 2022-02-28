Here is a TypeScript solution for the problem:

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function flatten(root: TreeNode | null): ListNode | null {
    let list: ListNode | null = null;
    let stack: TreeNode[] = [];
    if (root) stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        if (node) {
            list = new ListNode(node.val, list);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return list;
}

let root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)));
let list = flatten(root);
while (list) {
    console.log(list.val);
    list = list.next;
}
```

This solution uses a depth-first search approach to traverse the binary tree and create a linked list. The `flatten` function takes a `TreeNode` as input and returns a `ListNode`. It uses a stack to keep track of the nodes to be visited. The nodes are visited in a pre-order traversal order (root, left, right). For each visited node, a new `ListNode` is created and added to the front of the linked list. The linked list is then returned. The `TreeNode` and `ListNode` classes are used to represent a binary tree node and a linked list node, respectively.