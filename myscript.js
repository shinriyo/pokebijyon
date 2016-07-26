// URLに飛ぶ
function moveUrl(url){
  chrome.tabs.executeScript(null,{
   "code" : "window.location.href = '" + url + "';"
  });
}

(function (loadedListener) {
　var doc, readyState;

　doc = document;
　readyState = doc.readyState;

　if (readyState === 'complete' || readyState === 'interactive') {
　　loadedListener();
　} else {
　　doc.addEventListener("DOMContentLoaded", loadedListener, false);
　}
})(function () {
  // デバッグ画面系.
  var dev_movedebug_btn = document.getElementById('dev-movedebug');
  if(dev_movedebug_btn != null) {
    // 処理を入れておく
    dev_movedebug_btn.addEventListener('click', function() {
      moveUrl("http://dev.dev4.gsdigimon.croozsocial.jp/debug/Login/Index");
    });
  }

  var confirm_movedebug_btn = document.getElementById('confirm-movedebug');
  if(confirm_movedebug_btn != null) {
    // 処理を入れておく
    confirm_movedebug_btn.addEventListener('click', function() {
      moveUrl("http://confirm.dev4.gsdigimon.croozsocial.jp/debug/Login/Index");
    });
  }

  var bne_movedebug_btn = document.getElementById('bne-movedebug');
  if(bne_movedebug_btn != null) {
    // 処理を入れておく
    bne_movedebug_btn.addEventListener('click', function() {
      moveUrl("http://bne.dev4.gsdigimon.croozsocial.jp/debug/Login/Index");
    });
  }
});


$(function () {
  // URLを判定
  var href_str = window.location.href;
  var res = href_str.match(/debug\/Login\/Index/gi);
  // 違ったらしない
  //if(res == null) return;

  // デバッグツールの人を選ぶ
  var changeUser = function(num){
    document.getElementsByName('user_id')[0].value = num;
  };

  // テキストボックス生成
  var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'TextBoxDiv');
  newTextBoxDiv.after().html('<label>選びたいユーザID</label>' +
	      '<input type="text" name="userId" id="mynum" value="">'); 
  newTextBoxDiv.appendTo(".center-align-text");

  // ボタン生成
  $('<button/>', {
    text: 'ID選ぶぜ',
    id: 'user_btn',
    click: function () {
      var num = document.getElementById('mynum');
      changeUser(num.value);
    }
  }).appendTo(".center-align-text");

  //var msg = $('$msg');
  var newOptions = {
      "Option 1":"option-1",
      "Option 2":"option-2"
  };

  var $el = $('filters');

  $el.html(' ');
  $.each(newOptions, function(key, value) {
      $el.append($("<option></option>")
      .attr("value", value).text(key));
  });

  var $drop = $('.dropdown-menu.inner');
  // 独自追加
  $drop.append($("<li data-original-index=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"background-image:url('//ugc.pokevision.com/images/pokemon/63.png');\" data-tokens=\"null\"><span class=\"text\">Abra</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li>"));

  // Redmine系
  // いいプルダウン.
  var pulldown = $('#issue_assigned_to_id');

  // デバッグツール
  if(pulldown != null) {
    // いいプルダウンを
    pulldown.className = "chosen-select";
    pulldown.chosen({ width: "300px", height: "30px"});

    // style="height: 20px;"
    // プルダウンが追加されると狭いので高さを変更
    //pulldown$('#issue_priority_id').css({'height':'20px'});
  }
});
