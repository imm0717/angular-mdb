export class BaseModel {
  protected $$exclude = ["configurable"];

  constructor(element?: object | null) {}

  public apply(data?: object | null) {
    if (data) {
      for (const index of Object.keys(data)) {
        if (this.$$exclude.indexOf(index) < 0) {
          const _setter =
            "_set" +
            this.camelize(index.charAt(0).toUpperCase() + index.slice(1));
          if (this[_setter] && typeof this[_setter] === "function") {
            this[_setter](data[index]);
          } else {
            if (this["_" + index]) {
              this["_" + index] = data[index];
            } else {
              if (typeof this[index] !== "function") {
                this[index] = data[index];
              }
            }
          }
        }
      }
    }
  }

  public clone() {
    return this.atomic(this);
  }

  private atomic(value: any) {
    let atomic = null;
    if (typeof value === "object" && value !== null) {
      atomic = {};
      if (typeof value.length !== "undefined" && value.__proto__) {
        atomic = [];
      }
      for (const i of Object.keys(value)) {
        if (this.$$exclude.indexOf(i) < 0) {
          if (
            typeof value[i] !== "function" &&
            i !== "length" &&
            i !== "__proto__"
          ) {
            if (i.replace("$", "") === i) {
              atomic[i] = this.atomic(value[i]);
            }
          }
        }
      }
      if (this.$$emptyObject(atomic)) {
        atomic = null;
      }
    } else {
      atomic = value;
    }
    return atomic;
  }

  private $$emptyObject(obj: any) {
    if (typeof obj === "object") {
      if (obj) {
        if (obj.length === 0) {
          return true;
        } else {
          let name;
          for (name of Object.keys(obj)) {
            if (name !== "_proto_") {
              return false;
            }
          }
          return true;
        }
      }
    }
    return false;
  }

  private camelize(text: string) {
    const frags = text.split("_");
    for (let i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join("");
  }
}
