import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const categories = [
  'Новости',
  'Криптовалюты',
  'Бизнес',
  'Технологии',
  'Образование',
  'Развлечения',
  'Кино',
  'Музыка',
];

const Dashboard = () => {
  const { toast } = useToast();
  const [channelName, setChannelName] = useState('');
  const [channelLink, setChannelLink] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [channelCategory, setChannelCategory] = useState('');
  const [subscribers, setSubscribers] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!channelName || !channelLink || !channelDescription || !channelCategory) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Успешно!',
      description: 'Ваш канал отправлен на модерацию. Мы свяжемся с вами в течение 24 часов.',
    });

    setChannelName('');
    setChannelLink('');
    setChannelDescription('');
    setChannelCategory('');
    setSubscribers('');
  };

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
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
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
            <Link to="/">
              <Button variant="outline" size="sm">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
            Личный кабинет
          </h1>
          <p className="text-muted-foreground">Добавьте свой Telegram канал в каталог</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Активных каналов</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">На модерации</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Просмотров</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Plus" size={24} />
              <span>Добавить новый канал</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="channelName">
                    Название канала <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="channelName"
                    placeholder="Введите название канала"
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="channelLink">
                    Ссылка на канал <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="channelLink"
                    placeholder="https://t.me/your_channel"
                    value={channelLink}
                    onChange={(e) => setChannelLink(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="channelDescription">
                  Описание канала <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="channelDescription"
                  placeholder="Опишите, о чём ваш канал..."
                  value={channelDescription}
                  onChange={(e) => setChannelDescription(e.target.value)}
                  className="bg-background/50 min-h-[120px]"
                />
                <p className="text-xs text-muted-foreground">
                  Минимум 50 символов. Опишите тематику, аудиторию и уникальность канала.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="channelCategory">
                    Категория <span className="text-destructive">*</span>
                  </Label>
                  <Select value={channelCategory} onValueChange={setChannelCategory}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Выберите категорию" />
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

                <div className="space-y-2">
                  <Label htmlFor="subscribers">Количество подписчиков</Label>
                  <Input
                    id="subscribers"
                    type="number"
                    placeholder="Например: 5000"
                    value={subscribers}
                    onChange={(e) => setSubscribers(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">Что происходит после добавления?</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Канал отправляется на модерацию (до 24 часов)</li>
                        <li>• Проверяем соответствие категории и качество контента</li>
                        <li>• После одобрения канал появится в каталоге</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 gold-gradient text-black font-semibold hover:opacity-90"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить на модерацию
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Предпросмотр
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Icon name="Crown" size={20} className="text-primary" />
                <span>Премиум размещение</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Разместите канал в ТОП-блоке на главной странице и получите до 10x больше переходов
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Золотая рамка и свечение</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Позиция в ТОП-9</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Расширенная статистика</span>
                </div>
              </div>
              <Badge className="gold-gradient text-black">От 5000₽ / месяц</Badge>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Icon name="Megaphone" size={20} className="text-secondary" />
                <span>Реклама в каналах</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Разместите рекламу в популярных каналах каталога и привлеките целевую аудиторию
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Выбор по категориям</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Аналитика эффективности</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Помощь с текстами</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Узнать подробнее
              </Button>
            </CardContent>
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

export default Dashboard;