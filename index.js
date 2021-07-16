'use strict';

function circle(list) {
  if (!list.head) {
    return false;
  }
  let current = list.head;
  current = current.next;

  while (current) {
    if (current === list.head) {
      return true;
    }
    current = current.next;
  }
  return false;

}

module.exports = circle;