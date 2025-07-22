import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () => {
    let newMessage = greeting;

    while (newMessage === greeting) {
      newMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    return newMessage;
  };

  return (
    <div>
      <h3>{greeting}！感谢来访！</h3>
      <button onClick={() => setGreeting(randomMessage())}>新的欢迎语</button>
    </div>
  );
}
