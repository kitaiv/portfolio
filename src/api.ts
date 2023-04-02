const BOT_TOKEN = process.env.REACT_APP_BOT_TOKEN
const CHAT_ID = process.env.REACT_APP_CHAT_ID

//TODO: Add text formatting or find out something about this

const api = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=`;

interface MsgBotType {
  message: string;
  name: string;
  email: string;
}

const sendMessageToBot = async (msg: MsgBotType) => {
  try {
    const response = await fetch(
      api + `${msg.name}/${msg.email}/${msg.message}`,
      { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export default sendMessageToBot;
