const navigation = () => {
  function lineHover() {
    $('.nav').each(function() {
      var activeItem = $(this).find('.active');
      if (activeItem.length === 0) {
        return;
      }
      var line = $('<div class="yellowLine"></div>');
      $(this).append(line);

      var setLineCss = function(node) {
        line.css({
          width: node.css('width'),
          left: node[0].offsetLeft
        });
      };
      setLineCss(activeItem);
      $(this).on('mouseenter', 'li', function() {
        setLineCss($(this));
      });
      $(this).on('mouseleave', function() {
        setLineCss(activeItem);
      });
    });
  }


  function parsValueOnLoad() {
    const idWrapper = $('.inner').attr('id');
    const idLink = $('.nav__link[id="'+idWrapper+'"]');
    idLink.closest('.nav__item').addClass('active');
    lineHover();
  }
  parsValueOnLoad();
}
export default navigation;
