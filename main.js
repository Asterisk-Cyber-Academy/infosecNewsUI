const populateNews = (news) => {
  $('.spinner-border').remove()
  news.forEach( info => {
    console.log(info);
    title = info.title;
    link = info.link;
    date = info.date_added;
    if ( info.hasOwnProperty('desc') ) {
      desc = info.desc;
    } else {
      desc = ''
    }
    _('.container', 'div', {'class': `card text-center card-${info.id}`, 'style': 'width: 69rem; border-radius: 20px;'}, '');
    if ( info.image ) {
      _(`.card-${info.id}`, 'div', {'class': `row g-0 card-row-${info.id}`}, '');
      _(`.card-row-${info.id}`, 'div', {'class': `col-md-4 card-col-${info.id}`}, '');
      _(`.card-col-${info.id}`, 'div', {'class': `d-flex align-items-center card-img-alignment-${info.id}`, 'style': 'height: 100%;'}, '');
      _(`.card-img-alignment-${info.id}`, 'img', {'class': `img-fluid rounded-start img-${info.id}`, 'src': info.image, 'style': 'border-radius: 10px; margin: 20px;'}, '');
      _(`.card-row-${info.id}`, 'div', {'class': `col-md-8 card-col-${info.id}-2`}, '');
      _(`.card-col-${info.id}-2`, 'div', {'class': 'card-body'}, '');
      _(`.card-col-${info.id}-2`, 'h5', {'class': 'card-title'}, title);
      _(`.card-col-${info.id}-2`, 'h6', {'class': 'card-subtitle mb-2 text-muted fw-light fst-italic'}, date);
      _(`.card-col-${info.id}-2`, 'hr', {}, '');
      _(`.card-col-${info.id}-2`, 'p', {'class': 'card-text', 'style': 'margin: 20px;'}, desc);
      _(`.card-col-${info.id}-2`, 'a', {'class': 'card-link', 'href': link, 'target': '_blank'}, "Source");
      _(`.card-col-${info.id}-2`, 'br', {}, '');
      _('.container', 'br', {}, '');
    } else {
      _(`.card-${info.id}`, 'div', {'class': 'card-body'}, '');
      _(`.card-${info.id}`, 'h5', {'class': 'card-title'}, title);
      // _(`.card-${info.id}`, 'h6', {'class': 'card-subtitle mb-2 text-muted'}, date);
      _(`.card-${info.id}`, 'h6', {'class': 'card-subtitle mb-2 text-muted fw-light fst-italic'}, date);
      _(`.card-${info.id}`, 'hr', {}, '');
      _(`.card-${info.id}`, 'p', {'class': 'card-text', 'style': 'margin: 20px;'}, desc);
      _(`.card-${info.id}`, 'a', {'class': 'card-link', 'href': link, 'target': '_blank'}, "Source");
      _(`.card-${info.id}`, 'br', {}, '');
      _('.container', 'br', {}, '');
    }
  })
}


const fetchNews = async () => {
  _('.container', 'div', {'class': `spinner-div d-flex align-items-center justify-content-center`}, '');
  _('.spinner-div', 'div', {'class': `spinner-border text-light`, 'role': 'status', 'style': 'width: 5rem; height: 5rem;'}, '');
  _('.spinner-border', 'span', {'class': `visually-hidden`}, 'Loading..');
  let resp = await fetch('http://127.0.0.1:44444/news');
  let news = await resp.json();
  if ( news['news'].length ) {
    populateNews(news['news']);
  }
}


$$( () => {
  fetchNews();
})
