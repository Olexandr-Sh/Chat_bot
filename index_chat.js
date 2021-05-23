class Chat {
  constructor() {
    let sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', () => {
      this.sendMessage();
    });
  }

  sendMessage() {
    let messageHistoryBlock = document.getElementById('messageHistory');
    let inputElement = document.getElementById('msg');

    let messageBlock = this.createMessageBlock({ text: inputElement.value });
    messageHistoryBlock.appendChild(messageBlock);
  }

  getInputMessage() {
    let inputElement = document.getElementById('msg');
    let inputValue = inputElement.value;
    inputElement.value = '';
    return inputValue;
  }

  createMessageBlock(params) {
    let messageBlock = document.createElement('div');
    messageBlock.classList.add('message');

    let messageDateBlock = this.createMessageDateBlock();
    messageBlock.appendChild(messageDateBlock);

    let messageAvatarBlock = this.createMessageAvatarBlock();
    messageBlock.appendChild(messageAvatarBlock);

    let messageTextBlock = this.createMessageTextBlock(params.text);
    messageBlock.appendChild(messageTextBlock);
    
    return messageBlock;
  }

  createMessageDateBlock() {
    let messageDateBlock = document.createElement('span');
    messageDateBlock.classList.add('date');
    messageDateBlock.textContent = '23.05.21';

    return messageDateBlock;
  }

  createMessageAvatarBlock() {
    let messageAvatarBlock = document.createElement('div');
    messageAvatarBlock.classList.add('avatar');

    return messageAvatarBlock;
  }

  createMessageTextBlock(text) {
    let messageTextBlock = document.createElement('p');
    messageTextBlock.textContent = text;

    return messageTextBlock;
  }
}

let chat = new Chat();