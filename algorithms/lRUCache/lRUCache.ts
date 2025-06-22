class DLinkedNode {
  key: number;
  val: number;
  prev: DLinkedNode | null = null;
  next: DLinkedNode | null = null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
    private map: Map<number, DLinkedNode> = new Map();
    private capacity: number;
    private size = 0;
    private head: DLinkedNode;
    private tail: DLinkedNode; 

    constructor(capacity: number) {
        this.capacity = capacity;
        this.head = new DLinkedNode(0, 0);
        this.tail = new DLinkedNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;
        this.moveToHead(node);
        return node.val;
    }

    put(key: number, value: number): void {
        const node = this.map.get(key);
        if (node) {
            node.val = value;
            this.moveToHead(node);
        } else {
            const newNode = new DLinkedNode(key, value);
            this.map.set(key, newNode);
            this.addToHead(newNode);
            this.size++;

            if (this.size > this.capacity) {
                const tail = this.removeTail();
                this.map.delete(tail.key);
                this.size--;
            }
        }
    }

    private addToHead(node: DLinkedNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    private removeNode(node: DLinkedNode) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private moveToHead(node: DLinkedNode) {
        this.removeNode(node);
        this.addToHead(node);
    }

    private removeTail(): DLinkedNode {
        const node = this.tail.prev!;
        this.removeNode(node);
        return node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
