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

// MOUSEENTER - primeira etapa do hover (colocar mouse acima do item)

// $('a').on('mouseenter', function(e) {
//     e.preventDefault();
//     $(this).text('Mouse Hover');
// });

// MOUSELEAVE - segunda etapa do hover (remover mouse do item)

// $('a').on('mouseleave', function(e) {
//     e.preventDefault();
//     $(this).text('Mouse Leave');
// });

// SCROLL - ocorre no documento do site

// $(document).on('scroll', function() {
//     $('a').text($(document).scrollTop());
// });

// RESIZE

// $(window).on('resize', function() {
//     $('a').text($('body').width());
// });