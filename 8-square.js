const squa = process.argv[2];
const size = Number(squa);

if (!Number.isInteger(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}