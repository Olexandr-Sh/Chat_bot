class Chat {
  sendMessage() {
    let messageHistoryBlock = document.getElementsByClassName(messageHistory);
    let messageBlock = this.createMessageBlock();
    messageHistoryBlock.appendChild(messageBlock);
  }

  createMessageBlock() {
    let messageBlock = document.createElement('div');
    messageBlock.classList.add('message');

    let messageDateBlock = this.createMessageDateBlock();
    messageBlock.appendChild(messageDateBlock);
    
    return messageBlock;
  }

  createMessageDateBlock() {
    let messageDateBlock = document.createElement('span');
    messageDateBlock.classList.add('date');
    messageDateBlock.textContent - '23.05.21';

    return messageDateBlock;
  }
}

let chat = new Chat();