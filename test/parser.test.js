const {parse} = require("../lib/parser");


test("Simple case", () => {
  const document = `
      allow {
        user = "admin"
      }

      deny {
        user = "anonymous"
      }
  `;
  const [result, error] = parse(document);

  expect(error).toBeNull();
  
  expect(result.allow).toStrictEqual([
    {
      user: "admin"
    }
  ]);

  expect(result.deny).toStrictEqual([
    {
      user: "anonymous"
    }
  ]); 
});

test("Array", () => {
  const document = `
      allow {
        user = "admin"
      }

      allow {
        user = "anhldbk"
      }
  `;
  const [result, error] = parse(document);

  expect(error).toBeNull();

  expect(result.allow).toStrictEqual([
    {
      user: "admin"
    },
    {
      user: "anhldbk"
    }
  ]);

});