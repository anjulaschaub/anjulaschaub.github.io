$(document).ready(function(){



  //D Panel - Toggle a Specic Panel From Event

  $("#d_panel").panel({
  handle:'#d_panel > .panel_tab',
  content:'#d_panel > .panel_content',
  opened:false,
  direction : "both",
      toggleEvent : 'click',
      toggleSelector : '#d_toggle'
});


});
