class Node {
    constructor(value) {
        this.val = value
        this.next = undefined
    }
}
class NodeList {
    constructor(arr) {
        // 声明链表头部节点
        let head = new Node(arr.shift());
        // 下个节点
        let next = head;
        arr.forEach(item => {
            next.next = new Node(item)
                // 保存下一个节点
            next = next.next
        })
        return head
    }
}
// 两个节点交换
let swap = (p, q) => {
    let tmp = p.val;
    p.val = q.val;
    q.val = tmp
}
let partion = (begin, end) => {
    let val = begin.val;
    let p = begin;
    let q = begin.next;
    while (q !== end) {
        if (q.val < val) {
            p = p.next;
            swap(p, q)
        }
        q = q.next
    }
    // 让基准元素换到中间位置
    swap(p, begin);
    return p;
}

function sort(begin, end) {
    if (begin !== end) {
        let part = partion(begin, end);
        sort(begin, part)
        sort(part.next, end)
    }
}
let head = new NodeList([4, 5, 3, 6, 5, 8, 99, 22, 11]);
console.log(head);
console.log(sort(head));