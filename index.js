'use strict';

const newspaper = {
  title: 'My super news',
  articles: [
    {
      author: 'Jhon Doe',
      header: 'Article1',
      body: 'lorem ipsum',

    },
    {
      author: 'Alex Doe',
      header: 'Article2',
      body: 'lorem yuefe de ',

    },
    {
      author: 'Jhon Smith',
      header: 'Article3',
      body: 'lorem frf 4fo34 wn gr',

    },
    {
      author: 'Alan Doe',
      header: 'Article4',
      body: 'lorem inrf rfiuef ',

    },
    {
      author: 'Mihael Doe',
      header: 'Article5',
      body: 'lorem dolor sit amet',

    },
  ],
  showArticles(){
    this.articles.forEach((currentArticle, index) => {
      console.log(this.title);
      console.log(`${index} : ${currentArticle.author} - ${currentArticle.header}` );
    })
  } 
}