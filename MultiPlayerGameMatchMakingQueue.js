class MultiPlayerGameMatchMakingQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.count = 0;

  }
  enqueue(player) {
    this.queue[this.count] = player;
  }
}