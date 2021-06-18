import React, { useState } from 'react';
import Sidebar from 'al-comps/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import 'al-styles/base.scss';
export default function App(props) {
  const [state, setState] = useState({
    typing: null,
    chat: [],
  });

  const trigger = [
    ['whats your name', 'your name', 'hi what your name', 'who are you'],
    ['hi', 'hey', 'hello'],
    ['how are you', 'how are things'],
    ['what is going on', 'what is up'],
    ['happy', 'good', 'well', 'fantastic', 'cool'],
    ['bad', 'bored', 'tired', 'sad'],
    ['tell me story', 'tell me joke'],
    ['thanks', 'thank you'],
    ['bye', 'good bye', 'goodbye'],
  ];
  const reply = [
    ['im Rofi'],
    ['Hello!', 'Hi!', 'Hey!', 'Hi there!'],
    [
      'Fine... how are you?',
      'Pretty well, how are you?',
      'Fantastic, how are you?',
    ],
    ['Nothing much', 'Exciting things!'],
    ['Glad to hear it'],
    ['Why?', 'Cheer up buddy'],
    ['What about?', 'Once upon a time...'],
    ["You're welcome", 'No problem'],
    ['Goodbye', 'See you later'],
  ];
  const resetState = () => {
    setState({
      typing: null,
      chat: [],
    });
    document.getElementById('quetion').value = null;
  };

  function compare(triggerArray, replyArray, text) {
    let item;
    let items;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == text) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, '');
    text = text
      .replace(/ a /g, ' ')
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '');

    if (compare(trigger, reply, text)) {
      product = compare(trigger, reply, text);
    } else {
      product = "sorry I haven't learned it, another quetion please!";
    }
    const { chat } = state;
    const outputChat = {
      type: 'incoming',
      message: product,
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
    };
    const newData = chat;
    newData.push(outputChat);
    setState(prevState => ({
      ...prevState,
      chat: [...newData],
    }));
  }

  const handleSend = e => {
    e.preventDefault();
    const { chat } = state;
    if (state.typing.toLowerCase() === '/clear') {
      resetState();
      return;
    }
    const newChat = {
      type: 'outgoing',
      message: state.typing,
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
    };
    const newData = chat;
    newData.push(newChat);
    setState(prevState => ({
      ...prevState,
      chat: [...newData],
      typing: null,
    }));
    setTimeout(() => {
      output(newChat.message);
    }, 3000);
    document.getElementById('quetion').value = null;
  };

  const handleTypingChange = e => {
    const { value } = e.target;
    setState(prevState => ({
      ...prevState,
      typing: value,
    }));
  };
  return (
    <div className="root">
      <div className="section-app">
        <Sidebar />
        <div className="content">
          <div className="inner-body">
            <div className="section-convertation middle">
              <div className="header-chat">
                <div className="user-chat">
                  <div className="avatar" />
                </div>
              </div>
              {state.chat.map(ch => (
                <div className={ch.type}>
                  <div className="bubble">{ch.message}</div>
                </div>
              ))}
            </div>
            <div className="section-footer">
              <form className="section-quetion" onSubmit={handleSend}>
                <input
                  id="quetion"
                  value={state.typing}
                  name="outgoing"
                  onChange={handleTypingChange}
                  className="quetion-area"
                  placeholder="Ask anything about me...!"
                />
                <div className="btn-area">
                  <button className="btn-send" type="submit">
                    <FontAwesomeIcon icon={faKeyboard} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header-fixed">
        <nav className="navbar-fixed">
          <Search placeholder="Search" />
          <NavLink to="/auth" className="login">
            Login
          </NavLink>
        </nav>
      </div>
      <div className="section">
        <Switch>
          <Route exact="exact" path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <GlobalStyle /> */}
    </div>
  );
}
