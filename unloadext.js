(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Must Run Unsandboxed');
  }
  var vm = Scratch.vm;
  window.onbeforeunload = function(){vm.runtime.startHats("onunload");};

  class ext {
    getInfo() {
      return {
        id: 'unload',
        name: 'Unload',
        blocks: [
          {
            opcode: 'onunload',
            blockType: Scratch.BlockType.HAT,
            text: 'when tab closed',
            isEdgeActivated: false
          }
        ]
      };
      onunload(args,util){}
    }
  Scratch.extensions.register(new ext());
})(Scratch);
