// EVENTOS

// $('a').click(function(){
//     $('.abrir-modal').text('Clicou');
// });

// $('a').on('click', function() {
//     $('a').text('Clicou');
// });

// THIS = referência do objeto do evento

// $('a').on('click', function() {
//     $(this).text('Clicou'); // Seleciona exatamente o 'a' que foi clicado
// });

// $('a').on('click', function() {
//     var current = $(this); // Armazena numa variável
//     current.text('Clicou'); // Seleciona exatamente o 'a' que foi clicado
// });

// EVENT OBJECT

// $('a').on('click', function(e) {
//     e.preventDefault(); // Previne o funcionamento padrão de eventos
//     $(this).text('Clicou');
// });

// MOUSEENTER - passar mouse acima do item

// $('a').on('mouseenter', function(e) {
//     e.preventDefault();
//     $(this).text('Mouse Hover');
// });

// MOUSELEAVE - remover mouse do item

// $('a').on('mouseleave', function(e) {
//     e.preventDefault();
//     $(this).text('Mouse Leave');
// });

// SCROLL - acontece no documento do site

// $(document).on('scroll', function() {
//     $('a').text($(document).scrollTop());
// });

// RESIZE

// $(window).on('resize', function() {
//     $('a').text($('body').width());
// });

// CLASSES

// .addClass() - adiciona no elemento uma ou mais classes

// $('.abrir-modal').click(function() {
//     $('.modal').addClass('active');
// });

// .toggleClass() - adiciona no elemento uma classe caso ela não exista ou remove caso ela exista

// $('.abrir-modal').click(function() {
//     $('.modal').toggleClass('active');
// });

// .hasClass() - verifica se a classe existe e retorna true ou false

// $('.abrir-modal').click(function() {
//     $('.modal').toggleClass('active');

//     var condicao = $('.modal').hasClass('active');

//     condicao ? $(this).text('Fechar modal') : $(this).text('Abrir modal');
// });

// MÉTODOS GERAIS

// .attr() - pega ou define o valor de um atributo

// var href = $('a').attr('href');
// $('img').attr('alt', 'Imagem'); // Desta forma atribui o valor 'Imagem' para o alt

// .removeAttr() - remove atributo

// $('a').removeAttr('href');

// .val() - pega ou define o valor de um elemento. (input, select e textarea)

// $('#button-enviar').click(function() {
//     var nome = $('.input-none').val();
//     $('.btn').text(nome);
// });

// .remove() - remove elemento do DOM

// $('input').remove();

// $('.btn').click(function() {
//     $('input').remove();
// });

// .empty() - remove filhos do elemento do DOM

// $('a').click(function() {
//     $('.modal').empty();
// });

// ESTILOS

// .css() - pega ou define o valor de uma propriedade CSS

// var psize = $('p').css('font-size');
// console.log(psize);

// var psize = $('p').css('font-size', '16px'); // Para definir um tamanho de fonte de 16px

// É possível definir mais de uma propriedade por vez, porém o estilo é colocado inline no HTML

// $('.modal').css({
//     'background-color': 'blue',
//     'width': '200px'
// });

// .height(), .innerHeight() e . outerHeight() - pega ou define o valor de height (válido para o width)

// var height = $('.modal').height(); // Altura apenas do elemento
// console.log(height);

// var height = $('.modal').innerHeight(); // Altura do elemento + padding
// console.log(height);

// var height = $('.modal').outerHeight(); // Altura do elemento + padding + bordas
// console.log(height);

// var height = $('.modal').outerHeight(true); // Altura do elemento + padding + bordas + margin
// console.log(height);

// .offset() - retorna um objeto com as distâncias de top e left do elemento em relação ao documento

// var offset = $('.modal').offset();
// console.log(offset);

// var offset = $('.modal').offset().top; // Utiliza-se dot notation para acessar um item do objeto
// console.log(offset);

// É possível definir as coordenados (É diferente de definir via CSS)

// $('.modal').offset({
//     top: 200,
//     left: 300
// });

// .scrollTop() - pega o topo do elemento em relação ao seu scroll

// $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop();
//     console.log(scrollTop);
// });

// Também é possível definir um valor

// $('.btn').click(function(e) {
//     e.preventDefault();
//     $(window).scrollTop(0);
// });