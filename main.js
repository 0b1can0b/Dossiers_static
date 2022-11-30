$('.button').popup({
  on: 'click',
  position: 'bottom right',
  inline: false,
});

$('.menu .item').tab();

$('.contacts-popup-tabs .item').tab({
  context: $('.contacts-popup-tabs'),
});