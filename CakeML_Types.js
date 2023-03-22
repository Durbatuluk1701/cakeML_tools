const typesText = `Runtime.fullGC: unit -> unit
Runtime.fail: unit -> unit
Runtime.debugMsg: string -> unit
Runtime.exit: int -> unit
Runtime.abort: unit -> unit
Runtime.assert: bool -> string -> unit
Option.getOpt: 'a option -> 'a -> 'a
Option.isSome: 'a option -> bool
Option.valOf: 'a option -> 'a
Option.join: 'a option option -> 'a option
Option.map: ('a -> 'b) -> 'a option -> 'b option
Option.mapPartial: ('a -> 'b option) -> 'a option -> 'b option
Option.compose: ('a -> 'b) -> ('c -> 'a option) -> 'c -> 'b option
Option.composePartial: ('a -> 'b option) -> ('c -> 'a option) -> 'c -> 'b option
Option.isNone: 'a option -> bool
Option.map2: ('a -> 'b -> 'c) -> 'a option -> 'b option -> 'c option
Option.compare: ('a -> 'b -> ordering) -> 'a option -> 'b option -> ordering
List.null: 'a list -> bool
List.length: 'a list -> int
List.rev: 'a list -> 'a list
List.@: 'a list -> 'a list -> 'a list
List.hd: 'a list -> 'a
List.tl: 'a list -> 'a list
List.last: 'a list -> 'a
List.getItem: 'a list -> ('a * 'a list) option
List.nth: 'a list -> int -> 'a
List.take: 'a list -> int -> 'a list
List.drop: 'a list -> int -> 'a list
List.takeUntil: ('a -> bool) -> 'a list -> 'a list
List.dropUntil: ('a -> bool) -> 'a list -> 'a list
List.cmp: ('a -> 'b -> ordering) -> 'a list -> 'b list -> ordering
List.concat: 'a list list -> 'a list
List.map: ('a -> 'b) -> 'a list -> 'b list
List.mapi: (int -> 'a -> 'b) -> 'a list -> 'b list
List.mapPartial: ('a -> 'b option) -> 'a list -> 'b list
List.app: ('a -> 'b) -> 'a list -> unit
List.find: ('a -> bool) -> 'a list -> 'a option
List.filter: ('a -> bool) -> 'a list -> 'a list
List.partition: ('a -> bool) -> 'a list -> 'a list * 'a list
List.foldl: ('a -> 'b -> 'b) -> 'b -> 'a list -> 'b
List.foldli: (int -> 'a -> 'b -> 'b) -> 'b -> 'a list -> 'b
List.foldr: ('a -> 'b -> 'b) -> 'b -> 'a list -> 'b
List.foldri: (int -> 'a -> 'b -> 'b) -> 'b -> 'a list -> 'b
List.exists: ('a -> bool) -> 'a list -> bool
List.all: ('a -> bool) -> 'a list -> bool
List.snoc: 'a -> 'a list -> 'a list
List.genlist: (int -> 'a) -> int -> 'a list
List.tabulate: int -> (int -> 'a) -> 'a list
List.collate: ('a -> 'b -> ordering) -> 'a list -> 'b list -> ordering
List.zip: 'a list * 'b list -> ('a * 'b) list
List.member: 'a -> 'a list -> bool
List.sum: int list -> int
List.unzip: ('a * 'b) list -> 'a list * 'b list
List.pad_right: 'a -> int -> 'a list -> 'a list
List.pad_left: 'a -> int -> 'a list -> 'a list
List.all_distinct: 'a list -> bool
List.isPrefix: 'a list -> 'a list -> bool
List.front: 'a list -> 'a list
List.splitAtPki: (int -> 'a -> bool) -> ('a list -> 'a list -> 'b) -> 'a list -> 'b
List.update: 'a -> int -> 'a list -> 'a list
List.compare: ('a -> 'b -> ordering) -> 'a list -> 'b list -> ordering
List.sort: ('a -> 'a -> bool) -> 'a list -> 'a list
Alist.lookup: ('a * 'b) list -> 'a -> 'b option
Alist.update: ('a * 'b) list -> 'a * 'b -> ('a * 'b) list
Alist.every: ('a * 'b -> bool) -> ('a * 'b) list -> bool
Alist.map: ('a -> 'b) -> ('c * 'a) list -> ('c * 'b) list
Alist.delete: ('a * 'b) list -> 'a -> ('a * 'b) list
Vector.fromList: 'a list -> 'a Vector.vector
Vector.length: 'a Vector.vector -> int
Vector.sub: 'a Vector.vector -> int -> 'a
Vector.tabulate: int -> (int -> 'a) -> 'a Vector.vector
Vector.toList: 'a Vector.vector -> 'a list
Vector.update: 'a Vector.vector -> int -> 'a -> 'a Vector.vector
Vector.concat: 'a Vector.vector list -> 'a Vector.vector
Vector.map: 'a Vector.vector -> ('a -> 'b) -> 'b Vector.vector
Vector.mapi: 'a Vector.vector -> (int -> 'a -> 'b) -> 'b Vector.vector
Vector.foldli: (int -> 'a -> 'b -> 'b) -> 'b -> 'a Vector.vector -> 'b
Vector.foldl: ('a -> 'b -> 'a) -> 'a -> 'b Vector.vector -> 'a
Vector.foldri: (int -> 'a -> 'b -> 'b) -> 'b -> 'a Vector.vector -> 'b
Vector.foldr: ('a -> 'b -> 'b) -> 'b -> 'a Vector.vector -> 'b
Vector.findi: (int -> 'a -> bool) -> 'a Vector.vector -> (int * 'a) option
Vector.find: ('a -> bool) -> 'a Vector.vector -> 'a option
Vector.exists: ('a -> bool) -> 'a Vector.vector -> bool
Vector.all: ('a -> bool) -> 'a Vector.vector -> bool
Vector.collate: ('a -> 'b -> ordering) -> 'a Vector.vector -> 'b Vector.vector -> ordering
String.sub: string -> int -> char
String.implode: char list -> string
String.explode: string -> char list
String.size: string -> int
String.concat: string list -> string
String.substring: string -> int -> int -> string
String.strcat: string -> string -> string
String.^: string -> string -> string
String.extract: string -> int -> int option -> string
String.concatWith: string -> string list -> string
String.str: char -> string
String.translate: (char -> char) -> string -> string
String.split: (char -> bool) -> string -> string * string
String.tokens: (char -> bool) -> string -> string list
String.fields: (char -> bool) -> string -> string list
String.findi: (char -> bool) -> int -> string -> int option
String.isSubstring: string -> string -> bool
String.isSuffix: string -> string -> bool
String.isPrefix: string -> string -> bool
String.compare: string -> string -> ordering
String.<: string -> string -> bool
String.<=: string -> string -> bool
String.>=: string -> string -> bool
String.>: string -> string -> bool
String.collate: (char -> char -> ordering) -> string -> string -> ordering
String.char_escape_seq: char -> string option
String.escape_str: string -> string
String.escape_char: char -> string
Bool.toString: bool -> string
Bool.compare: bool -> bool -> ordering
Pair.map: ('a -> 'b) -> ('c -> 'd) -> 'a * 'c -> 'b * 'd
Pair.toString: ('a -> string) -> ('b -> string) -> 'a * 'b -> string
Pair.compare: ('a -> 'b -> ordering) -> ('c -> 'd -> ordering) -> 'a * 'c -> 'b * 'd -> ordering
Int.+: int -> int -> int
Int.-: int -> int -> int
Int.*: int -> int -> int
Int.div: int -> int -> int
Int.mod: int -> int -> int
Int.<: int -> int -> bool
Int.>: int -> int -> bool
Int.<=: int -> int -> bool
Int.>=: int -> int -> bool
Int.~: int -> int
Int.int_to_string: char -> int -> string
Int.toString: int -> string
Int.fromString: string -> int option
Int.fromNatString: string -> int option
Int.gcd: int -> int -> int
Int.compare: int -> int -> ordering
PrettyPrinter.toAppList: PrettyPrinter.pp_data -> string app_list
PrettyPrinter.no_parens: PrettyPrinter.pp_data -> PrettyPrinter.pp_data
PrettyPrinter.token: string -> PrettyPrinter.pp_data
PrettyPrinter.tuple: PrettyPrinter.pp_data list -> PrettyPrinter.pp_data
PrettyPrinter.spaced_block: PrettyPrinter.pp_data list -> PrettyPrinter.pp_data
PrettyPrinter.app_block: string -> PrettyPrinter.pp_data list -> PrettyPrinter.pp_data
PrettyPrinter.val_eq: string -> ('a -> PrettyPrinter.pp_data) -> 'a -> string -> PrettyPrinter.pp_data
PrettyPrinter.val_hidden_type: string -> string -> PrettyPrinter.pp_data
PrettyPrinter.failure_message: string -> PrettyPrinter.pp_data
PrettyPrinter.unprintable: string -> PrettyPrinter.pp_data
PrettyPrinter.pp_list: ('a -> PrettyPrinter.pp_data) -> 'a list -> PrettyPrinter.pp_data
PrettyPrinter.pp_bool: bool -> PrettyPrinter.pp_data
PrettyPrinter.pp_char: char -> PrettyPrinter.pp_data
PrettyPrinter.pp_string: string -> PrettyPrinter.pp_data
PrettyPrinter.pp_app_list: ('a -> PrettyPrinter.pp_data) -> 'a app_list -> PrettyPrinter.pp_data
PrettyPrinter.pp_pp_data: PrettyPrinter.pp_data -> PrettyPrinter.pp_data
PrettyPrinter.pp_default_type: 'a -> PrettyPrinter.pp_data
Rat.fromInt: int -> rat
Rat.<=: rat -> rat -> bool
Rat.>=: rat -> rat -> bool
Rat.<: rat -> rat -> bool
Rat.>: rat -> rat -> bool
Rat.compare: rat -> rat -> ordering
Rat.min: rat -> rat -> rat
Rat.max: rat -> rat -> rat
Rat.+: rat -> rat -> rat
Rat.-: rat -> rat -> rat
Rat.~: rat -> rat
Rat.*: rat -> rat -> rat
Rat.inv: rat -> rat
Rat./: rat -> rat -> rat
Rat.toString: rat -> string
Rat.pp_rat: rat -> PrettyPrinter.pp_data
Rat.numerator: rat -> int
Rat.denominator: rat -> int
Char.ord: char -> int
Char.chr: int -> char
Char.<: char -> char -> bool
Char.>: char -> char -> bool
Char.<=: char -> char -> bool
Char.>=: char -> char -> bool
Char.isSpace: char -> bool
Char.fromByte: Word8.word -> char
Char.some: char -> char option
Word64.fromInt: int -> Word64.word
Word64.toInt: Word64.word -> int
Word64.toIntSigned: Word64.word -> int
Word64.andb: Word64.word -> Word64.word -> Word64.word
Word64.orb: Word64.word -> Word64.word -> Word64.word
Word64.xorb: Word64.word -> Word64.word -> Word64.word
Word64.notb: Word64.word -> Word64.word
Word64.+: Word64.word -> Word64.word -> Word64.word
Word64.-: Word64.word -> Word64.word -> Word64.word
Word64.<<: Word64.word -> int -> Word64.word
Word64.>>: Word64.word -> int -> Word64.word
Word64.~>>: Word64.word -> int -> Word64.word
Word64.concatAll: Word8.word -> Word8.word -> Word8.word -> Word8.word -> Word8.word -> Word8.word -> Word8.word -> Word8.word -> Word64.word
Word8.fromInt: int -> Word8.word
Word8.toInt: Word8.word -> int
Word8.toIntSigned: Word8.word -> int
Word8.andb: Word8.word -> Word8.word -> Word8.word
Word8.orb: Word8.word -> Word8.word -> Word8.word
Word8.xorb: Word8.word -> Word8.word -> Word8.word
Word8.notb: Word8.word -> Word8.word
Word8.+: Word8.word -> Word8.word -> Word8.word
Word8.-: Word8.word -> Word8.word -> Word8.word
Word8.<<: Word8.word -> int -> Word8.word
Word8.>>: Word8.word -> int -> Word8.word
Word8.~>>: Word8.word -> int -> Word8.word
Word8Array.array: int -> Word8.word -> byte_array
Word8Array.sub: byte_array -> int -> Word8.word
Word8Array.length: byte_array -> int
Word8Array.update: byte_array -> int -> Word8.word -> unit
Word8Array.copy: byte_array -> int -> int -> byte_array -> int -> unit
Word8Array.copyVec: string -> int -> int -> byte_array -> int -> unit
Word8Array.substring: byte_array -> int -> int -> string
Word8Array.findi: (Word8.word -> bool) -> byte_array -> (int * Word8.word) option
Array.array: int -> 'a -> 'a Array.array
Array.arrayEmpty: unit -> 'a Array.array
Array.sub: 'a Array.array -> int -> 'a
Array.length: 'a Array.array -> int
Array.update: 'a Array.array -> int -> 'a -> unit
Array.fromList: 'a list -> 'a Array.array
Array.tabulate: int -> (int -> 'a) -> 'a Array.array
Array.copy: 'a Array.array -> 'a Array.array -> int -> unit
Array.copyVec: 'a Vector.vector -> 'a Array.array -> int -> unit
Array.app: ('a -> 'b) -> 'a Array.array -> unit
Array.appi: (int -> 'a -> 'b) -> 'a Array.array -> unit
Array.modify: ('a -> 'a) -> 'a Array.array -> unit
Array.modifyi: (int -> 'a -> 'a) -> 'a Array.array -> unit
Array.foldli: (int -> 'a -> 'b -> 'b) -> 'b -> 'a Array.array -> 'b
Array.foldl: ('a -> 'b -> 'b) -> 'b -> 'a Array.array -> 'b
Array.foldri: (int -> 'a -> 'b -> 'b) -> 'b -> 'a Array.array -> 'b
Array.foldr: ('a -> 'b -> 'b) -> 'b -> 'a Array.array -> 'b
Array.find: ('a -> bool) -> 'a Array.array -> 'a option
Array.findi: (int -> 'a -> bool) -> 'a Array.array -> (int * 'a) option
Array.exists: ('a -> bool) -> 'a Array.array -> bool
Array.all: ('a -> bool) -> 'a Array.array -> bool
Array.collate: ('a -> 'b -> ordering) -> 'a Array.array -> 'b Array.array -> ordering
Map.lookup: ('a, 'b) map -> 'a -> 'b option
Map.insert: ('a, 'b) map -> 'a -> 'b -> ('a, 'b) map
Map.delete: ('a, 'b) map -> 'a -> ('a, 'b) map
Map.null: ('a, 'b) map -> bool
Map.size: ('a, 'b) map -> int
Map.empty: ('a -> 'a -> ordering) -> ('a, 'b) map
Map.union: ('a, 'b) map -> ('a, 'b) map -> ('a, 'b) map
Map.unionWith: ('a -> 'a -> 'a) -> ('b, 'a) map -> ('b, 'a) map -> ('b, 'a) map
Map.unionWithKey: ('a -> 'b -> 'b -> 'b) -> ('a, 'b) map -> ('a, 'b) map -> ('a, 'b) map
Map.foldrWithKey: ('a -> 'b -> 'c -> 'c) -> 'c -> ('a, 'b) map -> 'c
Map.map: ('a -> 'b) -> ('c, 'a) map -> ('c, 'b) map
Map.mapWithKey: ('a -> 'b -> 'c) -> ('a, 'b) map -> ('a, 'c) map
Map.toAscList: ('a, 'b) map -> ('a * 'b) list
Map.fromList: ('a -> 'a -> ordering) -> ('a * 'b) list -> ('a, 'b) map
Map.isSubmapBy: ('a -> 'b -> bool) -> ('c, 'a) map -> ('c, 'b) map -> bool
Map.isSubmap: ('a, 'b) map -> ('a, 'b) map -> bool
Map.all: ('a -> 'b -> bool) -> ('a, 'b) map -> bool
Map.exists: ('a -> 'b -> bool) -> ('a, 'b) map -> bool
Map.filterWithKey: ('a -> 'b -> bool) -> ('a, 'b) map -> ('a, 'b) map
Map.filter: ('a -> bool) -> ('b, 'a) map -> ('b, 'a) map
Hashtable.delete: ('a, 'b) Hashtable.hashtable -> 'a -> unit
Hashtable.lookup: ('a, 'b) Hashtable.hashtable -> 'a -> 'b option
Hashtable.toAscList: ('a, 'b) Hashtable.hashtable -> ('a * 'b) list
Hashtable.size: ('a, 'b) Hashtable.hashtable -> int
Hashtable.empty: int -> ('a -> int) -> ('a -> 'a -> ordering) -> ('a, 'b) Hashtable.hashtable
Hashtable.clear: ('a, 'b) Hashtable.hashtable -> unit
Hashtable.insert: ('a, 'b) Hashtable.hashtable -> 'a -> 'b -> unit
CommandLine.cline: unit -> string list
CommandLine.name: unit -> string
CommandLine.arguments: unit -> string list
Double.fromWord: Word64.word -> Double.double
Double.toWord: Double.double -> Word64.word
Double.fromString: string -> Double.double
Double.toString: Double.double -> string
Double.fma: Double.double -> Double.double -> Double.double -> Double.double
Double.+: Double.double -> Double.double -> Double.double
Double.-: Double.double -> Double.double -> Double.double
Double.*: Double.double -> Double.double -> Double.double
Double./: Double.double -> Double.double -> Double.double
Double.<: Double.double -> Double.double -> bool
Double.<=: Double.double -> Double.double -> bool
Double.>: Double.double -> Double.double -> bool
Double.>=: Double.double -> Double.double -> bool
Double.=: Double.double -> Double.double -> bool
Double.abs: Double.double -> Double.double
Double.sqrt: Double.double -> Double.double
Double.~: Double.double -> Double.double
Marshalling.n2w2: int -> byte_array -> int -> unit
Marshalling.w22n: byte_array -> int -> int
TextIO.stdIn: TextIO.instream
TextIO.stdOut: TextIO.outstream
TextIO.stdErr: TextIO.outstream
TextIO.output1: TextIO.outstream -> char -> unit
TextIO.output: TextIO.outstream -> string -> unit
TextIO.print: string -> unit
TextIO.print_err: string -> unit
TextIO.print_list: string list -> unit
TextIO.openIn: string -> TextIO.instream
TextIO.openOut: string -> TextIO.outstream
TextIO.closeOut: TextIO.outstream -> unit
TextIO.closeIn: TextIO.instream -> unit
TextIO.input1: TextIO.instream -> char option
TextIO.inputLine: TextIO.instream -> string option
TextIO.inputLines: TextIO.instream -> string list
TextIO.inputLinesFrom: string -> string list option
TextIO.inputAll: TextIO.instream -> string
TextIO.copy: TextIO.instream -> TextIO.outstream -> unit
TextIO.b_openStdInSetBufferSize: int -> TextIO.b_instream
TextIO.b_openStdIn: unit -> TextIO.b_instream
TextIO.b_openInSetBufferSize: string -> int -> TextIO.b_instream
TextIO.b_openIn: string -> TextIO.b_instream
TextIO.b_closeIn: TextIO.b_instream -> unit
TextIO.b_input: TextIO.b_instream -> byte_array -> int -> int -> int
TextIO.b_input1: TextIO.b_instream -> char option
TextIO.b_inputUntil: TextIO.b_instream -> char -> string
TextIO.b_inputLine: TextIO.b_instream -> string option
TextIO.b_inputLineTokens: TextIO.b_instream -> (char -> bool) -> (string -> 'a) -> 'a list option
TextIO.b_inputLines: TextIO.b_instream -> string list
TextIO.b_inputLinesFrom: string -> string list option
TextIO.b_inputLinesStdIn: unit -> string list
TextIO.b_inputAllTokens: TextIO.b_instream -> (char -> bool) -> (string -> 'a) -> 'a list list
TextIO.b_inputAllTokensFrom: string -> (char -> bool) -> (string -> 'a) -> 'a list list option
TextIO.b_inputAllTokensStdIn: (char -> bool) -> (string -> 'a) -> 'a list list option
TextIO.foldChars: (char -> 'a -> 'a) -> 'a -> string option -> 'a option
TextIO.foldLines: (string -> 'a -> 'a) -> 'a -> string option -> 'a option
TextIO.foldTokens: (char -> bool) -> (string -> 'a) -> ('a list -> 'b -> 'b) -> 'b -> string option -> 'b option
fst: 'a * 'b -> 'a
snd: 'a * 'b -> 'b
curry: ('a * 'b -> 'c) -> 'a -> 'b -> 'c
uncurry: ('a -> 'b -> 'c) -> 'a * 'b -> 'c
o: ('a -> 'b) -> ('c -> 'a) -> 'c -> 'b
id: 'a -> 'a
flip: ('a -> 'b -> 'c) -> 'b -> 'a -> 'c
const: 'a -> 'b -> 'a
update: 'a -> 'b -> ('a -> 'b) -> 'a -> 'b
exp: int -> int -> int
min: int -> int -> int
max: int -> int -> int
even: int -> bool
odd: int -> bool
funpow: ('a -> 'a) -> int -> 'a -> 'a
abs_diff: int -> int -> int
pre: int -> int
while: ('a -> bool) -> ('a -> 'a) -> 'a -> 'a
owhile: ('a -> bool) -> ('a -> 'a) -> 'a -> 'a option
least: (int -> bool) -> int
repeat: ('a -> 'a) -> 'a -> 'b
+: int -> int -> int
-: int -> int -> int
*: int -> int -> int
div: int -> int -> int
mod: int -> int -> int
<: int -> int -> bool
>: int -> int -> bool
<=: int -> int -> bool
>=: int -> int -> bool
~: int -> int
@: 'a list -> 'a list -> 'a list
=: 'a -> 'a -> bool
not: bool -> bool
<>: 'a -> 'a -> bool
^: string -> string -> string
:=: 'a ref -> 'a -> unit
!: 'a ref -> 'a
pp_exn: 'a -> PrettyPrinter.pp_data
pp_unit: 'a -> PrettyPrinter.pp_data
pp_vector: ('a -> PrettyPrinter.pp_data) -> 'a Vector.vector -> PrettyPrinter.pp_data
pp_list: ('a -> PrettyPrinter.pp_data) -> 'a list -> PrettyPrinter.pp_data
pp_bool: bool -> PrettyPrinter.pp_data
pp_char: char -> PrettyPrinter.pp_data
pp_string: string -> PrettyPrinter.pp_data
pp_ref: 'a -> 'b -> PrettyPrinter.pp_data
pp_array: 'a -> 'b -> PrettyPrinter.pp_data
pp_word8array: 'a -> PrettyPrinter.pp_data
pp_fun: PrettyPrinter.pp_data
pp_int: int -> PrettyPrinter.pp_data
pp_word8: Word8.word -> PrettyPrinter.pp_data
pp_word64: Word64.word -> PrettyPrinter.pp_data
pp_option: ('a -> PrettyPrinter.pp_data) -> 'a option -> PrettyPrinter.pp_data
pp_ordering: ordering -> PrettyPrinter.pp_data
pp_sum: ('a -> PrettyPrinter.pp_data) -> ('b -> PrettyPrinter.pp_data) -> ('a, 'b) sum -> PrettyPrinter.pp_data
pp_app_list: ('a -> PrettyPrinter.pp_data) -> 'a app_list -> PrettyPrinter.pp_data
print: string -> unit
print_app_list: string app_list -> unit
print_int: int -> unit
print_pp: PrettyPrinter.pp_data -> unit`


