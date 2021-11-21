import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  onModuleInit() {
    this.botMessage();
  }

  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TelegramBot = require('node-telegram-bot-api');

    const token = '2128153816:AAGJhTrdCiI9R8o6Kiplc3NRPewcyOlRFaA';

    const bot = new TelegramBot(token, { polling: true });
    bot.on('message', (msg) => {
      const Hi = 'hi';
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
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
