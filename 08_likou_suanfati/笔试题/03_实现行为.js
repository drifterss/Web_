class ManBehavior {
  constructor(name) {
    this.action = [];
    this.action.push(`Hi! This is ${name}!`);
  }

  eat(str) {
    this.action.push(`Eat ${str}~`);
    return this;
  }

  eatFirst(str) {
    this.action.unshift(`Eat ${str}~`);
    return this;
  }

  execute() {
    this.action.forEach((element) => {
      console.log(element);
    });
  }
}

// 测试
new ManBehavior("Hank").execute();
new ManBehavior("Hank").eat("dinner").eat("supper").execute();
new ManBehavior("Hank").eat("dinner").eatFirst("lunch").execute();
new ManBehavior("Hank")
  .eat("dinner")
  .eatFirst("lunch")
  .eatFirst("breakfast")
  .execute();
