class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null; 
    }

    insert(val, root = this.root){
        if(!root){
            this.root = new TreeNode(val);
            return;
        }

        
        if(val < root.val){
            if(!root.left){
                root.left = new TreeNode(val)
            } else {
                this.insert(val, root.left)
            }
    
        } else{
            if(!root.right){
                root.right = new TreeNode(val)
             } else {  
                 this.insert(val, root.right)
             }
        } 
    }
    searchRecur(val, root=this.root){
        if(!root) return false;

        if(val < root.val){
            return this.searchRecur(val, root.left);
        } else if(val > root.val){
            return this.searchRecur(val, root.right)
        } else {
            return true;
        }

    }
    searchIter(val, root=this.root){
        if(!root) return false;

        let queue = [root];

        while(queue.length){

            let root = queue.shift();
            if(root.val == val) return true;
            if(root.left) queue.push(root.left);
            if(root.right) queue.push(root.right);

        }


        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};