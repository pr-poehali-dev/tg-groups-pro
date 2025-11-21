import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categories = [
  'Все категории',
  'Новости',
  'Криптовалюты',
  'Бизнес',
  'Технологии',
  'Образование',
  'Развлечения',
  'Кино',
  'Музыка',
];

const subscriberRanges = [
  'Любое количество',
  'До 1K',
  '1K - 10K',
  '10K - 100K',
  '100K - 1M',
  'Более 1M',
];

const topChannels = [
  {
    id: 1,
    name: 'РИА Новости',
    description: 'Официальный канал информационного агентства РИА Новости',
    subscribers: 1200000,
    category: 'Новости',
    verified: true,
    icon: '📰',
  },
  {
    id: 2,
    name: 'ForkLog',
    description: 'Все о криптовалютах, блокчейне и децентрализованных финансах',
    subscribers: 450000,
    category: 'Криптовалюты',
    verified: true,
    icon: '₿',
  },
  {
    id: 3,
    name: 'Боевики | Фильмы HD',
    description: 'Лучшие боевики и фильмы в HD качестве каждый день',
    subscribers: 780000,
    category: 'Кино',
    verified: false,
    icon: '🎬',
  },
  {
    id: 4,
    name: 'Наука и Технологии',
    description: 'Открытия, инновации и технологические прорывы',
    subscribers: 320000,
    category: 'Технологии',
    verified: true,
    icon: '🔬',
  },
  {
    id: 5,
    name: 'Бизнес Завтрак',
    description: 'Ежедневные новости бизнеса и финансовых рынков',
    subscribers: 580000,
    category: 'Бизнес',
    verified: true,
    icon: '💼',
  },
  {
    id: 6,
    name: 'Образование Pro',
    description: 'Курсы, вебинары и материалы для саморазвития',
    subscribers: 210000,
    category: 'Образование',
    verified: false,
    icon: '📚',
  },
  {
    id: 7,
    name: 'Музыкальная Коллекция',
    description: 'Лучшие треки и новинки музыкального мира',
    subscribers: 650000,
    category: 'Музыка',
    verified: true,
    icon: '🎵',
  },
  {
    id: 8,
    name: 'Хакер',
    description: 'IT-безопасность, взломы и защита информации',
    subscribers: 890000,
    category: 'Технологии',
    verified: true,
    icon: '🛡️',
  },
  {
    id: 9,
    name: 'Развлекательный портал',
    description: 'Мемы, юмор и развлекательный контент на каждый день',
    subscribers: 1500000,
    category: 'Развлечения',
    verified: false,
    icon: '😂',
  },
];

const recentChannels = [
  {
    id: 10,
    name: 'Спортивные новости',
    description: 'Последние новости из мира спорта',
    subscribers: 125000,
    category: 'Новости',
    verified: false,
    icon: '⚽',
  },
  {
    id: 11,
    name: 'Кулинария для всех',
    description: 'Рецепты и кулинарные советы',
    subscribers: 98000,
    category: 'Развлечения',
    verified: false,
    icon: '🍳',
  },
  {
    id: 12,
    name: 'Стартапы России',
    description: 'Новости стартапов и инвестиций',
    subscribers: 67000,
    category: 'Бизнес',
    verified: true,
    icon: '🚀',
  },
];

const formatSubscribers = (count: number) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [selectedRange, setSelectedRange] = useState('Любое количество');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020817]">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                  <Icon name="Send" size={24} className="text-black" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                  TGGroups Pro
                </span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Главная
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Категории
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  ТОП каналов
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm" className="gold-gradient text-black font-semibold hover:opacity-90">
                <Icon name="Plus" size={16} className="mr-1" />
                Добавить канал
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
              ТОП КАНАЛЫ
            </h1>
            <p className="text-muted-foreground">Премиум размещение для лучших telegram каналов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topChannels.map((channel, index) => (
              <Card
                key={channel.id}
                className={`hover-lift cursor-pointer ${
                  index < 3 ? 'border-2 border-primary premium-glow' : 'border-border'
                } bg-card/80 backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl flex-shrink-0">
                      {channel.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-foreground truncate">{channel.name}</h3>
                        {channel.verified && (
                          <Icon name="BadgeCheck" size={16} className="text-secondary flex-shrink-0" />
                        )}
                        {index < 3 && (
                          <Badge className="gold-gradient text-black text-xs">TOP {index + 1}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {channel.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="Users" size={14} />
                            <span>{formatSubscribers(channel.subscribers)}</span>
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {channel.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск каналов по названию или описанию..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 bg-background/50"
                  />
                </div>
                <Button className="gold-gradient text-black font-semibold hover:opacity-90 h-12 px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Искать
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Подписчики</label>
                  <Select value={selectedRange} onValueChange={setSelectedRange}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subscriberRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                    Все фильтры
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Недавно добавленные каналы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentChannels.map((channel) => (
              <Card
                key={channel.id}
                className="hover-lift cursor-pointer bg-card/80 backdrop-blur-sm border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-3xl flex-shrink-0">
                      {channel.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-foreground truncate">{channel.name}</h3>
                        {channel.verified && (
                          <Icon name="BadgeCheck" size={16} className="text-secondary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {channel.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="Users" size={14} />
                            <span>{formatSubscribers(channel.subscribers)}</span>
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {channel.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                  <Icon name="Send" size={18} className="text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                  TGGroups Pro
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиум каталог Telegram каналов с умным поиском и монетизацией
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Категории
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    ТОП каналов
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для владельцев</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Добавить канал
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Личный кабинет
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О проекте
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 TGGroups Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;