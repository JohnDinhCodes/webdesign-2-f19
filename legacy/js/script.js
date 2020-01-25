
  AOS.init();



$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});


var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 




$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});




$(document).ready(function() {
  $('.boxgrid.captionfull').hover(function() {
    $(".cover", this).stop().animate({
      top: '140px'
    }, {
      queue: false,
      duration: 170
    });
  }, function () {
    $(".cover", this).stop().animate ({
      top: '260px'
    }, {
      queue: false,
      duration: 170
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
    new GreenAudioPlayer('.player',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player2',{
        stopOthersOnPlay: true});    
    new GreenAudioPlayer('.player3',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player4',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player5',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player6',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player7',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player8',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player9',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player10',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player11',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player12',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player13',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player14',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player15',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player16',{
        stopOthersOnPlay: true});
    new GreenAudioPlayer('.player17',{
        stopOthersOnPlay: true});
});


