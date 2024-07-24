const { app, BrowserWindow} = require("electron")

function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 500,
		resizable: false,
		webPreferences: {
			nodeIntergration: true
		}
	});
	win.loadFile("index.html");

};

app.whenReady().then(createWindow);

app.on("windowsAllClosed", () => {
	if(process.platform !== "darwin") {
		app.quit
	}
});

app.on("activate", () => {
	if(BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
});


function convert() {
	var num = document.getElementById("input1").value;
	console.log(num);
	var result = parseInt(num) * 23000;
	document.getElementById("input2").value = result.toFixed(0);

	if (document.getElementById("input2").value === "NaN"){
		document.getElementById("input2").value = ""
	};

}



