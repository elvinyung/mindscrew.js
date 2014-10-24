(function(){

  /*
  Brainfuck has the following 8 commands:
  > increment the data pointer (to point to the next cell to the right).
  < decrement the data pointer (to point to the next cell to the left).
  + increment (increase by one) the byte at the data pointer.
  - decrement (decrease by one) the byte at the data pointer.
  . output the byte at the data pointer.
  , accept one byte of input, storing its value in the byte at the data pointer.
  [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
  ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
  */

  var BFcommands = {
    '>': function(state){
      state.
      state.ptr++;
    },
    '<': function(state){
      state.ptr--;
    },
    '+': function(state){
      state.data[state.ptr] = state.data[state.ptr] || 0;
      state.data[state.ptr]++;
    },
    '-': function(state){
      state.data[state.ptr] = state.data[state.ptr] || 0;
      state.data[state.ptr]--;
    },
    '.': function(state){
      console.log(state.data[state.ptr]);
    },
    ',': function(state){
      state.data[state.ptr];
    },
    '[': function(state){
      state.loop = state.loop || [];
      state.loop.push('');
    },
    ']': function(state){
      state.
      state.data[state.ptr] ? {/* go to loop start*/} : {/* noop */}
    }

  }

  var interpretBF = function(BFsrc) {
    var out = '';
  }
})();

function(f){return ((function(x){return f(x(x));})(function(x){return f(x(x));}));}
function(f){return ((function(x){return f(x(x));})(function(x){return f(x(x));}));}