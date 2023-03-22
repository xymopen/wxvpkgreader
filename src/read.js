import read0 from "./read0.js";
import read10 from "./read10.js";

const SPECIAL_START_BEGIN = 0;
const SPECIAL_START_END = 1;
const VERSION_BEGIN = 1;
const VERSION_END = 5;
const INFO_LENGTH_BEGIN = 5;
const INFO_LENGTH_END = 9;

const V0_FILE_LENGTH_BEGIN = 9;
const V0_FILE_LENGTH_END = 13;
const V0_SPECIAL_END_BEGIN = 13;
const V0_SPECIAL_END_END = 14;

const V10_INDEX_LENGTH_BEGIN = 9;
const V10_INDEX_LENGTH_END = 13;
const V10_FILE_LENGTH_BEGIN = 13;
const V10_FILE_LENGTH_END = 17;
const V10_SPECIAL_END_BEGIN = 17;
const V10_SPECIAL_END_END = 18;

/**
 * @param {Blob} blob
 */
async function* read(blob) {
	const dv = new DataView(await blob.slice(0, V0_SPECIAL_END_END).arrayBuffer());

	let version = (() => {
		const r = dv.getUint8(V0_SPECIAL_END_BEGIN);

		if (r !== 14 && r !== 237) {
			return 0;
		}

		return dv.getInt32(VERSION_BEGIN, false);
	})();

	if (version === 0) {
		return yield* read0(blob);
	} else if (version === 10) {
		return yield* read10(blob);
	} else {
		throw new RangeError(`unrecognized version: ${version}`);
	}
}

export default read
