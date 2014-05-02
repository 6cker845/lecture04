var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	//animationのイベントを取り除くことで初期状態に戻す。

	foxkeh.setAttribute("class", "");
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
	//removeEventListenerを一回記述することで"animation”を再定義している。
	//endFlipFoxkehを呼び出す。

	foxkeh.setAttribute("class", "flip");
	//foxkehの振る舞いはflip.cssに記述してあるのでそれを呼び出す。
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
	//slideinをクラスに設定。foxkehの振る舞いはslidein.cssに記述してあるのでそれを呼び出す。

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	//ここでendSlideinFoxkehAndStartFlipFoxkehを呼び出している。
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//ボタンをclickすることでstartSlideinFoxeh関数が呼び出される。
