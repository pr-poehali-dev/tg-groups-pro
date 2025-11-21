import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categoryData = [
  {
    name: 'Новости',
    icon: '📰',
    count: 1247,
    color: 'from-red-500/20 to-orange-500/20',
    description: 'Актуальные новости России и мира',
  },
  {
    name: 'Криптовалюты',
    icon: '₿',
    count: 892,
    color: 'from-yellow-500/20 to-amber-500/20',
    description: 'Крипторынок, блокчейн, DeFi',
  },
  {
    name: 'Бизнес',
    icon: '💼',
    count: 654,
    color: 'from-blue-500/20 to-cyan-500/20',
    description: 'Бизнес-новости и инвестиции',
  },
  {
    name: 'Технологии',
    icon: '🔬',
    count: 1089,
    color: 'from-purple-500/20 to-pink-500/20',
    description: 'IT, гаджеты, инновации',
  },
  {
    name: 'Образование',
    icon: '📚',
    count: 423,
    color: 'from-green-500/20 to-emerald-500/20',
    description: 'Курсы, обучение, саморазвитие',
  },
  {
    name: 'Развлечения',
    icon: '😂',
    count: 2341,
    color: 'from-pink-500/20 to-rose-500/20',
    description: 'Мемы, юмор, развлекательный контент',
  },
  {
    name: 'Кино',
    icon: '🎬',
    count: 567,
    color: 'from-indigo-500/20 to-violet-500/20',
    description: 'Фильмы, сериалы, кинообзоры',
  },
  {
    name: 'Музыка',
    icon: '🎵',
    count: 734,
    color: 'from-cyan-500/20 to-teal-500/20',
    description: 'Музыка, треки, новинки',
  },
];

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020817]">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                  <Icon name="Send" size={24} className="text-black" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                  TGGroups Pro
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                  Категории
                </Link>
                <a href="/#top" className="text-muted-foreground hover:text-primary transition-colors">
                  ТОП каналов
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  Личный кабинет
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="sm" className="gold-gradient text-black font-semibold hover:opacity-90">
                  <Icon name="Plus" size={16} className="mr-1" />
                  Добавить канал
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
            Категории каналов
          </h1>
          <p className="text-muted-foreground text-lg">
            Выберите категорию для поиска интересных Telegram каналов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoryData.map((category, index) => (
            <Card
              key={category.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="hover-lift cursor-pointer bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
            >
              <CardContent className="p-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-5xl mb-4 mx-auto transition-transform ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4 min-h-[40px]">
                  {category.description}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Badge variant="outline" className="text-sm">
                    <Icon name="Users" size={14} className="mr-1" />
                    {category.count} каналов
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 max-w-2xl mx-auto">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-3">Не нашли нужную категорию?</h2>
            <p className="text-muted-foreground mb-6">
              Воспользуйтесь поиском на главной странице для более точных результатов
            </p>
            <Link to="/">
              <Button className="gold-gradient text-black font-semibold hover:opacity-90" size="lg">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Вернуться на главную
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 TGGroups Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Categories;