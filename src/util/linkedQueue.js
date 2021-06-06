export default function LinkedQueue() {
    let Node = function (ele) {
        this.ele = ele;
        this.next = null;
    };

    let length = 0,
        front, //队首指针
        rear; //队尾指针
    this.push = function (ele) {
        let node = new Node(ele),
            temp;

        if (length == 0) {
            front = node;
        } else {
            temp = rear;
            temp.next = node;
        }
        rear = node;
        length++;
        return true;
    };

    this.pop = function () {
        let temp = front;
        front = front.next;
        length--;
        temp.next = null;
        return temp;
    };

    this.size = function () {
        return length;
    };
    this.getFront = function () {
        return front;
        // 有没有什么思路只获取队列的头结点,而不是获取整个队列
    };
    this.getRear = function () {
        return rear;
    };
    this.toString = function () {
        let string = '',
            temp = front;
        while (temp) {
            string += temp.ele + ' ';
            temp = temp.next;
        }
        return string;
    };
    this.clear = function () {
        front = null;
        rear = null;
        length = 0;
        return true;
    };
}