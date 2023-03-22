const FILE_COUNT_BEGIN = 18;
const FILE_COUNT_END = 22;
const FILF_INFO_BEGIN = 22;

/**
 * @param {Blob} blob
 */
async function* read10(blob) {
	console.debug("Reading version 0");

	const k = new DataView(
		await blob.slice(
			FILE_COUNT_BEGIN,
			FILE_COUNT_END
		).arrayBuffer()
	)
		.getInt32(0, false);

	let i = FILF_INFO_BEGIN;

	for (let j = 0; j < k; j += 1) {
		const nameLength = new DataView(
			await blob.slice(
				i,
				i + 4
			).arrayBuffer()
		)
			.getInt32(0, false);
		const name = new TextDecoder().decode(await blob.slice(
			i + 4,
			i + 4 + nameLength
		).arrayBuffer());
		i += 4 + nameLength;

		const dv = new DataView(
			await blob.slice(
				i,
				i + 1 + 2 + 4 + 4
			).arrayBuffer()
		);
		i += 1 + 2 + 4 + 4;

		const offset = dv.getInt32(0 + 1 + 2, false);
		const length = dv.getInt32(0 + 1 + 2 + 4, false);

		yield {
			name: name,
			encType: dv.getInt8(0),
			mode: dv.getInt16(0 + 1, false),
			body: blob.slice(offset, offset + length),
			offset,
			length,
		};
	}
}

export default read10;
