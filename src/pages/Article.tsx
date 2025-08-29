import Icon from '@/components/ui/icon';

export default function Article() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-hope to-support rounded-lg">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl text-text-gray">Gorobzor</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="font-open-sans text-text-gray hover:text-hope transition-colors flex items-center space-x-2">
                <Icon name="ArrowLeft" size={20} />
                <span>На главную</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <header className="mb-12 text-center border-b border-slate-200 pb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-hope to-support text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="FileText" size={16} />
              <span>Статья проекта</span>
            </div>
            <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-text-gray mb-4">
              Краткая аннотация проекта
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-500 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Республика Башкортостан</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Реабилитационный центр</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-hope/10 to-support/10 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-hope to-support rounded-full">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="font-montserrat text-xl font-semibold text-text-gray mb-2">
                    О центре реабилитации
                  </h2>
                  <p className="font-open-sans text-slate-700 leading-relaxed">
                    В Республике Башкортостан в Государственном бюджетном учреждение Республиканский центр 
                    психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят 
                    реабилитацию более <span className="font-semibold text-hope">1000 детей, подростков и молодежи</span>, 
                    употребляющих наркотические вещества.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-open-sans text-slate-700 leading-relaxed">
                Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от 
                лучших игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации 
                и облегчения периода реабилитации.
              </p>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-hope to-support rounded-full">
                    <Icon name="BookOpen" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-text-gray mb-2">
                      Рождение идеи журнала
                    </h3>
                    <p className="font-open-sans text-slate-700 leading-relaxed">
                      Излюбленным мероприятием ребят стали литературные вечера, где каждый может рассказать 
                      стих или поделиться своим рассказом, или даже статьей. Во время одного из мероприятий 
                      было выдвинуто предложение со стороны реабилитантов, о создании молодежного журнала, 
                      где они будут сами авторами, писателями и редакторами.
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-open-sans text-slate-700 leading-relaxed">
                Будут писать статьи, а по окончанию месяца журнал будет печататься и бесплатно тиражироваться 
                в Молодежных центрах и учреждениях республики Башкортостан. Основные темы, которые будут 
                подниматься, это здоровый образ жизни, добрые дела, а также жизненные истории, лучшие стихи 
                и рассказы участников проекта.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-green-500 rounded-full">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                  <h3 className="font-montserrat text-lg font-semibold text-green-800">
                    Результат опроса
                  </h3>
                </div>
                <p className="font-open-sans text-green-700 leading-relaxed">
                  По итогу был проведен анонимный опрос, где <span className="font-bold">90% опрошенных</span> 
                  ответили положительно о создании журнала и готовы помогать в создании каждого тиража.
                </p>
              </div>

              <div className="border-l-4 border-hope pl-6">
                <h3 className="font-montserrat text-xl font-semibold text-text-gray mb-4">
                  Актуальность проблемы
                </h3>
                <p className="font-open-sans text-slate-700 leading-relaxed mb-4">
                  Дети, подростки и молодежь зачастую рано взрослеют и попадают не в самые лучшие компании 
                  и сталкиваются со страшными заболеваниями и проблемами. Наркомания – заболевание, ставшее 
                  серьезной проблемой для человечества.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="font-open-sans text-red-800 text-sm leading-relaxed">
                    <span className="font-semibold">Статистика ООН:</span> За последние 10 лет количество 
                    наркозависимых в России возросло в 10 раз, и проблема наркомании уже много лет является 
                    актуальной, к сожалению, и для Республики Башкортостан.
                  </p>
                </div>

                <p className="font-open-sans text-slate-700 leading-relaxed mb-4">
                  В докладе по наркоситуации по РБ Утвержденным протоколом заседания антинаркотической 
                  комиссии Республики Башкортостан от 22.03.2018 No 48 было проведено социологическое 
                  исследование, Институтом повышения квалификации профсоюзных кадров Республики Башкортостан.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-hope">47,2%</div>
                    <div className="text-sm text-slate-600">впервые попробовали наркотики в возрасте 16-18 лет</div>
                  </div>
                  <div className="bg-slate-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-support">25,5%</div>
                    <div className="text-sm text-slate-600">в возрасте 19-25 лет</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500 rounded-full">
                    <Icon name="Target" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-blue-800 mb-2">
                      Эффективность арт-терапии
                    </h3>
                    <p className="font-open-sans text-blue-700 leading-relaxed">
                      Есть данные из практики, что реализация адаптационной программы с наличием арт-компонента 
                      повышает её эффективность более чем в половину. У зависимых отмечается повышение 
                      реабилитационного потенциала, достигается высокая степень личностной, социальной и 
                      трудовой адаптации за счёт участия и заинтересованности в итоге коллективного творчества 
                      и совместных мероприятиях.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-hope/10 to-support/10 rounded-xl p-6">
                <h3 className="font-montserrat text-xl font-semibold text-text-gray mb-4">
                  Комплексный подход к решению проблемы
                </h3>
                <p className="font-open-sans text-slate-700 leading-relaxed">
                  Таким образом, реализацию данного проекта с учётом участия в разных мероприятиях разработчики 
                  рассматривают как комплексную многокомпонентную антинаркотическую работу с использованием 
                  методов волонтёрства. <span className="font-semibold text-hope">Данный Проект решает сразу 
                  задачи первичной, вторичной и третичной профилактики наркомании.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center">
            <div className="flex items-center justify-center space-x-4 text-slate-500">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span className="text-sm">2024</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Республика Башкортостан</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}