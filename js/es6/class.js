class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }

    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}

// 继承
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}


// 类的成员方法，可以返回 this， 来实现链式调用。

class Jedi {
    jump() {
    this.jumping = true;
        return this;
    }
  
    setHeight(height) {
    this.height = height;
        return this;
    }
  }
  
  const luke = new Jedi();
  
  luke.jump()
    .setHeight(20);

