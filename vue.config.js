module.exports = {
  publicPath:'/',

  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/main.js',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      filename: 'index.html',
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'JF6.ru — Доставка товаров из Китая',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // когда используется строковый формат точки входа, то
    // шаблон будет определяться как `public/subpage.html`,
    // а если таковой не будет найден, то `public/index.html`.
    // Выходное имя файла будет определено как `subpage.html`.
    calc: {
      // точка входа для страницы
      entry: 'src/calc/main.js',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      title: 'Тарифы — JF6.ru'
    },
    contact: {
      // точка входа для страницы
      entry: 'src/contact/main.js',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      title: 'Контакты — JF6.ru'
    }
  }
}
