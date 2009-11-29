layout = new LinearLayout(plasmoid);
layout.setOrientation(0);
 
//label = new Label();
//layout.addItem(label);
 
//label.text = 'Updating from OneManga..';

//var busy = new BusyWidget();
//layout.addItem(busy);

var wv = new WebView();
layout.addItem(wv);
var css = "<style>a {font-size: small; text-decoration: none} a:hover {text-decoration: underline}</style>";
wv.html = css+'<h3>Updating from OneManga..</h3>';


plasmoid.dataUpdate = function(source,data) {
  wv.html = css+"<h3>OneManga Updates</h3>";
  //layout.removeItem(busy);

  for (var i in data)
    wv.html += '<br/><a href="'+data[i]+'">'+i+'</a>';
    //label.text += "\n" + i;
}

plasmoid.dataEngine("plasma-dataengine-pyyql").connectSource("onemanga", plasmoid, 500);