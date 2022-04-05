/*
Created By ChinuLz
Thanks to my self
*/

function spin() {
    //buahnya
    var buah1 = ['🍋','🍐','🍓','🍇','🍒'];
        var buah2 = ['🍋','🍐','🍓','🍇','🍒'];
            var buah3 = ['🍋','🍐','🍓','🍇','🍒'];
                var buah4 = ['🍋','🍐','🍓','🍇','🍒'];
                    var buah5 = ['🍋','🍐','🍓','🍇','🍒'];
                        var buah6 = ['🍋','🍐','🍓','🍇','🍒'];
                            var buah7 = ['🍋','🍐','🍓','🍇','🍒'];
                                var buah8 = ['🍋','🍐','🍓','🍇','🍒'];
                                    var buah9 = ['🍋','🍐','🍓','🍇','🍒'];
                                        var buah10 = ['🍋','🍐','🍓','🍇','🍒'];
                                            var buah11 = ['🍋','🍐','🍓','🍇','🍒'];
                                                var buah12 = ['🍋','🍐','🍓','🍇','🍒'];
        var buah13 = ['🍋','🍐','🍓','🍇','🍒'];
                                                var buah14 = ['🍋','🍐','🍓','🍇','🍒'];
                                            var buah15 = ['🍋','🍐','🍓','🍇','🍒'];
                                        var buah16 = ['🍋','🍐','🍓','🍇','🍒'];
                                    var buah17 = ['🍋','🍐','🍓','🍇','🍒'];
                                var buah18 = ['🍋','🍐','🍓','🍇','🍒'];
                            var buah19 = ['🍋','🍐','🍓','🍇','🍒'];
                        var buah20 = ['🍋','🍐','🍓','🍇','🍒'];
                    var buah21 = ['🍋','🍐','🍓','🍇','🍒'];
                var buah22 = ['🍋','🍐','🍓','🍇','🍒'];
            var buah23 = ['🍋','🍐','🍓','🍇','🍒'];
        var buah24 = ['🍋','🍐','🍓','🍇','🍒'];
    var buah25 = ['🍋','🍐','🍓','🍇','🍒'];
            
    //outputnya
    var opt1 = buah1[Math.floor(Math.random() * (buah1.length))];
        var opt2 = buah2[Math.floor(Math.random() * (buah2.length))];
            var opt3 = buah3[Math.floor(Math.random() * (buah3.length))];
                var opt4 = buah4[Math.floor(Math.random() * (buah4.length))];
                    var opt5 = buah5[Math.floor(Math.random() * (buah5.length))];
                        var opt6 = buah5[Math.floor(Math.random() * (buah6.length))];
                            var opt7 = buah5[Math.floor(Math.random() * (buah7.length))];
                                var opt8 = buah5[Math.floor(Math.random() * (buah8.length))];
                                    var opt9 = buah5[Math.floor(Math.random() * (buah9.length))];
                                        var opt10 = buah5[Math.floor(Math.random() * (buah10.length))];
                                            var opt11 = buah1[Math.floor(Math.random() * (buah11.length))];
                                                var opt12 = buah2[Math.floor(Math.random() * (buah12.length))];
    var opt13 = buah3[Math.floor(Math.random() * (buah13.length))];
                                                var opt14 = buah4[Math.floor(Math.random() * (buah14.length))];
                                            var opt15 = buah5[Math.floor(Math.random() * (buah15.length))];
                                        var opt16 = buah5[Math.floor(Math.random() * (buah15.length))];
                                    var opt17 = buah5[Math.floor(Math.random() * (buah17.length))];
                                var opt18 = buah5[Math.floor(Math.random() * (buah18.length))];
                            var opt19 = buah5[Math.floor(Math.random() * (buah19.length))];
                        var opt20 = buah5[Math.floor(Math.random() * (buah20.length))];
                    var opt21 = buah5[Math.floor(Math.random() * (buah21.length))];
                var opt22 = buah5[Math.floor(Math.random() * (buah22.length))];
            var opt23 = buah5[Math.floor(Math.random() * (buah23.length))];
        var opt24 = buah5[Math.floor(Math.random() * (buah24.length))];
    var opt25 = buah5[Math.floor(Math.random() * (buah25.length))];
            
    //write outputnya
    document.getElementById('buah1').innerHTML = opt1;
        document.getElementById('buah2').innerHTML = opt2;
            document.getElementById('buah3').innerHTML = opt3;
                document.getElementById('buah4').innerHTML = opt4;
                    document.getElementById('buah5').innerHTML = opt5;
                        document.getElementById('buah6').innerHTML = opt6;
                            document.getElementById('buah7').innerHTML = opt7;
                                document.getElementById('buah8').innerHTML = opt8;
                                    document.getElementById('buah9').innerHTML = opt9;
                                        document.getElementById('buah10').innerHTML = opt10;
                                            document.getElementById('buah11').innerHTML = opt11;
                                                document.getElementById('buah12').innerHTML = opt12;
    document.getElementById('buah13').innerHTML = opt13;
                                                document.getElementById('buah14').innerHTML = opt14;
                                            document.getElementById('buah15').innerHTML = opt15;
                                        document.getElementById('buah16').innerHTML = opt16;
                                    document.getElementById('buah17').innerHTML = opt17;
                                document.getElementById('buah18').innerHTML = opt18;
                            document.getElementById('buah19').innerHTML = opt19;
                        document.getElementById('buah20').innerHTML = opt20;
                    document.getElementById('buah21').innerHTML = opt21;
                document.getElementById('buah22').innerHTML = opt22;
            document.getElementById('buah23').innerHTML = opt23;
        document.getElementById('buah24').innerHTML = opt24;
    document.getElementById('buah25').innerHTML = opt25;
}

var msc = document.querySelector('audio');
    function play() {
        msc.play();
    }
    function pause() {
        msc.pause()
    }