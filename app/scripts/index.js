import { markupMenu } from './markup-menu';
markupMenu(window.document);
import navigation from "./navigation";

$(() => {
  navigation();
  $('#section-1').zellionTabs();
  $('#section-2').zellionTabs({
    defaultTab: 4
  });
  $('#section-3').zellionTabs({
    autoplay: true
  });
});
