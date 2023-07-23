(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Must Run Unsandboxed');
  }
  const vm = Scratch.vm
  const encodingChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"';
  class b91 {
    getInfo() {
      return {
        id: 'base91',
        name: 'Base 91',
        blocks: [
          {
            opcode: 'encode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'encode [TEXT] to base 91',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello, World!"
              }
            }
          },
          {
            opcode: 'decode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'decode [TEXT] from base 91',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ">OwJh>}AQ;r@@Y?F"
              }
            }
          }
        ]
      };
    }
    base91_encode(e) {
      const n = (new TextEncoder).encode(e),
        t = n.length;
      let c = "",
        o = 0,
        r = 0;
      for (let e = 0; e < t; e++) {
        if (r |= n[e] << o, (o += 8) > 13) {
          let e = 8191 & r;
          e > 88 ? (r >>= 13, o -= 13) : (e = 16383 & r, r >>= 14, o -= 14), c += encodingChars.charAt(e % 91) + encodingChars.charAt(e / 91 | 0)
        }
      }
      return o && (c += encodingChars.charAt(r % 91), (o > 7 || r > 90) && (c += encodingChars.charAt(r / 91 | 0))), c
    }
    base91_decode(e) {
      const n = e.length,
        t = new TextDecoder;
      let c = [],
        o = 0,
        r = 0,
        d = -1;
      for (let t = 0; t < n; t++) {
        const n = encodingChars.indexOf(e[t]);
        if (-1 !== n)
          if (d < 0) d = n;
          else {
            o |= (d += 91 * n) << r, r += (8191 & d) > 88 ? 13 : 14;
            do {
              c.push(255 & o), o >>= 8, r -= 8
            } while (r > 7);
            d = -1
          }
      }
      d > -1 && c.push(255 & (o | d << r));
      const h = new Uint8Array(c);
      return t.decode(h)
    }
    encode(args, util) {
      return this.base91_encode(args.TEXT.toString());
    }
    decode(args, util) {
      return this.base91_decode(args.TEXT.toString());
    }
  }
  Scratch.extensions.register(new b91());
})(Scratch);
