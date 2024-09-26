# Design Patterns

`Design patterns are reusable solutions to commonly occurring problems in software design.`

<br>

| [Creational Design Patterns](#creational-design-patterns) | [Structural Design Patterns](#structural-design-patterns) | [Behavioral Design Patterns](#behavioral-design-patterns) |
| :-------------------------------------------------------- | :-------------------------------------------------------- | :-------------------------------------------------------- |
| [Simple Factory](#-simple-factory)                        | [Adapter](#-adapter)                                      | [Chain of Responsibility](#-chain-of-responsibility)      |
| [Factory Method](#-factory-method)                        | [Bridge](#-bridge)                                        | [Command](#-command)                                      |
| [Abstract Factory](#-abstract-factory)                    | [Composite](#-composite)                                  | [Iterator](#-iterator)                                    |
| [Builder](#-builder)                                      | [Decorator](#-decorator)                                  | [Mediator](#-mediator)                                    |
| [Prototype](#-prototype)                                  | [Facade](#-facade)                                        | [Memento](#-memento)                                      |
| [Singleton](#-singleton)                                  | [Flyweight](#-flyweight)                                  | [Observer](/behavioral/observer)                          |
|                                                           | [Proxy](#-proxy)                                          | [Visitor](#-visitor)                                      |
|                                                           |                                                           | [Strategy](/behavioral/strategy)                          |
|                                                           |                                                           | [State](#-state)                                          |
|                                                           |                                                           | [Template Method](#-template-method)                      |

<br>

# Introduction

Design patterns are solutions to recurring problems; **guidelines on how to tackle certain problems**. They are not classes, packages or libraries that you can plug into your application and wait for the magic to happen. These are, rather, guidelines on how to tackle certain problems in certain situations.

> Design patterns are solutions to recurring problems; guidelines on how to tackle certain problems

Wikipedia describes them as

> In software engineering, a software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations.

## ⚠️ Be Careful

- Design patterns are not a silver bullet to all your problems.
- Do not try to force them; bad things are supposed to happen, if done so.
- Keep in mind that design patterns are solutions **to** problems, not solutions **finding** problems; so don't overthink.
- If used in a correct place in a correct manner, they can prove to be a savior; or else they can result in a horrible mess of a code.

> Also note that the code samples below are in PHP-7, however this shouldn't stop you because the concepts are same anyways.

## Types of Design Patterns

- [Creational](#creational-design-patterns)
- [Structural](#structural-design-patterns)
- [Behavioral](#behavioral-design-patterns)

# Creational Design Patterns

In plain words

> Creational patterns are focused towards how to instantiate an object or group of related objects.

Wikipedia says

> In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

- [Simple Factory](/creational/simple-factory)
- [Factory Method](/creational/factory-method)
- [Abstract Factory](/creational/abstract-factory)
- [Builder](/creational/builder)
- [Prototype](/creational/prototype)
- [Singleton](/creational/singleton)

# Structural Design Patterns

In plain words

> Structural patterns are mostly concerned with object composition or in other words how the entities can use each other. Or yet another explanation would be, they help in answering "How to build a software component?"

Wikipedia says

> In software engineering, structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.

- [Adapter](/structural/adapter)
- [Bridge](/structural/bridge)
- [Composite](/structural/composite)
- [Decorator](/structural/decorator)
- [Facade](/structural/facade)
- [Flyweight](/structural/flyweight)
- [Proxy](/structural/proxy)

# Behavioral Design Patterns

In plain words

> It is concerned with assignment of responsibilities between the objects. What makes them different from structural patterns is they don't just specify the structure but also outline the patterns for message passing/communication between them. Or in other words, they assist in answering "How to run a behavior in software component?"

Wikipedia says

> In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

- [Chain of Responsibility](/behavioral/chain-of-responsibility)
- [Command](/behavioral/command)
- [Iterator](/behavioral/iterator)
- [Mediator](/behavioral/mediator)
- [Memento](/behavioral/memento)
- [Observer](/behavioral/observer)
- [Visitor](/behavioral/visitor)
- [Strategy](/behavioral/strategy)
- [State](/behavioral/state)
- [Template Method](/behavioral/template-method)

To run typescript code:

```sh
npx tsx file.ts
```

Reference: [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans)
