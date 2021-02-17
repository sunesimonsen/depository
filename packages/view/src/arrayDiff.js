// Fork of https://github.com/derbyjs/arraydiff
//
// Based on some rough benchmarking, this algorithm is about O(2n) worst case,
// and it can compute diffs on random arrays of length 1024 in about 34ms,
// though just a few changes on an array of length 1024 takes about 0.5ms

export function InsertDiff(index, values) {
  this._index = index;
  this._values = values;
}

export function RemoveDiff(index, howMany) {
  this._index = index;
  this._howMany = howMany;
}

export function MoveDiff(from, to, howMany) {
  this._from = from;
  this._to = to;
  this._howMany = howMany;
}

export function arrayDiff(before, after, equalFn) {
  // Find all items in both the before and after array, and represent them
  // as moves. Many of these "moves" may end up being discarded in the last
  // pass if they are from an index to the same index, but we don't know this
  // up front, since we haven't yet offset the indices.
  //
  // Also keep a map of all the indices accounted for in the before and after
  // arrays. These maps are used next to create insert and remove diffs.
  const beforeLength = before.length;
  const afterLength = after.length;
  const moves = [];
  const beforeMarked = {};
  const afterMarked = {};
  for (let beforeIndex = 0; beforeIndex < beforeLength; beforeIndex++) {
    const beforeItem = before[beforeIndex];
    for (let afterIndex = 0; afterIndex < afterLength; afterIndex++) {
      if (afterMarked[afterIndex]) continue;
      if (!equalFn(beforeItem, after[afterIndex])) continue;
      const from = beforeIndex;
      const to = afterIndex;
      let howMany = 0;
      do {
        beforeMarked[beforeIndex++] = afterMarked[afterIndex++] = true;
        howMany++;
      } while (
        beforeIndex < beforeLength &&
        afterIndex < afterLength &&
        equalFn(before[beforeIndex], after[afterIndex]) &&
        !afterMarked[afterIndex]
      );
      moves.push(new MoveDiff(from, to, howMany));
      beforeIndex--;
      break;
    }
  }

  // Create a remove for all of the items in the before array that were
  // not marked as being matched in the after array as well
  const removes = [];
  for (let beforeIndex = 0; beforeIndex < beforeLength; ) {
    if (beforeMarked[beforeIndex]) {
      beforeIndex++;
      continue;
    }
    const index = beforeIndex;
    let howMany = 0;
    while (beforeIndex < beforeLength && !beforeMarked[beforeIndex++]) {
      howMany++;
    }
    removes.push(new RemoveDiff(index, howMany));
  }

  // Create an insert for all of the items in the after array that were
  // not marked as being matched in the before array as well
  const inserts = [];
  for (let afterIndex = 0; afterIndex < afterLength; ) {
    if (afterMarked[afterIndex]) {
      afterIndex++;
      continue;
    }
    const index = afterIndex;
    let howMany = 0;
    while (afterIndex < afterLength && !afterMarked[afterIndex++]) {
      howMany++;
    }
    const values = after.slice(index, index + howMany);
    inserts.push(new InsertDiff(index, values));
  }

  const insertsLength = inserts.length;
  const removesLength = removes.length;
  const movesLength = moves.length;
  let i, j;

  // Offset subsequent removes and moves by removes
  let count = 0;
  for (i = 0; i < removesLength; i++) {
    const remove = removes[i];
    remove._index -= count;
    count += remove._howMany;
    for (j = 0; j < movesLength; j++) {
      const move = moves[j];
      if (move._from >= remove._index) move._from -= remove._howMany;
    }
  }

  // Offset moves by inserts
  for (i = insertsLength; i--; ) {
    const insert = inserts[i];
    const howMany = insert._values.length;
    for (j = movesLength; j--; ) {
      const move = moves[j];
      if (move._to >= insert._index) move._to -= howMany;
    }
  }

  // Offset the to of moves by later moves
  for (i = movesLength; i-- > 1; ) {
    const move = moves[i];
    if (move._to === move._from) continue;
    for (j = i; j--; ) {
      const earlier = moves[j];
      if (earlier._to >= move._to) earlier._to -= move._howMany;
      if (earlier._to >= move._from) earlier._to += move._howMany;
    }
  }

  // Only output moves that end up having an effect after offsetting
  const outputMoves = [];

  // Offset the from of moves by earlier moves
  for (i = 0; i < movesLength; i++) {
    const move = moves[i];
    if (move._to === move._from) continue;
    outputMoves.push(move);
    for (j = i + 1; j < movesLength; j++) {
      const later = moves[j];
      if (later._from >= move._from) later._from -= move._howMany;
      if (later._from >= move._to) later._from += move._howMany;
    }
  }

  return removes.concat(outputMoves, inserts);
}
