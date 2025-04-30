class MultiPlayerGameMatchMakingQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    this.minPlayer = 4;
  }
  enqueue(player) {
    this.queue[this.count] = player;
    this.rear++;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const player = this.queue[this.front];
    this.front++;
    this.count--;
    return player;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  startMatch() {
    if (this.count === this.minPlayer) {
      console.log('Start the game')
    } else {
      console.log(`Waiting for more players. Current players: ${this.count}`);
    }
  }
}


const matchQueue = new MultiPlayerGameMatchMakingQueue();
matchQueue.enqueue('Player 1');
matchQueue.enqueue('Player 2');
matchQueue.enqueue('Player 3');
matchQueue.enqueue('Player 4');
