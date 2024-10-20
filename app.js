

var deleteMiddle = function (head) {
    const length = calculateLength(head)
    if (length === 1) return null
    const mid = Math.floor(length / 2)
    let node = head
    for (let i = 0; i < mid - 1; i++) {
        node = node.next
    }
    node.next = node.next.next
    return head
};

function calculateLength(head) {
    let node = head
    let pos = 0
    while (node !== null) {
        node = node.next
        pos++
    }
    return pos
}