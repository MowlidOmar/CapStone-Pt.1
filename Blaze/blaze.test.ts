import { Blaze } from "./basePage";

const Blaze =  new Blaze();

test("phones link test", async () => {
  await Blaze.navigate();
  await Blaze.click(Blaze.phonesBtn);
  let value = await Blaze.driver.getCurrentUrl();
  expect(value).toBe(Blaze.url);
});

test("monitor link review", async () => {
  await Blaze.click(Blaze.monitorsBtn);
  let value = await Blaze.driver.getCurrentUrl();
  expect(value).toBe(Blaze.url);
});

test("laptop nav test", async () => {
  await Blaze.click(Blaze.laptopsBtn);
  let value = await Blaze.driver.getCurrentUrl();
  expect(value).toBe(Blaze.url);
});
test("sign-up button", async () => {
  await Blaze.click(Blaze.signupBtn);
  let response = await Blaze.getText(Blaze.subError);
  expect(response).toBe("Field required");
});


afterAll(async () => {
  await Blaze.driver.quit();
});