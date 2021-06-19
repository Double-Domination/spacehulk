//observer patttern

const ObserversList = class {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  count() {
    return this.observerList.length;
  }

  getObs(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
  concreteIndex(obj, startIndex) {
    const i = startIndex;
    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i += 1;
    }

    return -1;
  }
  removeAtPos(index) {
    this.observerList.splice(index, 1);
  }
};

//Subject

const Subject = class {
  constructor(props) {
    this.observers = new ObserversList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAtPos(this.observers.concreteIndex(observer, 0));
  }

  notify(context) {
    const obseverCount = this.observers.count;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
  }
};
