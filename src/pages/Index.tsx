import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-5">
      <div className="w-full max-w-lg">
        <Card className="glass-card rounded-3xl p-12 text-center animate-scale-in shadow-2xl">
          {/* Logo */}
          <div className="mb-8 inline-block">
            <img 
              src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
              alt="Поехали!" 
              width="100" 
              height="100"
              className="animate-fade-in" 
            />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 gradient-text animate-fade-in">
            Подписка истекла
          </h1>
          
          {/* Message */}
          <div className="mb-8 text-white/80 leading-relaxed animate-fade-in space-y-3">
            <p>
              Ваша подписка на сервис{' '}
              <a 
                href="https://poehali.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coral font-semibold hover:underline transition-all duration-300"
              >
                Поехали!
              </a>{' '}
              закончилась.
            </p>
            <p>
              Чтобы ваш сайт снова заработал, необходимо продлить подписку.
            </p>
          </div>
          
          {/* Action Button */}
          <div className="animate-fade-in">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-coral to-orange-500 hover:from-coral/90 hover:to-orange-500/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow"
            >
              <a 
                href="https://poehali.dev/p/pay?show=subs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Icon name="CreditCard" size={20} />
                Продлить подписку
              </a>
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
            <p className="text-white/50 text-sm">
              Нужна помощь?{' '}
              <a 
                href="https://t.me/+QgiLIa1gFRY4Y2Iy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coral hover:underline transition-all duration-300"
              >
                Напишите в Telegram
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}