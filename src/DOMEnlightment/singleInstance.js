const SinglePlayer =(function () {
  let instance;
  function initSingletone (){
    //private methods
    //via closure
    function privateSelect () {
      console.log('Selectgame mode')
    }

    
    //private variblsessection
    const privateGameTypeSelector = 'singleplayer';
    const privateRandom = Math.random();

    return {
      //public methods sections
      publicShowRandom:function () {
        return privateRandom;
      },

    }
  }


  return {
    //Check instanse existance
    getInstance: function() {
      if (!instance) {
        instance = initSingletone();
      }

      return instance;
    }
  }
})();


const singletoneA = SinglePlayer.getInstance();
console.log(singletoneA.publicShowRandom())
console.log(singletoneA.publicShowRandom())
console.log(singletoneA.publicShowRandom())
console.log(singletoneA.publicShowRandom())


const singletoneB = SinglePlayer.getInstance();

console.log(singletoneB.publicShowRandom());
console.log(singletoneB.publicShowRandom());
console.log(singletoneB.publicShowRandom());
console.log(singletoneB.publicShowRandom());