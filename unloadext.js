(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Must Run Unsandboxed');
  }
  const vm = Scratch.vm

  class ext {
    getInfo() {
      return {
        id: 'unload',
        name: 'Unload',
        blocks: [
          {
            opcode: 'onunload',
            blockType: Scratch.BlockType.HAT,
            text: 'when tab closed'
          }
        ]
      };
    }
    onunload(args, util) {
      var x = false;
      window.onunload = function(){var x = true}
      if (x){return true}
    }
  }
  Scratch.extensions.register(new ext());
})(Scratch);
