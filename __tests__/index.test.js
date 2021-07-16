'use strict';

const LL = require('../link.js');
const circle = require('../index.js');
const Node = require('../node.js');

describe('Should test Circle', () => {
  it('test if Circle = True', () => {

    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = a;
    let list = new LL();
    list.head = a;
    expect(circle(list)).toBe(true);
    console.log(list);
  });

  it('test if Circle = False', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = null;
    let list = new LL();
    list.append(a);
    list.append(b);
    list.append(c);
    list.append(d);
    expect(circle(list)).toBe(false);
    console.log(list);
  });

});