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
              className="bg-[#FBB040] hover:bg-[#FBB040] text-black hover:text-white border-2 border-transparent hover:border-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://poehali.dev/p/pay?show=subs" 
                target="_blank" 
                rel="noopener noreferrer"
                className=""
              >
                Продлить подписку
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}