const a: { [key: string]: string }[] = [{ b: "" }, { c: "" }, { d: "" }];

a.forEach((o) => {
  console.log(o.xd);

  Object.keys(o).forEach((key) => {
    console.log(a[key]);
  });
});
