import '../subscription-styles.css';

export default function SubscriptionExpired() {
  return (
    <div className="container">
      <div className="card">
        <div className="logo">
          <img 
            src="https://poehali.dev/_next/static/media/logo.1d9d82a2.svg" 
            alt="Поехали!" 
            width="100" 
            height="100" 
          />
        </div>
        
        <h1 className="title">Подписка истекла</h1>
        
        <div className="message">
          <p>
            Ваша подписка на сервис{' '}
            <a 
              href="https://poehali.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FBB040', textDecoration: 'none', fontWeight: '600' }}
            >
              Поехали!
            </a>{' '}
            закончилась.
          </p>
          <p>Чтобы ваш сайт снова заработал, необходимо продлить подписку.</p>
        </div>
        
        <div className="actions">
          <a 
            href="https://poehali.dev/p/pay?show=subs" 
            className="btn-primary" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Продлить подписку
          </a>
        </div>
      </div>
    </div>
  );
}