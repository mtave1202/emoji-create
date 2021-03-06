// ==UserScript==
// @name         のすりばいばい
// @namespace    https://mtave1202.github.io/emoji-create/byebye.user.js
// @version      0.1.3
// @description  ばいばいしようね
// @author       You
// @include     /^https?://tw7\.t-walker\.jp/scenario/show/
// @icon         https://www.google.com/s2/favicons?domain=t-walker.jp
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var id = "show-baka";
    var $show = $('<input type="checkbox">').attr("id", id);
    var $label = $('<label>').append($show).append("バカも表示");
    $(document).on("change", "#"+id, function() {
        $('._baka:not(.hidden)').toggle($(this).prop("checked"));
    });
    const hiddens = {
        "g01118": "ノスリ",
        "g00878": "ショウ"
    };
    let iv = setInterval(noview, 1000);
    function noview() {
        if ($('#' + id).length > 0) return;
        $('.playing-filter-status').parent().append($label);
        $('.playing-view').each(function() {
          let $view = $(this);
          let $parant = $view.parents(".playing-view");
          $.each(hiddens, function(_id, _name) {
              if ($view.find('a[href="https://tw7.t-walker.jp/character/status/'+_id+'"]').length) {
                  $view.addClass("_baka").hide();
              }
          });
      });
      $('img[src$="g01118_ic.png"]').attr("src", "https://cdn.tw7.t-walker.jp/html/world/img/manual/minai_b.png");
      $('.playing-view._baka,.txt.jumptarget,#counsel').each(function() {
          $(this)[0].innerHTML = $(this)[0].innerHTML.split('ノスリ・アスターゼイン').join('【放送禁止用語】');
          $(this)[0].innerHTML = $(this)[0].innerHTML.split('ノスリ').join('【放送禁止用語】');
      });
      clearInterval(iv);
    }
})();
