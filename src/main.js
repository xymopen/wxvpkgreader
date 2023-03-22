import read from "./read.js";

/** @param {FileList} files */
export default async function main(files) {
	const [file] = files;

	for await (let entry of read(file)) {
		console.log(entry);
	}
}
