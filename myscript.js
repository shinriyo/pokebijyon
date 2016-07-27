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

  // アフィリエイト
  var amazon = "<div>ポケモンGO ポケモンゴー 攻略 ゲット - WiLLBee CLIPON (黒) Pokemon Go スマホ ハンド バンド ホルダー リング - Xperia iPhone 6S 6 Plus<br /><a  href=\"http://www.amazon.co.jp/gp/product/B01IIGUB4M/ref=as_li_tf_il?ie=UTF8&camp=247&creative=1211&creativeASIN=B01IIGUB4M&linkCode=as2&tag=noctushinrsdi-22\"><img border=\"0\" src=\"http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01IIGUB4M&Format=_SL110_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=noctushinrsdi-22\" ></a><img src=\"http://ir-jp.amazon-adsystem.com/e/ir?t=noctushinrsdi-22&l=as2&o=9&a=B01IIGUB4M\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></div>";
  // 警告をそのまま書き換え
  $('.home-sidebar-warning').replaceWith(amazon);

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

  // 辞書
  var poke_dic= {};

  // プルダウン内
  var $el = $('.dropdown-menu.inner');

  // ツールのため
  //var names = "";
  $.each($el.children(), function(index, value) {
    // ツールのため
    // names += "\"" + $(value).find(".text").text() + "\",";
    var en_name = $(value).find(".text").text();
    var jp_name = pokemon_arr[index];
    // textクラスを書き換え
    $(value).find(".text").text(pokemon_arr[index]);
    // ついでに辞書作り
    poke_dic[en_name] = jp_name;
  });
  // console.log(names);

  var nm;
  var poke_en;
  var poke_jp;

  // マップの中
　var countup = function(){
    // tipの名前
    var tip = $('.home-map-tooltip');
    var tmp = tip.attr("data-original-title");

    // <strong>Pidgey</strong><small>Despawns in 09:40
    if (typeof tmp !== "undefined") {
      var match = tmp.match(/<strong>(.*)<\/strong>/);
      if (typeof match[1] != "undefined") {

        var tmp_jp = poke_dic[match[1]];
        if (typeof tmp_jp != "undefined") {
          // 日本名ポケモン名
          // console.log(poke_jp);
          // 英語名ポケモン名仮（日本語になってることも）
          poke_en = match[1];
          poke_jp = poke_dic[poke_en];
        }
      }
    }

    if (typeof poke_en !== "undefined" &&
        typeof poke_jp !== "undefined"
    ) {
      var nm = $('.home-map-tooltip').attr("data-original-title");
      var replace_str = nm.replace(poke_en, poke_jp);
      $('.home-map-tooltip').attr("data-original-title", replace_str);

      // tip
      var tip = $('.tooltip-inner');
      if (tip !== "undefined") {
        var re = function() {
          tip.html(replace_str);
        }
        re();
      　setTimeout(re, 100);
      }
    }

　　setTimeout(countup, 300);
　} 

  // 何度も呼ぶ
　countup();
});
