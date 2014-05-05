var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
	//slideinをクラスに設定。slideinの振る舞いはcssに記述してある。アニメーションが始まる。

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
	//
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
>>>>>>> origin/make_slidein_retriable
//ボタンを押すことでstartSlideinFoxeh関数が呼び出される。
