/*
*  MIT License                                                                   
*                                                                                
*  Copyright (c) 2023 FreshPenguin112                                              
*                                                                                
*  Permission is hereby granted, free of charge, to any person obtaining a copy  
*  of this software and associated documentation files (the "Software"), to deal 
*  in the Software without restriction, including without limitation the rights  
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     
*  copies of the Software, and to permit persons to whom the Software is         
*  furnished to do so, subject to the following conditions:                      
*                                                                                
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.                               
*                                                                                
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
*  SOFTWARE.                                                                     
*
*/

(function (Scratch) {
    'use strict';
    var translate = function(a){return a}
    var rxFSfi = new Array();
    var rxFSsy = new Array();
    var Search, i, str, str2;

    const folder = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOC40NjI1IiBoZWlnaHQ9IjI3LjciIHZpZXdCb3g9IjAsMCwyOC40NjI1LDI3LjciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjYuMDE5NTMsLTE2NC4xMTg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0iIzk5NjZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNi4yNjk1MywxODUuNzY4NzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjOTk2NmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj7wn5OBPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTMuOTgwNDY4NzU6MTUuODgxMjQ5MjM3MDYwNTMtLT4=';
    const file = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOC40NjI1IiBoZWlnaHQ9IjI3LjciIHZpZXdCb3g9IjAsMCwyOC40NjI1LDI3LjciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjYuMDE5NTMsLTE2NC4xMTg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0iIzk5NjZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNi4yNjk1MywxODUuNzY4NzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjOTk2NmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj7wn5ODPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTMuOTgwNDY4NzU6MTUuODgxMjQ5NjE4NTMwMjYyLS0+';

    class rxFS {
        getInfo() {
            return {
                id: '0832rxfs2',
                name: 'rxFS',
                color1: '#192d50',
                color2: '#192d50',
                color3: '#192d50',
                blocks: [
                    {
                        blockIconURI: file,
                        opcode: 'start',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'start', default: 'Create [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            }
                        }
                    },
                    {
                        blockIconURI: file,
                        opcode: 'folder',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'folder', default: 'Set [STR] to [STR2]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            },
                            STR2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: translate({ id: 'folder_default', default: 'rxFS is good!' }),
                            }
                        }
                    },
                    {
                        blockIconURI: file,
                        opcode: 'sync',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'sync', default: 'Change the location of [STR] to [STR2]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            },
                            STR2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            }
                        }
                    },
                    {
                        blockIconURI: file,
                        opcode: 'del',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'del', default: 'Delete [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            }
                        }
                    },
                    {
                        blockIconURI: file,
                        opcode: 'webin',
                        blockType: Scratch.BlockType.REPORTER,
                        text: translate({ id: 'webin', default: 'Load [STR] from the web' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://0832k12.github.io/rxFS/hello.txt'
                            }
                        }
                    },
                    {
                        blockIconURI: file,
                        opcode: 'open',
                        blockType: Scratch.BlockType.REPORTER,
                        text: translate({ id: 'open', default: 'Open [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            }
                        }
                    },
                    '---',
                    {
                        blockIconURI: folder,
                        opcode: 'clean',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'clean', default: 'Clear the file system' }),
                        arguments: {}
                    },
                    {
                        blockIconURI: folder,
                        opcode: 'in',
                        blockType: Scratch.BlockType.COMMAND,
                        text: translate({ id: 'in', default: 'Import file system from [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/'
                            }
                        }
                    },
                    {
                        blockIconURI: folder,
                        opcode: 'out',
                        blockType: Scratch.BlockType.REPORTER,
                        text: translate({ id: 'out', default: 'Export file system' }),
                        arguments: {}
                    },
                    {
                        blockIconURI: folder,
                        opcode: 'list',
                        blockType: Scratch.BlockType.REPORTER,
                        text: translate({ id: 'list', default: 'List all files under [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/'
                            }
                        }
                    },
                    {
                        blockIconURI: folder,
                        opcode: 'search',
                        blockType: Scratch.BlockType.REPORTER,
                        text: translate({ id: 'search', default: 'Search [STR]' }),
                        arguments: {
                            STR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '/rxFS/example'
                            }
                        }
                    }
                ]
            };
        }


        clean() {
            rxFSfi = [];
            rxFSsy = [];
        }

        sync({ STR, STR2 }) {
            str = encodeURIComponent(STR);
            str2 = encodeURIComponent(STR2);
            if (rxFSsy.indexOf(str) + 1 == 0) {
                rxFSsy[((rxFSsy.indexOf(str) + 1) - 1)] = str2;
            }
        }

        start({ STR }) {
            str = encodeURIComponent(STR);
            if (!(str.charAt((str.length - 1)) == '/') && rxFSsy.indexOf(str) + 1 == 0) {
                rxFSfi.splice(((rxFSfi.length + 1) - 1), 0, null);
                rxFSsy.splice(((rxFSsy.length + 1) - 1), 0, str);
            }
        }

        open({ STR }) {
            return decodeURIComponent(rxFSfi[((rxFSsy.indexOf(encodeURIComponent(STR)) + 1) - 1)]);
        }

        del({ STR }) {
            str = encodeURIComponent(STR);
            rxFSfi[((rxFSsy.indexOf(str) + 1) - 1)] = undefined;
            rxFSsy[((rxFSsy.indexOf(str) + 1) - 1)] = undefined;
        }

        folder({ STR, STR2 }) {
            rxFSfi[((rxFSsy.indexOf(encodeURIComponent(STR)) + 1) - 1)] = encodeURIComponent(STR2);
        }

        search({ STR }) {
            Search = '';
            i = 0;
            str = encodeURIComponent(STR);
            for (var i in rxFSsy) {
                if (!(rxFSsy[(i)].indexOf(str) == undefined)) {
                    Search = [Search, ',"', rxFSsy[(i)], '"'].join('');
                }
            }
            return decodeURIComponent(Search);
        }

        list({ STR }) {
            Search = '';
            i = 0;
            str = encodeURIComponent(STR);
            for (var i in rxFSsy) {
                if (rxFSsy[(i)].slice(0, str.length) == str) {
                    Search = [Search, ',"', rxFSsy[(i)], '"'].join('');
                }
            }
            return decodeURIComponent(Search);
        }

        webin({ STR }) {
            return Scratch.fetch(STR)
                .then((response) => {
                    return response.text();
                })
                .catch((error) => {
                    console.error(error);
                    return 'undefined';
                });
        }

        in({ STR }) {
            rxFSfi = STR.slice(0, STR.indexOf('|')).split(',');
            rxFSsy = STR.slice(((STR.indexOf('|') + 1)), STR.length).split(',');
        }

        out() {
            return [rxFSfi.join(','), '|', rxFSsy.join(',')].join('');
        }
    }

    Scratch.extensions.register(new rxFS());
})(Scratch);
