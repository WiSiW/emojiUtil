/**
 * 调用Emoji.addEmoji(tableId,textId,imgId)
 * tableId：表情框插入的位置的id
 * textId：输入框id
 * imgId：点击显示输入框的图片
 */
var EmojiUtil = (function () {
    var that;
    var emojies = [
        "\u{1F601}","\u{1F602}","\u{1F603}","\u{1F604}","\u{1F605}","\u{1F606}","\u{1F609}","\u{1F60A}","\u{1F60B}","\u{1F60C}","\u{1F60D}",
        "\u{1F60F}","\u{1F612}","\u{1F613}","\u{1F614}","\u{1F616}","\u{1F618}","\u{1F61A}","\u{1F61C}","\u{1F61D}","\u{1F61E}","\u{1F620}",
        "\u{1F621}","\u{1F622}","\u{1F623}","\u{1F624}","\u{1F625}","\u{1F628}","\u{1F629}","\u{1F62A}","\u{1F62B}","\u{1F62D}","\u{1F630}",
        "\u{1F631}","\u{1F632}","\u{1F633}","\u{1F635}","\u{1F637}","\u{1F638}","\u{1F639}","\u{1F63A}","\u{1F63B}","\u{1F63C}","\u{1F63D}",
        "\u{1F63E}","\u{1F63F}","\u{1F640}","\u{1F446}","\u{1F447}","\u{1F448}","\u{1F449}","\u{1F44A}","\u{1F44B}","\u{1F44C}","\u{1F44D}",
        "\u{1F44E}","\u{1F44F}","\u{1F450}","\u{270A}","\u{270B}"
    ];

    var obj = function () {
        that = this;
    };

    obj.prototype = {
        addEmoji: function (insId,textId,imgId) {
            // 创建表格
            that._createTable(insId);
            var emojiTable = document.getElementById("emoji-table");
            // 为点击图片添加事件
            that._imgAddListner(emojiTable,imgId);
            // 在表格中创建表情
            that._createEmoji(emojiTable,textId)
        },

        _imgAddListner: function (table,imgId) {
            var img = document.getElementById(imgId);
            img.onclick = function () {
                that.toggleTableStyle(table);
            };
        },

        _createTable: function (insId) {
            var table = document.createElement("table");
            table.id = "emoji-table";
            table.style.width = "230px";
            table.style.height = "150px";
            table.style.cursor = "pointer";
            table.style.backgroundColor = "#fafafa";
            table.style.position = "absolute";
            table.style.top = "-"+ (emojies.length/10*23 + 20) +"px";
            table.style.display = "none";
            var parent = document.getElementById(insId);
            parent.appendChild(table);
        },

        _createEmoji: function (table,textId) {
            for(let i = 0 ; i < emojies.length ; i++){
                var tr;
                if(i == 0 || i == 10 || i == 20 || i == 30 || i == 40 || i == 50){
                    tr = document.createElement("tr");
                    tr.id = "tr" + parseInt(i/10);
                    tr.style.cursor = "pointer";
                    table.appendChild(tr);
                }
                if( i>=0 && i <=9 || i>=10 && i <=19 || i>=20 && i <=29 || i>=30 && i <=39 || i>=40 && i <=49 || i>=50 && i <=59 ){
                    let td = document.createElement("td");
                    td.style.width = "23px";
                    td.style.height = "25px";
                    td.style.padding = "0px";
                    td.style.boxSizing = "border-box";
                    td.style.cursor = "pointer";
                    td.innerText = emojies[i];
                    td.onclick = function () {
                        var send = document.getElementById(textId);
                        that.toggleTableStyle(table);
                        send.innerText = send.innerHTML + emojies[i];
                    };
                    tr = document.getElementById("tr" + parseInt(i/10));
                    tr.appendChild(td)
                }
            }
        },

        toggleTableStyle: function (table) {
            if(table.style.display == "block"){
                table.style.display = "none";
            }else{
                table.style.display = "block"
            }
        }

    };

    return new obj();
})();