import axios from 'axios';
import moment from 'moment-timezone';

const url = '/api/messages/';

class MessageService {
  static getMessages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const messages = res.data;
        resolve(
          messages.map(message => {
            message.date = moment(message.date).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
            return message;
          })
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getLatestMessage() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}latest_message`);
        const message = res.data;
        message.date = moment(message.date).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
        resolve(message);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default MessageService;