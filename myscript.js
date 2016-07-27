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
  // popup.html.
  var dev_movedebug_btn = document.getElementById('pokevision');
  if(dev_movedebug_btn != null) {
    // 処理を入れておく
    dev_movedebug_btn.addEventListener('click', function() {
      moveUrl("https://pokevision.com/");
    });
  }
});


$(function () {
  // URLを判定
  var href_str = window.location.href;
  var res = href_str.match(/pokevision.com/);
  // 違ったらしない
  if(res == null) return;

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

  var pokemon_arr = [
    "ケーシィ",
    "プテラ",
    "フーディン",
    "アーボック",
    "ウインディ",
    "フリーザー",
    "スピアー",
    "マダツボミ",
    "カメックス",
    "フシギダネ",
    "バタフリー",
    "キャタピー",
    "ラッキー",
    "リザードン",
    "ヒトカゲ",
    "リザード",
    "ピクシー",
    "ピッピ",
    "パルシェン",
    "カラカラ",
    "ジュゴン",
    "ディグダ",
    "メタモン",
    "ドードリオ",
    "ドードー",
    "ハクリュー",
    "カイリュー",
    "ミニリュウ",
    "スリープ",
    "ダグトリオ",
    "イーブイ",
    "アーボ",
    "エレブー",
    "マルマイン",
    "タマタマ",
    "ナッシー",
    "カモネギ",
    "オニドリル",
    "ブースター",
    "ゴース",
    "ゲンガー",
    "イシツブテ",
    "クサイハナ",
    "ゴルバット",
    "トサキント",
    "ゴルダック",
    "ゴローニャ",
    "ゴローン",
    "ベトベター",
    "ガーディ",
    "ギャラドス",
    "ゴースト",
    "エビワラー",
    "サワムラー",
    "タッツー",
    "スリーパー",
    "フシギソウ",
    "プリン",
    "サンダース",
    "ルージュラ",
    "カブト",
    "カブトプス",
    "ユンゲラー",
    "コクーン",
    "ガルーラ",
    "キングラー",
    "ドガース",
    "クラブ",
    "ラプラス",
    "ベロリンガ",
    "カイリキー",
    "ゴーリキー",
    "ワンリキー",
    "コイキング",
    "ブーバー",
    "コイル",
    "レアコイル",
    "マンキー",
    "ガラガラ",
    "ニャース",
    "トランセル",
    "ミュウ",
    "ミュウツー",
    "ファイヤー",
    "バリヤード",
    "ベトベトン",
    "ニドキング",
    "ニドクイン",
    "ニドラン♀",
    "ニドラン♂",
    "ニドリーナ",
    "ニドリーノ",
    "キュウコン",
    "ナゾノクサ",
    "オムナイト",
    "オムスター",
    "イワーク",
    "パラス",
    "パラセクト",
    "ペルシアン",
    "ピジョット",
    "ピジョン",
    "ポッポ",
    "ピカチュウ",
    "カイロス",
    "ニョロモ",
    "ニョロゾ",
    "ニョロボン",
    "ポニータ",
    "ポリゴン",
    "オコリザル",
    "コダック",
    "ライチュウ",
    "ギャロップ",
    "ラッタ",
    "コラッタ",
    "サイドン",
    "サイホーン",
    "サンド",
    "サンドパン",
    "ストライク",
    "シードラ",
    "アズマオウ",
    "パウワウ",
    "シェルダー",
    "ヤドラン",
    "ヤドン",
    "カビゴン",
    "オニスズメ",
    "ゼニガメ",
    "スターミー",
    "ヒトデマン",
    "モンジャラ",
    "ケンタロス",
    "メノクラゲ",
    "ドククラゲ",
    "シャワーズ",
    "モルフォン",
    "コンパン",
    "フシギバナ",
    "ウツボット",
    "ラフレシア",
    "ビリリダマ",
    "ロコン",
    "カメール",
    "ビードル",
    "ウツドン",
    "マタドガス",
    "プクリン",
    "サンダー",
    "ズバット",
  ];

  // プルダウン内
  var $el = $('.dropdown-menu.inner');

  var names = "";
  $.each($el.children(), function(index, value) {
    names += "\"" + $(value).find(".text").text() + "\",";
    // textクラスを書き換え
    $(value).find(".text").text(pokemon_arr[index]);
  });
  // console.log(names);
});
