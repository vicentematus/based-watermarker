import "./style.css";
import watermark from "watermarkjs";

console.log(watermark);
const upload = document.querySelector("input[type=file]");

upload.addEventListener("change", (e) => {
	console.log(e.target.files[0]);
	console.log("We upload a file");
	watermark([e.target.files[0], "img/watermark/logo.png"])
		.image(watermark.image.lowerLeft(1))
		.then((img) => document.getElementById("container").appendChild(img));
});
