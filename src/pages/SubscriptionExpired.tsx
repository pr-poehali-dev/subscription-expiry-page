import { Card } from '@/components/ui/card';

export default function SubscriptionExpired() {
  return (
    <div className="subscription-expired-container">
      <div className="subscription-expired-wrapper">
        <Card className="subscription-expired-card">
          <div className="subscription-expired-logo">
            <img 
              src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
              alt="Поехали!" 
              width="100" 
              height="100" 
            />
          </div>
          
          <h1 className="subscription-expired-title">Подписка истекла</h1>
          
          <div className="subscription-expired-message">
            <p>
              Ваша подписка на сервис{' '}
              <a 
                href="https://poehali.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="subscription-expired-link"
              >
                Поехали!
              </a>{' '}
              закончилась.
            </p>
            <p>Чтобы ваш сайт снова заработал, необходимо продлить подписку.</p>
          </div>
          
          <div className="subscription-expired-actions">
            <a 
              href="https://poehali.dev/p/pay?show=subs" 
              className="subscription-expired-btn-primary" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Продлить подписку
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}