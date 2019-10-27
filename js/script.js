$(document).ready(function() {
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  $(".section").each(function() {
    //CARDS Scene
    var scene1 = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      // duration: "90%",
      triggerHook: ".9",
      reverse: false
    })

      .setClassToggle(this, "fade-in")
      // .addIndicators({
      //   name: "card tigger",
      //   colorTrigger: "red",
      //   indent: 0,
      //   colorStart: "red"
      // })
      .addTo(controller);
  });

  //HERO Scene
  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".heroScene",
    triggerHook: "1",
    reverse: false
  })

    .setClassToggle(".heroScene", "fade-in")
    // .addIndicators({
    //   name: "hero trigger",
    //   colorTrigger: "blue",
    //   colorStart: "blue"
    // })
    .addTo(controller);
});
