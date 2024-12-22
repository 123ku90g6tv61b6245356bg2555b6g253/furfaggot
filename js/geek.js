function title() {
    var titles = ["nghhh grave!!~", "private biolink", "@tuvh", "love grave"];
    var index = 0;

    function newtitle() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }

    setInterval(newtitle, 100);
  }

  window.onload = title;
