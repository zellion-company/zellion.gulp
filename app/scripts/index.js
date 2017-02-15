import { markupMenu } from './markup-menu';
markupMenu(window.document);
import navigation from "./navigation";

$(() => {
  navigation();
  $('#section-1').zellionTabs();
  $('#section-2').zellionTabs({
    animation: 'fade'
  });
  $('#section-3').zellionTabs({
    animation: 'slide',
    direction: 'left'
  });
  $('#section-4').zellionTabs({
    animation: 'slide',
    direction: 'bottom'
  });
  $('#section-5').zellionTabs({
    defaultTab: 4
  });
  $('#section-6').zellionTabs({
    autoplay: true
  });
});
