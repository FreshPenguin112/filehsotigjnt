(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Must Run Unsandboxed');
  }
  const vm = Scratch.vm

  class e {
    getInfo() {
      return {
        id: 'eval',
        name: 'Eval',
        blocks: [
          {
            opcode: 'evalc',
            blockType: Scratch.BlockType.COMMAND,
            text: 'eval [code]',
            arguments: {
              code: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "alert\('Hello World!'\)"
              }
            }
          },
          {
            opcode: 'evalr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'eval [codee]',
            arguments: {
              codee: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Math.PI"
              }
            }
          },
          {
            opcode: 'evalb',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'eval [codeee]',
            arguments: {
              codeee: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Math.random() < 0.5"
              }
            }
          }
        ]
      };
    }
    evalc(args, util) {
      eval(args.code.toString());
    }
    evalr(args, util) {
      return eval(args.codee.toString());
    }
    evalb(args, util) {
      return !!eval(args.codeee.toString());
    }
  }
  Scratch.extensions.register(new e());
})(Scratch);
