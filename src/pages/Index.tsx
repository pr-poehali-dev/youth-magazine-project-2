import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-hope to-support rounded-lg">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl text-text-gray">Gorobzor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-open-sans text-text-gray hover:text-hope transition-colors">Главная</a>
              <a href="/article" className="font-open-sans text-text-gray hover:text-hope transition-colors">О проекте</a>
              <a href="#contacts" className="font-open-sans text-text-gray hover:text-hope transition-colors">Контакты</a>
              <Button className="bg-hope hover:bg-hope/90 text-white">Участвовать</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-hope/10 via-support/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-support/10 text-support border-support/20 px-4 py-1.5">
              Республика Башкортостан
            </Badge>
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-text-gray mb-6 leading-tight">
              Голоса <span className="text-hope">Надежды</span>
            </h1>
            <p className="font-open-sans text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Gorobzor — журнал, созданный участниками реабилитационной программы. 
              Истории выздоровления, творчество и поддержка для тех, кто ищет свой путь к здоровой жизни.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur border animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl font-montserrat font-bold text-hope mb-2">1000+</div>
                <div className="font-open-sans text-text-gray">участников ежегодно</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur border animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-montserrat font-bold text-support mb-2">90%</div>
                <div className="font-open-sans text-text-gray">поддержали создание журнала</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur border animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-montserrat font-bold text-attention mb-2">100%</div>
                <div className="font-open-sans text-text-gray">бесплатное распространение</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hope hover:bg-hope/90 text-white px-8 py-3">
                <Icon name="Heart" size={20} className="mr-2" />
                Читать истории
              </Button>
              <Button size="lg" variant="outline" className="border-support text-support hover:bg-support/10 px-8 py-3">
                <Icon name="Users" size={20} className="mr-2" />
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section id="article" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-hope/10 text-hope border-hope/20">О проекте</Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-text-gray mb-4">
              Краткая аннотация проекта
            </h2>
          </div>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/50">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-support/20 to-hope/20 rounded-full">
                  <Icon name="FileText" size={24} className="text-support" />
                </div>
                <CardTitle className="font-montserrat text-2xl text-text-gray">
                  Инициатива участников реабилитации
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="font-open-sans text-slate-700 leading-relaxed space-y-6">
                <p>
                  В Республике Башкортостан в Государственном бюджетном учреждении Республиканский центр 
                  психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят 
                  реабилитацию более <strong className="text-hope">1000 детей, подростков и молодежи</strong>, 
                  употребляющих наркотические вещества.
                </p>

                <p>
                  Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших 
                  игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения 
                  периода реабилитации. Излюбленным мероприятием ребят стали <strong className="text-support">литературные вечера</strong>, 
                  где каждый может рассказать стих или поделиться своим рассказом, или даже статьей.
                </p>

                <div className="bg-gradient-to-r from-hope/5 to-support/5 p-6 rounded-xl border-l-4 border-hope">
                  <p className="font-semibold text-hope mb-2">Идея создания журнала</p>
                  <p>
                    Во время одного из мероприятий было выдвинуто предложение со стороны реабилитантов о создании 
                    молодежного журнала, где они будут сами авторами, писателями и редакторами. Будут писать статьи, 
                    а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в Молодежных центрах 
                    и учреждениях республики Башкортостан.
                  </p>
                </div>

                <p>
                  Основные темы, которые будут подниматься, это <strong className="text-support">здоровый образ жизни</strong>, 
                  добрые дела, а также жизненные истории, лучшие стихи и рассказы участников проекта.
                </p>

                <div className="bg-gradient-to-r from-support/10 to-hope/10 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Icon name="BarChart3" size={20} className="text-support mr-2" />
                    <span className="font-semibold text-support">Результаты опроса</span>
                  </div>
                  <p>
                    По итогу был проведен анонимный опрос, где <strong className="text-hope">90% опрошенных</strong> ответили 
                    положительно о создании журнала и готовы помогать в создании каждого тиража.
                  </p>
                </div>

                <Separator className="my-8" />

                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl font-semibold text-text-gray flex items-center">
                    <Icon name="AlertTriangle" size={20} className="text-attention mr-2" />
                    Актуальность проблемы
                  </h3>
                  <p>
                    Дети, подростки и молодежь зачастую рано взрослеют и попадают не в самые лучшие компании и 
                    сталкиваются со страшными заболеваниями и проблемами. Наркомания – заболевание, ставшее серьезной 
                    проблемой для человечества.
                  </p>
                  
                  <div className="bg-attention/5 border border-attention/20 p-4 rounded-lg">
                    <p className="text-sm text-attention">
                      <strong>Статистика ООН:</strong> За последние 10 лет количество наркозависимых в России возросло в 10 раз.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl font-semibold text-text-gray flex items-center">
                    <Icon name="Target" size={20} className="text-hope mr-2" />
                    Возрастные группы риска
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-montserrat font-bold text-hope mb-1">47.2%</div>
                      <div className="text-sm text-slate-600">впервые попробовали в 16-18 лет</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-montserrat font-bold text-support mb-1">25.5%</div>
                      <div className="text-sm text-slate-600">в возрасте 19-25 лет</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-support/5 to-hope/5 p-6 rounded-xl">
                  <h3 className="font-montserrat text-xl font-semibold text-support mb-3 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Эффективность арт-терапии
                  </h3>
                  <p>
                    Есть данные из практики, что реализация адаптационной программы с наличием арт-компонента 
                    повышает её эффективность более чем в половину. У зависимых отмечается повышение реабилитационного 
                    потенциала, достигается высокая степень личностной, социальной и трудовой адаптации.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-hope to-support p-6 rounded-xl text-white">
                  <h3 className="font-montserrat text-xl font-semibold mb-3 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Комплексная профилактика
                  </h3>
                  <p>
                    Реализация данного проекта рассматривается как комплексная многокомпонентная антинаркотическая 
                    работа с использованием методов волонтёрства. Проект решает сразу задачи первичной, вторичной 
                    и третичной профилактики наркомании.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-support/10 text-support border-support/20">Контакты</Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-text-gray mb-4">
              Присоединяйся к проекту
            </h2>
            <p className="font-open-sans text-xl text-slate-600 max-w-3xl mx-auto">
              Стань частью команды авторов и редакторов молодежного журнала
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-text-gray flex items-center">
                  <Icon name="Users" size={24} className="text-hope mr-3" />
                  Как участвовать
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-hope/10 rounded-full">
                    <Icon name="Edit3" size={20} className="text-hope" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-text-gray mb-1">Стать автором</h3>
                    <p className="font-open-sans text-slate-600 text-sm">
                      Пишите статьи о здоровом образе жизни, делитесь личными историями и творчеством
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-support/10 rounded-full">
                    <Icon name="CheckCircle" size={20} className="text-support" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-text-gray mb-1">Редактирование</h3>
                    <p className="font-open-sans text-slate-600 text-sm">
                      Помогайте в подготовке материалов к публикации и оформлении журнала
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-attention/10 rounded-full">
                    <Icon name="Share2" size={20} className="text-attention" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-text-gray mb-1">Распространение</h3>
                    <p className="font-open-sans text-slate-600 text-sm">
                      Участвуйте в бесплатном распространении журнала в молодежных центрах
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-hope hover:bg-hope/90 text-white mt-6">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с координаторами
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-hope/5 to-support/5">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-text-gray flex items-center">
                  <Icon name="MapPin" size={24} className="text-support mr-3" />
                  Центр реабилитации
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-montserrat font-semibold text-text-gray mb-2">Адрес</h3>
                  <p className="font-open-sans text-slate-600">
                    Государственное бюджетное учреждение<br />
                    Республиканский центр психолого-педагогической<br />
                    реабилитации и коррекции несовершеннолетних<br />
                    Республика Башкортостан
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-support" />
                    <span className="font-open-sans text-slate-600">Работаем круглосуточно</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-hope" />
                    <span className="font-open-sans text-slate-600">Горячая линия поддержки</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-attention" />
                    <span className="font-open-sans text-slate-600">Обратная связь</span>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="font-open-sans text-sm text-slate-600 italic">
                    "Каждая история важна. Каждый голос имеет значение. 
                    Вместе мы создаём пространство надежды и поддержки."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-gray text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-hope to-support rounded-lg">
                  <Icon name="BookOpen" size={20} className="text-white" />
                </div>
                <span className="font-montserrat font-bold text-lg">Gorobzor</span>
              </div>
              <p className="font-open-sans text-slate-300 text-sm">
                Голоса надежды из Республики Башкортостан
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-3">Темы журнала</h3>
              <ul className="space-y-2 font-open-sans text-sm text-slate-300">
                <li>• Здоровый образ жизни</li>
                <li>• Личные истории выздоровления</li>
                <li>• Творчество и арт-терапия</li>
                <li>• Добровольческие инициативы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-3">Поддержка</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-support" />
                  <span className="font-open-sans text-sm text-slate-300">Анонимность гарантирована</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-hope" />
                  <span className="font-open-sans text-sm text-slate-300">Профессиональная помощь</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-600" />
          <div className="text-center">
            <p className="font-open-sans text-sm text-slate-400">
              © 2024 Gorobzor. Проект реализован при поддержке 
              Республиканского центра психолого-педагогической реабилитации и коррекции несовершеннолетних РБ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}