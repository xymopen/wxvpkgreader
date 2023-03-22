import JSZip from "jszip";

import read from "./read.js";
import download from "./download.js";

/** @param {FileList} files */
export default async function main(files) {
	const [file] = files;
	const zip = new JSZip();

	for await (let entry of read(file)) {
		console.debug(entry);
		zip.file(entry.name.replace(/^\//, ""), entry.body);
	}

	const zipFilename = (/\.[^.]+$/).test(file.name) ? file.name.replace(/\.[^.]+$/, ".zip") : `${file.name}.zip`;
	const zipBlob = await zip.generateAsync({ type: "blob" })
	const zipUrl = URL.createObjectURL(zipBlob)
	download(zipUrl, zipFilename);
	URL.revokeObjectURL(zipUrl)
}