const buildDom = (matches, regex) => {
	let outputBlock = document.createElement("ul");
	for (let i = 0; i < matches.length; i++) {
		let current = matches[i];
		let currentBlock = document.createElement("li");
		// Allows for case insensitive match
		const newReg = new RegExp(`${regex}`, "img");
		let output = current[0].replaceAll(newReg, (cap) => `<b>${cap}</b>`);
		currentBlock.innerHTML = output;
		outputBlock.appendChild(currentBlock);
	}
	return outputBlock;
}

const hard_reset = () => {
	document.querySelector("#regex_field").value = "";
	reset_search();
}

const reset_search = () => {
	document.querySelector("#results > ul")?.remove();
}

const execute_search = () => {
	// First we reset the previous search
	reset_search();
	// Now we add new stuff
	let val = document.getElementById("regex_field").value;
	const reg = new RegExp("^.*" + val + ".*$", "img");
	const matches = [...typesText.matchAll(reg)];
	document.getElementById("results").appendChild(buildDom(matches,val));
}

const load_all = () => {
	const reg = new RegExp("^.*$", "img");
	const matches = [...typesText.matchAll(reg)];
	document.getElementById("results").appendChild(buildDom(matches,"\0"));
}

document.querySelector("#regex_field").addEventListener("keyup", () => {
	execute_search();
});

window.addEventListener("load", () => {
	hard_reset();
	load_all();
});
