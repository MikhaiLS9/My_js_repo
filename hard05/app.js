function f1() {
  let count = 0;
  function f2() {
    let out = "";
    count++;
    out += count + ` Делители этого числа: 1 и ${count} `;
    if (count > 100) return;
    console.log(out);
    f2();
  }
  return f2();
}

f1();
