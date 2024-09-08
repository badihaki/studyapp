const card = require("../components/Card")

// test whether card gets the correct question
test("Card question test", (question)=>{
    expect(card).toContain(question);
})