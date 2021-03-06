const test = require("ava");
const rimraf = require("rimraf");

const isThere = require("is-there");
const DM = require("../../lib/index");

const config = {
  output: __dirname + "/tmp/",
  pages: __dirname + "/",
  components: "./test/components.json",
  meta: {
    domain: "website.com",
    title: "Design Manual"
  }
};

test.cb("defaults", t => {
  t.plan(7);
  rimraf.sync(__dirname + "/tmp");

  DM.build(
    Object.assign({}, config, {
      onLog: () => {},
      onComplete: () => {
        setTimeout(() => {
          // test styles/js generated
          t.true(isThere(config.output + "all.min.css"), "css exists");

          // test register files generated
          t.true(
            isThere(config.output + "design-manual-components.json"),
            "design manual components json exists"
          );
          t.true(
            isThere(config.output + "design-manual-config.json"),
            "design manual config json exists"
          );

          // test page generated
          t.true(
            isThere(config.output + "components.html"),
            "components.html exists"
          );

          // test lib files generated
          t.true(
            isThere(config.output + "lib/component1.html"),
            "component1.html exists"
          );
          t.true(
            isThere(config.output + "lib/component2.html"),
            "component2.html exists"
          );
          t.true(
            isThere(config.output + "lib/component3.html"),
            "component3.html exists"
          );

          t.end();
        }, 1000);
      }
    })
  );
});
