(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Must Run Unsandboxed');
  }
  const vm = Scratch.vm
  window.onbeforeunload = function(){vm.runtime.startHats("unload_onunload")}

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
  Scratch.extensions.register(new ext());
})(Scratch);
