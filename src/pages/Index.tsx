import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const services = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'Создаем современные сайты и веб-приложения с использованием передовых технологий'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Разрабатываем интуитивные интерфейсы, которые нравятся пользователям'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разрабатываем кросс-платформенные мобильные решения'
    },
    {
      icon: 'Zap',
      title: 'Оптимизация',
      description: 'Повышаем производительность и скорость загрузки ваших проектов'
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      category: 'Веб-разработка',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'Корпоративный сайт',
      category: 'Дизайн',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
    },
    {
      title: 'Мобильное приложение',
      category: 'Разработка',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    }
  ];

  const team = [
    {
      name: 'Анна Смирнова',
      role: 'Арт-директор',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    },
    {
      name: 'Дмитрий Петров',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Елена Волкова',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    }
  ];

  const process = [
    { step: '01', title: 'Исследование', description: 'Анализируем ваш бизнес и целевую аудиторию' },
    { step: '02', title: 'Проектирование', description: 'Создаем архитектуру и прототипы' },
    { step: '03', title: 'Разработка', description: 'Реализуем проект с использованием лучших практик' },
    { step: '04', title: 'Запуск', description: 'Тестируем и выводим продукт на рынок' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">WEB STUDIO</div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Портфолио', 'Услуги', 'О нас', 'Команда', 'Процесс', 'Кейсы', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['Главная', 'Портфолио', 'Услуги', 'О нас', 'Команда', 'Процесс', 'Кейсы', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              Создаем<br />цифровые<br />продукты
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Веб-студия полного цикла. Разрабатываем сайты, приложения и digital-решения для вашего бизнеса
            </p>
            <Button size="lg" className="rounded-full px-8" onClick={() => scrollToSection('контакты')}>
              Начать проект
            </Button>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover-scale">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <button className="mt-4 text-sm story-link">Подробнее</button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 hover-scale">
                <div className="mb-4">
                  <Icon name={service.icon} size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-8">О студии</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы — команда профессионалов с опытом более 10 лет в веб-разработке и дизайне.
              Создаем продукты, которые решают бизнес-задачи и приносят результат.
            </p>
            <p className="text-lg text-muted-foreground">
              Наш подход основан на глубоком понимании потребностей клиента, внимании к деталям
              и использовании современных технологий.
            </p>
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="процесс" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Процесс работы</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-6xl font-bold text-primary/20">{item.step}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="кейсы" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8">Кейсы</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Примеры наших успешных проектов с детальным описанием решений
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover-scale">
              <h3 className="text-2xl font-bold mb-4">Увеличение конверсии на 150%</h3>
              <p className="text-muted-foreground mb-4">
                Редизайн интернет-магазина электроники с фокусом на UX
              </p>
              <button className="story-link text-sm">Читать кейс</button>
            </Card>
            <Card className="p-8 hover-scale">
              <h3 className="text-2xl font-bold mb-4">Запуск MVP за 3 недели</h3>
              <p className="text-muted-foreground mb-4">
                Разработка SaaS-платформы для управления проектами
              </p>
              <button className="story-link text-sm">Читать кейс</button>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>hello@webstudio.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full rounded-full">Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">WEB STUDIO</div>
              <p className="text-sm opacity-80">Создаем цифровые продукты</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Веб-разработка</li>
                <li>Дизайн</li>
                <li>Мобильные приложения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={20} />
                <Icon name="Facebook" size={20} />
                <Icon name="Twitter" size={20} />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
            © 2025 WEB STUDIO. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;