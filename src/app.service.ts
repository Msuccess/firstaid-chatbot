import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TelegramBot = require('node-telegram-bot-api');

    const token = '1939341410:AAGml7NK-qJkG27aMkH7H1oB1ciY7j8xSVY';

    const bot = new TelegramBot(token, { polling: true });
    bot.on('message', (msg) => {
      const hiMessage = 'hi';
      if (msg.text.toString().toLowerCase().indexOf(hiMessage) === 0) {
        bot.sendMessage(
          msg.from.id,
          'Hello ' +
            msg.from.first_name +
            ' what would you like to know about me ?',
        );
      }
    });
  }
}
